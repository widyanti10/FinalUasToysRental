import React from 'react';
import { Text ,View,FlatList,StyleSheet,TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from "./Header";

const axios = require('axios');
export default class Daftarbarang extends React.Component{
  static navigationOptions = {
    header: null
}
    constructor(props) {
        super(props);
        this.state = {
            data: [],id_kategori:this.props.navigation.state.params.id_kategori,
        };
    }
    componentDidMount(){
    axios.get('https://widyanti1050.000webhostapp.com/apitoys/getToys.php?id_kategori='+ this.state.id_kategori)
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
    // handle error
    console.log(error);
  });

}

    render() {
        return (
            <View style={styles.containerMain}>
              <Header judul={"Daftar Barang"} />
              <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Tambahdata')}>
                    <Text style={styles.Text}>ADD</Text>
            </TouchableHighlight>
              
              <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => (
                      <ListItem style={styles.list} onPress={()=>this.props.navigation.navigate("Detailbarang",{kode_barang:item.kode_barang})}
                      title={item.nama_barang}
                            leftAvatar={{ source: { uri:"https://widyanti1050.000webhostapp.com/apitoys/img/"+item.foto},}}
                            
                        />
                  
                        
                    )
                    }
                />
               
                <View style={styles.box1}>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle2} onPress={() => this.props.navigation.navigate('Order')}>
                    <Text style={styles.Text}>ORDER</Text>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle2} onPress={() => this.props.navigation.navigate('Riwayat')}>
                    <Text style={styles.Text}>HISTORY</Text>
                </TouchableHighlight>
                </View>
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
    list:{
      marginTop: 10,
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
      marginLeft: 240,
      height: 30,
      width: "35%",
      borderRadius: 5,
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
  box2: {
    backgroundColor: 'white',
    height: 400,
    width: 300,
    marginLeft: 30,
    flexDirection: "row",
    borderRadius: 5,
  },
  });