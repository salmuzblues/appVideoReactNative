import React from 'react'; 
import {
    View, 
    Image, 
    Text,
    StyleSheet
} from 'react-native'; 

function Suggestion (props) {
    /* Esto seria la Fila, el Padre*/
    return (
        <View style={styles.container}> 
             {/* this is a colum*/}
            <View style={styles.left}>
                <Image 
                style={styles.cover}
                source={require('../../../assets/logo.png')}
                /> 
                <View style={styles.gender}>
                    <Text style={styles.genderText}>Ciencia Ficción</Text>
                </View>    
            </View>
            {/* this is another colum  */}
            <View style={styles.right}>
                <Text style={styles.title}> Back to the Future</Text>
                <Text style={styles.year}> 1985 </Text>
                <Text style={styles.rating}> 5 estrellas </Text>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',  /* Esto es para pasar lo en row */
    },
    cover: {
        height: 150,
        width: 100,
        resizeMode:'contain' 

    },
    left: {

    }, 
    right: {
        paddingLeft: 10,
        justifyContent: 'space-between' /* es para que destribuya el contenido segun el alto*/ 
    },
    title: {
        fontSize: 18,
        color: '#44546b'
    },
    year: {
        backgroundColor: '#70b124',
        paddingVertical: 3,
        paddingHorizontal: 5, 
        color: 'white',
        fontSize: 11, 
        borderRadius: 5,
        overflow: 'hidden', /* Si el borde empieza a molestar algun lado se le pone esa condición*/
        alignSelf: 'flex-start'
    },
    rating: {
        color: '#6b6b6b', 
        fontSize: 14,
        fontWeight: 'bold'
    },
    gender: {
        position: 'absolute',
        left: 0,
        top:0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 7
    }, 
    genderText: {
        color: 'white'
    }

}); 

export default Suggestion; 