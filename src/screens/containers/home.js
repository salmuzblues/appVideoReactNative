import React, { Component }  from 'react'; 

// create a class 
class Home extends Component {
// metodo principal para obtener su contenido que es render 
    render(){
  // como esta esta  clase es  padre Home 
  // solo va retornar los hijos que se compongan.   
    return  this.props.children
    }
}

// exportamos para que se ve en la aplicación
export default Home; 