import './App.css';
import Header from './Components/ Header';
import Footer from './Components/Footer';
import Main from './Components/Main';


function App() {
  return (
    <div className="App">
      <h1>React Little Lemon</h1>
      <hr />
      <h2>Header</h2>
      <Header />
    
      <hr />
      <br />
      <h2>Main</h2> 
      <Main />
      <hr />
      <br />
      <h2>Footer</h2>
      <Footer />
    </div>
  );
}

export default App;
