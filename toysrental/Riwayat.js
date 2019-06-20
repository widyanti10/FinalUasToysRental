import React from 'react';
import { Text ,View,FlatList,StyleSheet,TouchableHighlight } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Header from "./Header";

const axios = require('axios');
export default class Usia extends React.Component{
  static navigationOptions = {
    header: null
}
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          search:'',
        };
    }
    componentDidMount(){
    axios.get("https://widyanti1050.000webhostapp.com/apitoys/getOrder.php")
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
    // handle error
    console.log(error);
  });
}
    updateSearch = search => {
      this.setState({ search });
    };
    render() {
      const { search } = this.state;
        return (
            <View style={styles.containerMain}>
              <Header judul={"Riwayat Pemesanan"} />
              <View >
              <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) =>
                        <View style={styles.Box}>
                          <Text>Nama Barang : {item.nama_barang}</Text>
                          <Text>Nama Customer: {item.nama_customer}</Text>
                          <Text>Alamat Customer : {item.alamat_customer}</Text>
                          <Text>No Hp : {item.telp}</Text>
                          <Text>Lama Penyewaan (Hari) : {item.penyewaan}</Text>
                          <Text>Harga : {item.harga}</Text>
                          <Text>Total Harga: {item.total_harga}</Text>
                        </View>
                    }
                /> 
                </View>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Daftarbarang')}>
                    <Text style={styles.Text}>BACK</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#7C3B81',
  },
  Box:{
    marginLeft: 45,
    marginTop: 10,
    justifyContent: "center",
    alignItems: 'flex-start',
    height: 150,
    width: 270,
    backgroundColor : "#fff",
    borderRadius: 7 ,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "#5E2E62",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 120,
    height: 30,
    width: "35%",
    borderRadius: 5,
},
Text:{
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 17,
  },
});