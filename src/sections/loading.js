import  React   from 'react';

import {
View,
Text,
Image,
StyleSheet,
ActivityIndicator // Utilizar para un estado de carga 
} from 'react-native'; 

function Loading (props) {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <ActivityIndicator /> 
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', 
        alignItems: 'center',  // alinea de forma horizontal 
        justifyContent: 'center' // alinea de forma vertical

    },
    logo: {
        width: 200,
        height: 80,
        resizeMode: 'contain', 
        marginBottom: 10, 

    }
});
export default Loading; 