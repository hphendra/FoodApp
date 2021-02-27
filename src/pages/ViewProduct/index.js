import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

// ICON
import StarIcon from '../../assets/icons/star.svg';
import ClockIcon from '../../assets/icons/clock.svg';
import JamurIcon from '../../assets/icons/champignon.svg';
import BrokoliIcon from '../../assets/icons/broccoli.svg';
import BananaIcon from '../../assets/icons/banana.svg';
import CapiIcon from '../../assets/icons/capsicum.svg';
import KrjIcon from '../../assets/icons/keranjang.svg';
import PlusIcon from '../../assets/icons/plus.svg';
import MinIcon from '../../assets/icons/minus.svg';

const ViewProduct = ({navigation}) => {
  return (
    <View style={styles.ViewProduct}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        // translucent={true}
      />
      <ScrollView>
        <View>
          <Image
            source={{
              uri:
                'https://www.honestdocs.id/system/blog_articles/main_hero_images/000/002/990/original/Ikan_Mentah_Pada_Hidangan_Sushi__Aman_Untuk_di_Konsumsi.jpg',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.detailProduct}>
          <View style={styles.namaProduct}>
            <Text style={styles.descNamaProduct}>Barbequed Sasi</Text>
            <Text style={styles.descHargaProduct}>
              <Text style={styles.dolardescHargaProduct}>$</Text>6.50
            </Text>
          </View>
          <View style={styles.trProduct}>
            <View style={styles.scProduct}>
              <StarIcon width={20} height={20} />
              <Text style={styles.textRating}>4.9</Text>
              <ClockIcon width={20} height={20} />
              <Text style={styles.textWaktu}>20-30 min</Text>
            </View>
            <View style={styles.boxTambah}>
              <View style={styles.boxisikurang}>
                <MinIcon width={11} height={11} />
              </View>
              <Text style={styles.textmidtambah}>2</Text>
              <View style={styles.boxisitambah}>
                <PlusIcon width={11} height={11} />
              </View>
            </View>
          </View>
          <Text style={styles.textDeskripsi}>
            Sake nigiri sushi is a traditional Japanese type of nigiri sushi. It
            consists of hand-pressed sushi rice that's topped with slices of
            salmon. The dish has a soft texture and a clean finish that makes it
            good.
          </Text>
          <Text style={styles.textIngri}>Ingredients</Text>
          <View style={styles.boxIngri}>
            <View style={styles.isiIngri1}>
              <JamurIcon width={40} height={40} />
            </View>
            <View style={styles.isiIngri2}>
              <BrokoliIcon width={40} height={40} />
            </View>
            <View style={styles.isiIngri3}>
              <BananaIcon width={40} height={40} />
            </View>
            <View style={styles.isiIngri4}>
              <CapiIcon width={40} height={40} />
            </View>
          </View>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
            <View style={styles.buadd}>
              <KrjIcon width={22} height={22} />
              <Text style={styles.text_buadd}>ADD TO CART</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewProduct;

const styles = StyleSheet.create({
  ViewProduct: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  image: {
    height: 320,
  },
  detailProduct: {
    // backgroundColor: 'red',
    margin: 25,
  },
  namaProduct: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descNamaProduct: {
    fontSize: 28,
    color: '#303030',
    fontWeight: '700',
  },
  dolardescHargaProduct: {
    fontSize: 18,
    // marginRight: 3,
    color: '#F36621',
  },
  descHargaProduct: {
    fontSize: 25,
    fontWeight: '700',
    color: '#303030',
  },
  trProduct: {
    // backgroundColor: 'red',
    marginTop: 15,
    flexDirection: 'row',
  },
  scProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'blue',
    flex: 1,
  },
  textRating: {
    fontSize: 16,
    fontWeight: '700',
    color: '#303030',
    marginLeft: 6,
    marginRight: 15,
  },
  textWaktu: {
    fontSize: 16,
    fontWeight: '700',
    color: '#303030',
    marginLeft: 6,
    marginRight: 15,
  },
  boxTambah: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxisikurang: {
    width: 32,
    height: 32,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#F36621',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  text_boxisikurang: {
    fontSize: 30,
  },
  boxisitambah: {
    width: 32,
    height: 32,
    backgroundColor: '#F36621',
    // borderWidth: 1,
    borderRadius: 8,
    // borderColor: '#F36621',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  text_boxisitambah: {
    fontSize: 20,
    color: '#fff',
  },
  textmidtambah: {
    fontSize: 18,
    fontWeight: '700',
  },
  textDeskripsi: {
    fontSize: 15,
    color: '#808080',
    marginTop: 25,
    lineHeight: 20,
  },
  textIngri: {
    fontSize: 22,
    marginTop: 25,
    fontWeight: '700',
    color: '#303030',
  },
  boxIngri: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  isiIngri1: {
    width: 70,
    height: 70,
    backgroundColor: '#FFEFE6',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  isiIngri2: {
    width: 70,
    height: 70,
    backgroundColor: '#E3FFBC',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  isiIngri3: {
    width: 70,
    height: 70,
    backgroundColor: '#FFD9E5',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  isiIngri4: {
    width: 70,
    height: 70,
    backgroundColor: '#FFC1C1',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buadd: {
    height: 60,
    backgroundColor: '#F36621',
    marginTop: 35,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_buadd: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
    marginLeft: 8,
  },
});
