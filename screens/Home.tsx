import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import MIICons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <SafeAreaProvider>
      <View>
        <View style={styles.header}>
          <MIICons name="menu" size={40} color={'black'} />
          <MIICons name="account-circle-outline" size={40} color={'black'} />
        </View>
        <View style={styles.viewOne}>
          <View style={styles.orderDetails}>
            <Text
              style={{
                color: 'red',
                fontWeight: '600',
                marginBottom: 10,
                fontSize: 15,
              }}>
              Next Order Scheduled
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: 'white', fontWeight: '600', fontSize: 15}}>
                20 Dec 2023
              </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MIICons name="av-timer" size={40} />
              <Text>10:30 Am | Tuesday</Text>
            </View>
          </View>
          <Divider orientation="vertical" color="#81B622" width={2} />
          <Image
            style={styles.basket}
            source={require('../public/basket.png')}
          />
        </View>
        <LinearGradient
          colors={['#FEC93B', '#FA7125', '#F6130E']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.viewTwo}>
          <Image
            style={styles.product}
            source={require('../public/product.png')}
          />
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 75,
    paddingHorizontal: 10,
    backgroundColor: '#FEC109',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: '#00000',
    shadowOffset: {width: 0, height: 82},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
  },
  viewOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  orderDetails: {
    flexDirection: 'column',
  },
  button: {
    width: 110,
    backgroundColor: '#81B622',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#00000',
    shadowOffset: {width: 0, height: 82},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 5,
  },
  basket: {
    width: 120,
    height: 120,
  },
  viewTwo: {
    width: '100%',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    backgroundGradient: {
      colors: ['#FEC93B', '#FA7125', '#F6130E'],
      start: {x: 0, y: 0.5},
      end: {x: 1, y: 0.5},
      locations: [0, 0.5, 1],
    },
    product: {
      width: '50%',
      //   flex: 1,
    },
  },
});

export default Home;
