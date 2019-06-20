import React from 'react';
import { View, FlatList, Text, StyleSheet,TouchableHighlight } from 'react-native';
import { ListItem, Card, Image } from 'react-native-elements';
import Header from "./Header";

const axios = require('axios');
export default class Detailbarang extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [],kode_barang:this.props.navigation.state.params.kode_barang,
        };
    }
    componentDidMount() {
        axios.get("https://widyanti1050.000webhostapp.com/apitoys/getToysKodeBarang.php?kode_barang="+ this.state.kode_barang)
            .then((response) => {
                console.log(response.data);
                this.setState({ data: response.data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }
    hapus = () => {
        axios.post('https://widyanti1050.000webhostapp.com/apitoys/hapusToys.php', {
          kode_barang: this.state.kode_barang,
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    render() {
        return (
            <View style={styles.containerMain}>
                <Header judul={"Detail Barang"} />
                <FlatList
                  
                  keyExtractor={(item, index) => index.toString()} 
                  data={this.state.data} 
                  renderItem={({ item }) => ( 
        <View >           
       <View>
                              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                  <Image
                                      source={{ uri: "https://widyanti1050.000webhostapp.com/apitoys/img/" + item.foto }}

                                      style={{ width: 250, height: 250,borderRadius:50 }}
                                  />
                              </View>
                              <Card title="Detail  Barang">
                                  <Text>Kode : {item.kode_barang}</Text>
                                  <Text>Nama : {item.nama_barang}</Text>
                                  <Text>Deskripsi : {item.deskripsi_barang}</Text>
                                  <Text>Harga : {item.harga}</Text>
                              </Card>
                            </View>
                        <View style={styles.box1}>
                            <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle2}onPress={()=> this.props.navigation.navigate('Update',{kode_barang:item.kode_barang,kode})}>
                                <Text style={styles.Text}>UPDATE</Text>
                            </TouchableHighlight>
                            <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle2} onPress={() => {this.hapus();this.props.navigation.navigate('Daftarbarang')}}>
                                <Text style={styles.Text}>DELETE</Text>
                            </TouchableHighlight>
                        </View>
        </View>
            )} 
               /> 

                
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
  buttonStyle2: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "#5E2E62",
    marginTop: 20,
    marginBottom: 20,
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
  box1: {
    width: "100%",
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 2,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  });