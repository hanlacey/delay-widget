import '../styles/App.css'
import AllLines from './AllLines';
import { Router } from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
        <AllLines path="/" />
      </Router>

    </div>
  );
}

export default App;
