import * as React from 'react';
import './App.css'; //el . antes de el slash es la raiz del proyecto
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
function App (){
  return(
    <div className='pag'>
      <Header/>
      <Employees/>
      <Footer/>
    </div>
  );
}
export default App;