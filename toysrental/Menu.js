import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "./Home";
import Login from "./Login";
import Usia from "./Usia";
import Daftarbarang from "./Daftarbarang";
import Detailbarang from "./Detailbarang";
import Tambahdata from "./Tambahdata";
import Riwayat from "./Riwayat";
import Order from "./Order";
import Update from "./Update";

const AppContainer = createStackNavigator(
  {
    login: {
    screen: Login
    },
    Utama: {
      screen: Home
    },
    Usia: {
      screen: Usia
    },
    Daftarbarang: {
      screen: Daftarbarang
    },
    Detailbarang: {
      screen: Detailbarang
    },
    Tambahdata: {
      screen: Tambahdata
    },
    Update: {
      screen: Update
    },
    Riwayat: {
      screen: Riwayat
    },
    Order: {
      screen: Order
    },
  },
  {
    initialRouteName: "Utama"
  }
);

const Menu = createAppContainer(AppContainer);

export default class App extends React.Component {
    render() {
        return <Menu />;
    }
}
