import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
/*import ItemListContainer from './components/ItemListContainer';*/

function App() {
  return (
    <>
      <NavBar/>
      {/*<ItemListContainer greeting="Bienvenido a AnormalStore"/>*/}
      <ItemDetailContainer/>
    </>
  );
}
export default App;