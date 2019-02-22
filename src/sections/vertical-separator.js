import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

function VerticalSeparator (props) {
    return (
        <View style={[ // we make a list the elements 
            styles.separator, 
                {
                    borderTopColor: (props.color) ? props.color : '#eaeaea'    
                }
            
            ]}>
            <Text>Esto es un separador</Text>
        </View>

    ) 
}

const styles = StyleSheet.create({
    separator: {
        borderTopWidth: 1
    }
});
export default VerticalSeparator; 