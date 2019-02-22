import React from 'react'; 
import {
    Text, 
    ImageBackground,
    StyleSheet
} from 'react-native'; 

function Categoria (props) {
    return (
        <ImageBackground 
        style={styles.wrapper}
        source={
            { uri: props.background_image } 
        }>
            <Text style={styles.genre}>{props.genres[0]}</Text>
        </ImageBackground>
    )
}; 

const styles = StyleSheet.create({
    wrapper: {
        width: 250, 
        height: 100, 
        borderRadius: 10,
        overflow: 'hidden', // para que oculte los bordecitos
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    genre: {
        color: 'white',
        fontSize: 40, 
        fontWeight: 'bold',
        // Esto es para darle las sombras a las letras. 
        textShadowColor: 'rgba(0,0,0, .75)',
        textShadowOffset: { // moving the shadow horizont and vertical 
            width: 2,
            height: 2
        },
        textShadowRadius: 0 // cuanto se irradia esa sombra. 
    }
}); 

export default Categoria; 