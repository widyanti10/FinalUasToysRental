import React from 'react';
import { StyleSheet,Text ,View,TextInput,TouchableHighlight,Image,Alert } from 'react-native';
import Header from "./Header";

const axios = require('axios');
class Tambahdata extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            nama_barang:'',
            deskripsi_barang:'',
            harga:'',
            image:'',
            id_kategori:'',
        };
    }
    UpFoto(){
        this.uploadPicture();
        axios.post("https://widyanti1050.000webhostapp.com/apitoys/tambahToys.php", {
            nama_barang: this.state.nama_barang,
            deskripsi_barang: this.state.deskripsi_barang,
            harga: this.state.harga,
            image: this.state.image,
            id_kategori: this.state.id_kategori,
        })
        .then((response) => {
            console.log("Status update trx  "+response);
              console.log(response);
          }
        )
        .catch(function (error) {
          console.log(error);
          Alert.alert(response.data.pesan);
        });
      }
      choosePicture = () => {
        console.log("upload");
        var ImagePicker = require("react-native-image-picker");
        var options = {
          title: "Pilih Gambar",
          storageOptions: {
            skipBackup: true,
            path: "images"
          }
        };
        ImagePicker.showImagePicker(options, response => {
          console.log("Response = ", response);
          if (response.didCancel) {
            console.log("User cancelled image picker");
          } else if (response.error) {
            console.log("ImagePicker Error: ", response.error);
          } else if (response.customButton) {
            console.log("User tapped custom button: ", response.customButton);
          } else {
            let source = { uri: response.uri };
            console.log(source);
            console.log(response.fileName);
            this.setState({
              srcImg: source,
              uri: response.uri,
              fileName: response.fileName,
              image: response.fileName
            });
          }
        });
      };
      uploadPicture = () => {
        const data = new FormData();
        data.append("fileToUpload", {
          uri: this.state.uri,
          type: "image/jpeg", // or photo.type
          name: this.state.fileName
        });
        const url =
          "https://widyanti1050.000webhostapp.com/apitoys/tambahgbr.php";
        fetch(url, {
          method: "post",
          body: data
        })
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            this.setState({
              loading: false
            });
          });
      };
    
      submit () {
        this.UpFoto();
      };
    render() {  
        return (
            <View style={styles.containerMain}>
             <Header judul={"Tambah Barang"} />
             <TouchableHighlight
                large
                transparent
                onPress={this.choosePicture.bind(this)}
              >
                <View
                  style={styles.uploadFoto}
                >
                  {this.state.srcImg === null ? (
                    <Icon name="camera" />
                  ) : (
                    <Image
                      source={this.state.srcImg}
                      style={styles.image}
                    />
                  )}
                </View>
              </TouchableHighlight>
                <View style={styles.box1}>
                    <Text style={styles.Text}>Nama Barang </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={nama_barang => this.setState({ nama_barang })}
                    />
                </View>
                <View style={styles.box1}>
                    <Text style={styles.Text}>Deskripsi Barang </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={deskripsi_barang => this.setState({ deskripsi_barang })}
                    />
                </View>
                <View style={styles.box1}>
                    <Text style={styles.Text}>Harga Sewa per Hari </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={harga => this.setState({ harga })}
                    />
                </View>
                <View style={styles.box1}>
                    <Text style={styles.Text}>Kategori Usia </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={id_kategori => this.setState({ id_kategori })}
                    />
                </View>
                <View style={styles.box2}>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={() => this.UpFoto()}>
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
    box1: {
        width: "90%",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
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
export default Tambahdata;