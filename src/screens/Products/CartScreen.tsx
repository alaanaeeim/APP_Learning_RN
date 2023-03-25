import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeQuantity, totalState} from '../../store/CartSlice';
import {RootState} from '../../store/store';

const CartScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const DATA = useSelector((state: RootState) => state.cart.items);
  const TotalPrice = useSelector(totalState);

  const CardDetails = ({item}: any) => {
    const {product, quantity} = item;
    return (
      <View style={styles.card} key={product?.id}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProductDetails', {item: product})
          }>
          <Image style={styles.image} source={{uri: product.image}} />
        </TouchableOpacity>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={[styles.name, styles.price]}>$ {product.price}</Text>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.btnAction}
            onPress={() =>
              dispatch(changeQuantity({product: product, quantity: 1}))
            }>
            <Text style={styles.actionTitle}>+</Text>
          </TouchableOpacity>
          <Text style={styles.count}>{quantity}</Text>
          <TouchableOpacity
            style={styles.btnAction}
            onPress={() =>
              dispatch(changeQuantity({product: product, quantity: -1}))
            }>
            <Text style={styles.actionTitle}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Cart Items</Text>
        <TouchableOpacity
          style={styles.containerBack}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.backIcon}
            source={require('../../assets/images/backIcon.png')}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.listCards}>
            <FlatList
              data={DATA}
              renderItem={({item, index}) => (
                <CardDetails key={index} item={item} />
              )}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={styles.details}>
            {DATA.map((item: any) => (
              <View style={styles.dev}>
                <Text style={[styles.titlePrice, {color: 'black'}]}>
                  {item?.product?.name}
                </Text>
                <Text style={[styles.titlePrice, {color: 'black'}]}>
                  {item?.quantity} * {item?.product?.price} $
                </Text>
              </View>
            ))}
            <View style={styles.line} />
            <View style={styles.dev}>
              <Text style={[styles.titlePrice, {color: 'black'}]}>
                Total Price
              </Text>
              <Text style={[styles.titlePrice, {color: 'black'}]}>
                {TotalPrice} $
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 35,
    paddingTop: 20,
    paddingBottom: 50,
  },
  dev: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  titlePrice: {
    fontSize: 18,
    color: 'grey',
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
  containerBack: {
    position: 'absolute',
    bottom: 12,
    left: 5,
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  listCards: {
    flex: 1,
    paddingHorizontal: 15,
  },
  counterContainer: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    backgroundColor: '#FFFFFF',
    width: 25,
    height: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsCount: {
    color: '#000000',
  },
  containerCart: {
    position: 'absolute',
    bottom: -5,
    right: 10,
  },
  cartIcon: {
    width: 50,
    height: 50,
    transform: [{rotateY: '180deg'}],
  },
  card: {
    backgroundColor: '#4A586E',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 120,
    overflow: 'hidden',
  },
  name: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingTop: 20,
  },
  price: {
    position: 'absolute',
    bottom: 10,
    right: 80,
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  btnAction: {
    width: 25,
    height: 25,
    display: 'flex',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingBottom: 2,
  },
  count: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 3,
  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    left: 10,
  },
  actionTitle: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },
  line: {
    height: 2,
    backgroundColor: 'grey',
    marginTop: 10,
  },
});
