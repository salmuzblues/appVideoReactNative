import React, { Component } from 'react'; 
import {
    FlatList,
    View
} from 'react-native';

// Importando el component Empty 
import Empty from '../components/empty';
import HorizontalSeparator from '../../sections/horizontal-separator';
// import suggestion pictures of movies and information 
import Category from '../components/category';
import Layout from '../components/category-list-layout'

class CategoryList extends Component {
    // creamos funciones 
keyExtractor = (item) => item.id.toString(); // esto es para poder eliminar el miss Key menasje que sale en el emulador. 
renderEmpty = () => <Empty text="No hay sugerencias para categoria :("/>  
itemSeparator = () => <HorizontalSeparator  />
renderItem = ({item}) => {
    return (
        /* split operator */
        <Category {...item}/>
    )
}

    render(){
        return (            
        <Layout title="Cátegorias">
             <FlatList 
            horizontal // this way you can make your list Horizontal-
            // Para poder substraer el Key 
            keyExtractor = {this.keyExtractor}
            // data and renderItem are properties from Flatlist   
            data={this.props.list}   
            // a component to say that there is not element in list
            ListEmptyComponent={this.renderEmpty}
            // another component to separate the row from my list 
            ItemSeparatorComponent={this.itemSeparator} // we pass function   
            renderItem={this.renderItem}  
            />
            
        </Layout>    
           
        )
    }
}

export default CategoryList;