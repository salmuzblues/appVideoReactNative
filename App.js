  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
// Importamos el componente Home
import Home from './src/screens/containers/home';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api'; 
import CategoryList from './src/videos/containers/category-list.js';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

/* const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
}); */

type Props = {};
export default class App extends Component < Props > {
  state = {
    suggestionList: [],
    categoryList: [],
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    })
  }
    render() {
        return ( 
        <Home>
          <Text>header</Text>
         {/*  <Player /> */}
        <Text>buscador</Text>
        <Text>categorías</Text>
        <CategoryList
          list={this.state.categoryList}
        />
        <SuggestionList
          list={this.state.suggestionList}
        />
        </Home> 
        );






        // return ( <
        //     View style = { styles.container } > {
        //         /*  <Text style={styles.welcome}>Welcome to React Native!</Text>
        //                 <Image 
        //                 source={ require('./assets/logo.png') } 
        //                 style={{ width:250, height: 80 }}
        //                 />
        //                 <Text style={styles.instructions}>To get started, edit App.js</Text>
        //                 <Text style={styles.instructions}>{instructions}</Text> */
        //     } <
        //     /View>
        //);
    }
}




 

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    /* if you want to select diferent colors so much for IOS an Android */
/* 
 backgroundColor: Platform.select({
  ios: 'green', 
  android: 'red',
 })
*/
/*   },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}); */