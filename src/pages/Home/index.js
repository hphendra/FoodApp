import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// ICON
import Ikon from '../../assets/icons/location.svg';
import Search from '../../assets/icons/search.svg';
import User from '../../assets/icons/user.svg';
import Keranjang from '../../assets/icons/keranjang.svg';

// ICON BOTTOM NAVIGATION
import HomeBotIcon from '../../assets/icons/home_bot.svg';
import KeranjangBotIcon from '../../assets/icons/cart_bot.svg';
import LocationBotIcon from '../../assets/icons/location_bot.svg';
import UserBotIcon from '../../assets/icons/user_bot.svg';

const Home = ({navigation}) => {
  return (
    <View style={styles.home}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.box_header}>
            <View style={styles.IsiheaderLeft}>
              <Ikon width={15} height={15} />
              <Text style={styles.TextLokasi}>Surabaya, Indonesia</Text>
            </View>
            <View style={styles.IsiheaderSearch}>
              <Search width={18} height={18} />
            </View>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('ViewProduct')}>
              <View style={styles.IsiheaderProfile}>
                <User width={18} height={18} />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.BoxMakananKesukaan}>
            <Text style={styles.JudulMK}>Apa makanan yang kamu suka?</Text>
            <View style={styles.BoxIsiMK}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.IsiboxMK}>
                  <Image
                    source={{
                      uri:
                        'https://www.rukita.co/stories/wp-content/uploads/2020/02/byurger.jpg',
                    }}
                    style={styles.gambarFood}
                  />
                  <Text style={styles.textisiboxmk}>Burger</Text>
                </View>
                <View style={styles.IsiboxMK_white}>
                  <Image
                    source={{
                      uri:
                        'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png',
                    }}
                    style={styles.gambarFood}
                  />
                  <Text style={styles.textisiboxmk_white}>Pizza</Text>
                </View>
                <View style={styles.IsiboxMK_white}>
                  <Image
                    source={{
                      uri:
                        'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg',
                    }}
                    style={styles.gambarFood}
                  />
                  <Text style={styles.textisiboxmk_white}>Sushi</Text>
                </View>
                <View style={styles.IsiboxMK_white}>
                  <Image
                    source={{
                      uri:
                        'https://i2.wp.com/www.eatthis.com/wp-content/uploads/2019/06/hot-dog-combinations-with-crazy-toppings.jpg?fit=1200%2C879&ssl=1',
                    }}
                    style={styles.gambarFood}
                  />
                  <Text style={styles.textisiboxmk_white}>Hot Dog</Text>
                </View>
                <View style={styles.IsiboxMK_white_last}>
                  <Image
                    source={{
                      uri:
                        'https://cdn0-production-images-kly.akamaized.net/ZRydGFEA6M2KwFUiZQti1bCkUSQ=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2964333/original/040327100_1573470874-15876789_791554644317395_266044254432788480_n.jpg',
                    }}
                    style={styles.gambarFood}
                  />
                  <Text style={styles.textisiboxmk_white}>Indomie</Text>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.boxPromo}>
            <View style={styles.headerPromo}>
              <Text style={styles.t1headerPromo}>Sushi special</Text>
              <Text style={styles.t2headerPromo}>Lihat Semua</Text>
            </View>
            <View style={styles.boxIsiPromo}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.IsiPromo}>
                  <Image
                    style={styles.image_isi_promo}
                    source={{
                      uri:
                        'https://www.honestdocs.id/system/blog_articles/main_hero_images/000/002/990/original/Ikan_Mentah_Pada_Hidangan_Sushi__Aman_Untuk_di_Konsumsi.jpg',
                    }}
                  />
                  <View style={styles.box_isi_deskripsi}>
                    <Text style={styles.judul_promo}>Barbequed Sasi</Text>
                    <Text style={styles.varian_promo}>
                      Special Sashimi Sushi
                    </Text>
                    <View style={styles.form_harga_promo}>
                      <View style={styles.form_harga_promo_text}>
                        <Text style={styles.rating_promo}>4.9</Text>
                        <Text style={styles.harga_promo}>$6.50</Text>
                      </View>
                      <View style={styles.form_harga_promo_keranjang}>
                        <Keranjang width={23} height={23} />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.IsiPromo2}>
                  <Image
                    style={styles.image_isi_promo}
                    source={{
                      uri:
                        'https://awsimages.detik.net.id/community/media/visual/2017/04/08/c5e7150a-06a9-496c-92c4-568715fe1855_169.jpg?w=700&q=90',
                    }}
                  />
                  <View style={styles.box_isi_deskripsi}>
                    <Text style={styles.judul_promo}>Norimaki</Text>
                    <Text style={styles.varian_promo}>
                      Special Sashimi Sushi
                    </Text>
                    <View style={styles.form_harga_promo}>
                      <View style={styles.form_harga_promo_text}>
                        <Text style={styles.rating_promo}>5.0</Text>
                        <Text style={styles.harga_promo}>$6.10</Text>
                      </View>
                      <View style={styles.form_harga_promo_keranjang}>
                        <Keranjang width={23} height={23} />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.IsiPromo3}>
                  <Image
                    style={styles.image_isi_promo}
                    source={{
                      uri:
                        'https://resources.matcha-jp.com/resize/720x2000/2016/11/22-9895.jpeg',
                    }}
                  />
                  <View style={styles.box_isi_deskripsi}>
                    <Text style={styles.judul_promo}>Oshizushi</Text>
                    <Text style={styles.varian_promo}>
                      Special Sashimi Sushi
                    </Text>
                    <View style={styles.form_harga_promo}>
                      <View style={styles.form_harga_promo_text}>
                        <Text style={styles.rating_promo}>4.8</Text>
                        <Text style={styles.harga_promo}>$7.20</Text>
                      </View>
                      <View style={styles.form_harga_promo_keranjang}>
                        <Keranjang width={23} height={23} />
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.restoran_populer}>
            <Text style={styles.judul_rp}>Restoran Terpopuler</Text>
            <View style={styles.isi_rp}>
              <Image
                style={styles.imgisi_rp}
                source={{
                  uri:
                    'https://asset.kompas.com/crops/O7bqQqViMzIbz4XX-J2_FnYlzqI=/0x0:1000x667/750x500/data/photo/2017/09/22/3325539051.jpg',
                }}
              />
              <View style={styles.box_text_rp}>
                <Text style={styles.judul_isi_rp}>Osteria Francescana</Text>
                <Text style={styles.desk_isi_rp}>
                  Osteria Francescana adalah sebuah restoran yang dimiliki dan
                  dijalankan oleh koki Massimo Bottura di Modena, Italia.
                </Text>
                <View style={styles.box_menu_rp}>
                  <Text style={styles.mrp_go}>Gratis Ongkir</Text>
                  <Text style={styles.mrp_tim}>10-15 Menit</Text>
                  <Text style={styles.mrp_md}>Mulai Dari $5.60</Text>
                </View>
              </View>
            </View>
            <View style={styles.isi_rp}>
              <Image
                style={styles.imgisi_rp}
                source={{
                  uri:
                    'https://image.cermati.com/q_70,w_1200,h_800,c_fit/kfbszif9uuihiezvt4i8',
                }}
              />
              <View style={styles.box_text_rp}>
                <Text style={styles.judul_isi_rp}>Eleven Madison Park</Text>
                <Text style={styles.desk_isi_rp}>
                  Eleven Madison Park adalah restoran Amerika yang terletak di
                  dalam Metropolitan Life North Building di 11 Madison Avenue di
                  Distrik Flatiron Manhattan, New York City.
                </Text>
                <View style={styles.box_menu_rp}>
                  <Text style={styles.mrp_go}>Gratis Ongkir</Text>
                  <Text style={styles.mrp_tim}>10-15 Menit</Text>
                  <Text style={styles.mrp_md}>Mulai Dari $7.98</Text>
                </View>
              </View>
            </View>
            <View style={styles.isi_rp}>
              <Image
                style={styles.imgisi_rp}
                source={{
                  uri:
                    'https://bisniswisata.co.id/wp-content/uploads/2016/06/00-SEA-Resto.jpg',
                }}
              />
              <View style={styles.box_text_rp}>
                <Text style={styles.judul_isi_rp}>Central </Text>
                <Text style={styles.desk_isi_rp}>
                  Central Restaurante adalah restoran yang terletak di Distrik
                  Barranco, Lima, Peru.
                </Text>
                <View style={styles.box_menu_rp}>
                  <Text style={styles.mrp_go}>Gratis Ongkir</Text>
                  <Text style={styles.mrp_tim}>10-15 Menit</Text>
                  <Text style={styles.mrp_md}>Mulai Dari $6.89</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.coverbottomNavigation}>
        <View style={styles.bottomNavigation}>
          <View style={styles.box_botnav}>
            <HomeBotIcon width={21} height={21} />
            <Text style={styles.textbotnav_active}>Home</Text>
          </View>
          <View style={styles.box_botnav}>
            <KeranjangBotIcon width={21} height={21} />
            <Text style={styles.textbotnav}>Cart</Text>
          </View>
          <View style={styles.box_botnav}>
            <LocationBotIcon width={21} height={21} />
            <Text style={styles.textbotnav}>Location</Text>
          </View>
          <View style={styles.box_botnav}>
            <UserBotIcon width={21} height={21} />
            <Text style={styles.textbotnav}>Profile</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  box_header: {
    height: 43,
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  IsiheaderLeft: {
    flex: 1,
    height: 43,
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextLokasi: {
    marginLeft: 3,
  },
  IsiheaderSearch: {
    width: 43,
    height: 43,
    marginLeft: 13,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    elevation: 1.5,
  },
  IsiheaderProfile: {
    width: 43,
    height: 43,
    backgroundColor: '#F36621',
    marginLeft: 13,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoxMakananKesukaan: {
    width: '100%',
    // backgroundColor: 'red',
    marginTop: 30,
  },
  JudulMK: {
    marginLeft: 20,
    width: '60%',
    fontSize: 23,
    fontWeight: '700',
  },
  BoxIsiMK: {
    width: '100%',
    // height: 100,
    // backgroundColor: 'blue',
    marginTop: 15,
  },
  IsiboxMK: {
    backgroundColor: '#F36621',
    marginRight: 10,
    borderRadius: 80,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 20,
  },
  gambarFood: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  textisiboxmk: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 10,
    marginRight: 15,
  },
  IsiboxMK_white: {
    marginRight: 10,
    borderRadius: 80,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    backgroundColor: '#fff',
    marginTop: 2,
    marginBottom: 2,
  },
  IsiboxMK_white_last: {
    marginRight: 20,
    borderRadius: 80,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    backgroundColor: '#fff',
    marginTop: 2,
    marginBottom: 2,
  },
  textisiboxmk_white: {
    fontSize: 15,
    color: '#000',
    marginLeft: 10,
    marginRight: 15,
  },
  headerPromo: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  t1headerPromo: {
    flex: 1,
    fontSize: 20,
    fontWeight: '700',
  },
  t2headerPromo: {
    fontSize: 15,
    color: '#F36621',
    fontWeight: '700',
  },
  IsiPromo: {
    paddingRight: 13,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginTop: 15,
    marginBottom: 3,
    elevation: 1,
    marginLeft: 20,
    flexDirection: 'row',
  },
  IsiPromo2: {
    paddingRight: 13,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginTop: 15,
    marginBottom: 3,
    elevation: 1,
    marginLeft: 15,
    flexDirection: 'row',
  },
  IsiPromo3: {
    paddingRight: 13,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginRight: 20,
    marginTop: 15,
    marginBottom: 3,
    elevation: 1,
    marginLeft: 15,
    flexDirection: 'row',
  },
  image_isi_promo: {
    width: 110,
    // height: 100,
    flex: 1,
    // backgroundColor: 'blue',
    borderRadius: 25,
  },
  box_isi_deskripsi: {
    flex: 2,
    // backgroundColor: 'red',
    marginTop: 13,
    marginLeft: 15,
    marginBottom: 13,
  },
  judul_promo: {
    fontSize: 18,
    fontWeight: '700',
  },
  varian_promo: {
    fontSize: 14,
    color: '#909090',
    marginTop: 2,
  },
  form_harga_promo: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    // backgroundColor: 'red',
    marginTop: 5,
  },
  form_harga_promo_text: {
    flex: 1,
  },
  form_harga_promo_keranjang: {
    width: 40,
    height: 40,
    backgroundColor: '#F36621',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating_promo: {
    fontWeight: '700',
  },
  harga_promo: {
    fontSize: 17,
    marginTop: 3,
    fontWeight: '700',
    color: '#F36621',
  },
  restoran_populer: {
    marginTop: 30,
  },
  judul_rp: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
    marginBottom: 15,
  },
  isi_rp: {
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    elevation: 1,
    borderRadius: 20,
    marginBottom: 10,
  },
  imgisi_rp: {
    width: '100%',
    height: 170,
    borderRadius: 20,
  },
  box_text_rp: {
    margin: 15,
  },
  judul_isi_rp: {
    fontSize: 18,
    fontWeight: '700',
  },
  desk_isi_rp: {
    fontSize: 14,
    marginTop: 5,
    color: '#505050',
    lineHeight: 18,
  },
  box_menu_rp: {
    // backgroundColor: 'red',
    marginTop: 10,
    flexDirection: 'row',
  },
  mrp_go: {
    fontWeight: '700',
    fontSize: 13,
    color: '#505050',
  },
  mrp_tim: {
    flex: 1,
    marginLeft: 10,
    fontWeight: '700',
    fontSize: 13,
    color: '#505050',
  },
  mrp_md: {
    fontWeight: '700',
    fontSize: 13,
    color: '#F36621',
  },

  //   BOTTOM NAVIGATION
  coverbottomNavigation: {
    backgroundColor: '#f9f9f9',
  },
  bottomNavigation: {
    height: 70,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box_botnav: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  textbotnav: {
    fontSize: 12,
    marginTop: 2,
    color: '#ccc',
    fontWeight: '700',
  },
  textbotnav_active: {
    fontSize: 12,
    marginTop: 2,
    color: '#F36621',
    fontWeight: '700',
  },
});
