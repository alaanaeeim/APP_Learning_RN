/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../store/CartSlice';
import {RootState} from '../../store/store';

const ProductDetails = ({navigation, route}: any) => {
  const {name, image, price, id, description} = route.params.item;
  const products = useSelector((state: RootState) => state.cart.items);
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();

  const addToCartItems = () => {
    added
      ? navigation.navigate('CartScreen')
      : dispatch(addToCart({product: route.params.item}));
    checkAddedToCartOrNot();
  };

  const checkAddedToCartOrNot = () => {
    const response = products.filter((item: any) => item?.product?.id === id);
    response.length ? setAdded(true) : setAdded(false);
  };

  useEffect(() => {
    checkAddedToCartOrNot();
    navigation.setOptions({
      headerTitle: name,
    });
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>{name}</Text>
        <TouchableOpacity
          style={styles.containerBack}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.backIcon}
            source={require('../../assets/images/backIcon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.pageBody}>
        <Image source={{uri: image}} style={styles.image} />

        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.price}>${price}</Text>
        <View>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.addToCart}
          onPress={() => addToCartItems()}>
          <Text style={styles.addToCartTitle}>
            {added ? 'Open Cart' : 'Add To Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  pageBody: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  image: {
    width: width * 0.95,
    height: height * 0.4,
    resizeMode: 'contain',
  },
  nameContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 25,
    backgroundColor: '#004156',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    paddingBottom: 8,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 25,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
  },
  actionTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  btnAction: {
    width: 30,
    height: 30,
    display: 'flex',
    backgroundColor: '#004156',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingBottom: 2,
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 25,
    marginTop: 3,
  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addToCart: {
    backgroundColor: '#141E30',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: width * 0.8,
    borderRadius: 8,
    bottom: 40,
    height: 40,
  },
  pageTitle: {
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 8,
  },
  header: {
    backgroundColor: '#052555',
    height: 80,
  },
  listCards: {
    paddingHorizontal: 15,
  },
  containerBack: {
    position: 'absolute',
    bottom: 12,
    left: 5,
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  disabled: {
    opacity: 0.2,
  },
});
