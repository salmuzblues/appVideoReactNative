import React from 'react'; 
// import view text, etc 
import {
    View, 
    Text,
    StyleSheet 
} from 'react-native';

// create a function 

function SuggestionListLayout (props){
 return (
   <View style={styles.container}>
       <Text style={styles.title}>{props.title}</Text>
       {/*con children nos ayuda a tener ordena la composición de componentes
         hara que el resto de mis componentes rendericen abajo*/}
        {props.children} 
   </View>
 )
}

//here we set up our styles in this case .container and .title 
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flex: 1
    },
    title: {
        color: '#4c4c4c', // gris
        fontSize: 20, 
        marginBottom: 10, 
        fontWeight: 'bold', 
        marginLeft: 8
    }
})

export default SuggestionListLayout;
