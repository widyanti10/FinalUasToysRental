import React, { Component } from "react";
import {View,Text,StyleSheet,Image,TouchableHighlight,} from "react-native";
import Header from "./Header";
class Home extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
          <View style={styles.containerMain}>
                <Text style={styles.Text}>Selamat Datang  </Text>
                <Text style={styles.Text}>Aplikasi Pembukuan </Text>
            <View style={styles.box2}>
              <View>
                <Image source={require("./img/314770.jpg")} style={styles.image} />
              </View>
            </View>
            <View style={styles.box3}>
                    <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('login')}>
                  <Text style={styles.buttonText}>START</Text>
                </TouchableHighlight>
            </View>
          </View>
          
        );
    }
}
// define your styles
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    backgroundColor: '#7C3B81',
  },
  image: {
    height: 200,
    width: 300
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
    height: 40,
    width: 200,
    borderRadius: 5
  },
  Text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 18
  },
  box2: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
    flexDirection: "column",
    alignItems: "center"
  },
  box3: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 120,
    flexDirection: "column",
    alignItems: "center"
  },
});
export default Home;