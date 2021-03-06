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



import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux'; 
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor} from './utils/store'; 
import Loading from './src/sections/loading'; 
import AppLayout from './src/app'; 

/* const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
}); */

type Props = {};
export default class App extends Component < Props > {
  
    render() {
        return ( 
          <Provider
           store={store} >
              <PersistGate
                loading={<Loading />}
                persistor={persistor}
                >
               <AppLayout />

              </PersistGate>
               
          </Provider>
        );
        /* 
           Note: 
          El **Store **es donde almacenamos el estado actual de la aplicación.
          Los **Dispatch **se encargan de disparar las acciones que modificarán el state de la aplicación.
          Los **Actions **modifican el state de la aplicación dependiendo de la acción disparada.
          Usamos los **mapStateToProps **junto a **connect **para avisar a nuestros componentes de que se han producido cambios en el state.

        
        
        */
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