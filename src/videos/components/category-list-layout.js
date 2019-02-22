import React from 'react'; 
// import view text, etc 
import {
    View, 
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';

// create a function 

function CategoryListLayout (props){
 return (
    <ImageBackground  // sirve tambien como un div 
            source={require('../../../assets/backgronund.png')}
            style={styles.container}>   
            <Text style={styles.title}>{props.title}</Text>
            {/*con children nos ayuda a tener ordena la composición de componentes
             hara que el resto de mis componentes rendericen abajo*/}
                {props.children}  
    </ImageBackground>

   
 )
}
//here we set up our styles in this case .container and .title 
const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 10 
      //  flex: 1
    },
    title: {
        color: '#4c4c4c', // gris
        fontSize: 20, 
        marginBottom: 10, 
        fontWeight: 'bold', 
        //marginLeft: 8
    }
})

export default CategoryListLayout;
