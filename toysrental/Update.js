import React from 'react';
import { StyleSheet,Text ,View,TextInput,TouchableHighlight,Image,FlatList, } from 'react-native';
import Header from "./Header";

const axios = require('axios');
class Update extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
          kode_barang:this.props.navigation.state.params.kode_barang,
            nama_barang:'',
            deskripsi_barang:'',
            harga:'',
            id_kategori:'',
           
        };
    }


    componentDidMount(){ 
      axios.get("https://widyanti1050.000webhostapp.com/apitoys/getToysKodeBarang.php?kode_barang="+ this.state.kode_barang )
      .then((response)=>{ 
      console.log(response.data); 
      this.setState({ data:response.data }); 
      }) 
      .catch(function (error) { 
          console.log(error); 
      }); 
  } 
  
    render() {
      handleSubmit = () => {
        axios.post('https://widyanti1050.000webhostapp.com/apitoys/updateToys.php', {
          kode_barang: this.state.kode_barang,
          nama_barang: this.state.nama_barang,
          deskripsi_barang: this.state.deskripsi_barang,
          harga: this.state.harga,
          id_kategori: this.state.id_kategori,
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
        return (
            <View style={styles.containerMain}>
            <Header judul={"Update Barang"} />
           <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.state.data}
                renderItem={({ item }) => ( 
        <View style={styles.box3}>           
        <View style={styles.box1}>
        <Text style={styles.Text}>Kode Barang </Text>
            <TextInput
                placeholder={item.kode_barang} 
                style={styles.textInput}
                onChangeText={kode_barang => this.setState({ kode_barang })}
            />
        </View>

        <View style={styles.box1}>
        <Text style={styles.Text}>Nama Barang </Text>
            <TextInput
                placeholder={item.nama_barang} 
                style={styles.textInput}
                onChangeText={nama_barang => this.setState({ nama_barang })}
            />
        </View>

        <View style={styles.box1}>
        <Text style={styles.Text}>Deskripsi Barang </Text>
            <TextInput
                placeholder={item.deskripsi_barang} 
                style={styles.textInput}
                onChangeText={deskripsi_barang => this.setState({ deskripsi_barang })}
            />
        </View>

        <View style={styles.box1}>
        <Text style={styles.Text}>Harga Sewa Barang </Text>
            <TextInput
                placeholder={item.harga} 
                style={styles.textInput}
                onChangeText={harga => this.setState({ harga })}
            />
        </View>

        <View style={styles.box1}>
        <Text style={styles.Text}>Kategori Barang </Text>
            <TextInput
                placeholder={item.id_kategori} 
                style={styles.textInput}
                onChangeText={id_kategori => this.setState({ id_kategori })}
            />
        </View>
        </View>
            )} 
               /> 
                <View style={styles.box2}>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle}  onPress={()=> handleSubmit()}>
                    <Text style={styles.buttonText}>SAVE</Text>
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
        alignItems: "center",
        backgroundColor: '#7C3B81',
    },
    box1: {
        width: "90%",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    textInput: {
        width: 200,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
    },
    buttonStyle: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: "#5E2E62",
        marginBottom: 20,
        height: 40,
        width: "45%",
        borderRadius: 5,
    },
    buttonText:{
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 17,
      },
    box2: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        },
      box3: {
          width: "100%",
          paddingTop: 100,
          marginLeft: 2,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: 'center'
        },
    Text:{
        textAlign: "center",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 13,
      },
    image:{
        width: 150,
        height: 150,
        marginTop: 2,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    uploadFoto:{
        width: 150,
        height: 150,
        marginTop: 10,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
export default Update;