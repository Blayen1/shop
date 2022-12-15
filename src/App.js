import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';

class App extends  React.Component {

constructor(props){
super(props)
this.state = {
  items:[
    {
    id:1,
    title:'Стул серый',
    img:'grey-chair.jpg',
    desc:'Do laboris consequat ipsum minim et amet officia deserunt.',
    category:'chairs',
    price:'49.99'
  },   {
    id:2,
    title:'Стол',
    img:'table.jpg',
    desc:'Do laboris consequat ipsum minim et amet officia deserunt.',
    category:'table',
    price:'49.99'
  },   {
    id:3,
    title:'Диван ',
    img:'sofa.jpg',
    desc:'Do laboris consequat ipsum minim et amet officia deserunt.',
    category:'sofa',
    price:'549.99'
  },   {
    id:4,
    title:'Лампа ',
    img:'lamp.jpg',
    desc:'Do laboris consequat ipsum minim et amet officia deserunt.',
    category:'lamp',
    price:'100.99'
  },   {
    id:5,
    title:'Стул белый',
    img:'white-chair.jpg',
    desc:'Do laboris consequat ipsum minim et amet officia deserunt.',
    category:'chair',
    price:'49.99'
  }, {
    id:6,
    title:'Диван ',
    img:'sofa.jpg',
    desc:'Do laboris consequat ipsum minim et amet officia deserunt.',
    category:'sofa',
    price:'549.99'
  } 
]
}
}
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Items  items={this.state.items} />

        <Footer />
      </div>
    );
  }
}

export default App;