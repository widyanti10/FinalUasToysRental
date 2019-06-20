import React from 'react';
import { Text ,View,FlatList,StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
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
        };
    }
    componentDidMount(){
    axios.get("https://widyanti1050.000webhostapp.com/apitoys/getKategori.php")
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
              <Header judul={"Kategori Usia"} />
              <View >
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => (
                        <ListItem style={styles.list} onPress={()=>this.props.navigation.navigate("Daftarbarang",{id_kategori:item.id_kategori})}
                            title={item.usia_anak}
                            titleStyle={{ color: '#7C3B81', fontWeight: 'bold' }}
                        />
                    )
                    }
                />
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
});