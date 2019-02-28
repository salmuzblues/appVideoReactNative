import React, { Component } from 'react'; 
import {
    TextInput,
    StyleSheet
} from 'react-native'; 

class Search extends Component {

    // declaring and initialize variable 
    state = {
        text: ''
    }

    handleSubmit = () => {
        console.log(this.state.text)
    }
    handleChangeText = (text) => {
        this.setState({
            text
        })
    }
    render() {
        return (
            <TextInput 
                placeholder="Busca tu película"
                autoCorrect={false}
                autoCapitalize="none"
                onSubmitEditing={this.handleSubmit}
                onChangeText={this.handleChangeText} 
                style={styles.input}
                //underlineColorAndroid="transparent" (estos es para retirar la linea de abajo del buscador)
            /> 
        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 15, 
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#eaeaea'
    }
});

export default Search; 