import Img from './composant/Img'
import Name from './composant/Name'
import Descrip from './composant/Descrip'
import Price from './composant/Price'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'

function App() {
  return (
    
    <div className="App">
     
      <Card style={{ width: '18rem' }}>
      <h2>Notre Produit</h2>
     <Img />
    <Card.Body>
        <Card.Title><h3><Name /></h3></Card.Title>
        <Card.Text>
          <p><Descrip /></p>
          
          <h3>Prix: <Price />Dt</h3>
        </Card.Text>
      </Card.Body>
    </Card>
   
    </div>
  );
}

export default App;
