import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {DATA} from '../../assets/data/Products';
import {RootState} from '../../store/store';
import {useSelector} from 'react-redux';

const Products = ({navigation}: any) => {
  const products = useSelector((state: RootState) => state.cart.items);

  const CardDetails = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('ProductDetails', {item: item})}>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Products</Text>
        <TouchableOpacity
          style={styles.containerCart}
          onPress={() => navigation.navigate('CartScreen')}>
          <Image
            style={styles.cartIcon}
            source={require('../../assets/images/cartIcon.png')}
          />
          <View style={styles.counterContainer}>
            <Text style={styles.itemsCount}>{products?.length}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.listCards}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <CardDetails item={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginBottom: 20,
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
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    position: 'absolute',
    right: -60,
    top: 5,
  },
});
