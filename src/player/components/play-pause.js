import React from 'react'; 

import {
TouchableHighlight, // cuando tengas tu dedo encima de ese button, pude ser un Highligth de diferente color
TouchableOpacity, // al pulsar va ser como un destello 
TouchableWithoutFeedback,  // no va ser nada cuando se presiona.    
View, 
StyleSheet,
Text

} from 'react-native';


function PlayPause (props) {
return (
    <TouchableHighlight 
    onPress={props.onPress}
    style={styles.container} // esto va ser el padre de algo 
    underlayColor="red"
    hitSlop={  // es para que alrededor del button puedas hacer press 
        {
            left: 5,
            top: 5, 
            bottom: 5, 
            right:5 
        }
    }
    >
    {
        props.paused ? 
        <Text style= {styles.button}>PLAY</Text>
        :
        <Text style= {styles.button}>PAUSE</Text>
    }
    
    </TouchableHighlight>
)
}; 

const styles = StyleSheet.create({
    button: {
        color: 'white', 
        fontSize: 10, 
        fontWeight: 'bold'
    },

    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25, 
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white', 
        backgroundColor: 'gray'
    }
})

export default PlayPause; 