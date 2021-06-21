import '../styles/App.css'
import AllLines from './AllLines';
import Header from './Header';
import Description from './Description';
import Widget from './Widget';
import { Router } from '@reach/router'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Widget path="/travel" />
        <Widget path="/travel/:line_id" />

      </Router>
    </div >
  );
}

export default App;
