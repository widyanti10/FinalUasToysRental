import React from 'react';
import { StyleSheet,Text ,View,TextInput,TouchableHighlight } from 'react-native';
import Header from "./Header";

const axios = require('axios');
class Order extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            nama_barang:'',
            nama_customer:'',
            alamat_customer:'',
            telp:'',
            penyewaan:'',
            harga:'',
            total_harga:'',
        };
    }
    render() {
        handleSubmit = event => {
            axios.post('https://widyanti1050.000webhostapp.com/apitoys/tambahOrder.php', {
                nama_barang: this.state.nama_barang,
                nama_customer: this.state.nama_customer,
                alamat_customer: this.state.alamat_customer,
                telp: this.state.telp,
                penyewaan: this.state.penyewaan,
                harga: this.state.harga,
                total_harga: this.state.total_harga,
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
             <Header judul={"Pemesanan"} />
                <View style={styles.box1}>
                    <Text style={styles.Text}>Nama Barang </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={nama_barang => this.setState({ nama_barang })}
                    />
                </View>
                <View style={styles.box1}>
                    <Text style={styles.Text}>Nama Customer</Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={nama_customer => this.setState({ nama_customer })}
                    />
                </View>
                <View style={styles.box1}>
                    <Text style={styles.Text}>Alamat Customer </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={alamat_customer => this.setState({ alamat_customer })}
                    />
                </View>
                <View style={styles.box1}>
                    <Text style={styles.Text}>No Hp</Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={telp => this.setState({ telp })}
                    />
                </View>
                <View style={styles.box1}>
                    <Text style={styles.Text}>Lama Penyewaan (Hari) </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={penyewaan => this.setState({ penyewaan })}
                    />
                </View>
                <View style={styles.box1}>
                    <Text style={styles.Text}>Harga </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={harga => this.setState({ harga })}
                    />
                </View>
                <View style={styles.box2}>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={() => {
                    var total_harga = (this.state.penyewaan*this.state.harga);
                    this.setState({
                        total_harga: total_harga,
                    }
                    );
                }}>
                    <Text style={styles.buttonText}>HITUNG</Text>
                </TouchableHighlight>
                </View>
                <View style={styles.box1}>
                    <Text style={styles.Text}>Total Harga : Rp. {this.state.total_harga} </Text>
                </View>
                <View style={styles.box2}>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={() => handleSubmit()}>
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
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    textInput: {
        width: 170,
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
        flexDirection: "column",
        alignItems: "center",
    },
    Text:{
        textAlign: "center",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 13,
      },
   
});
export default Order;