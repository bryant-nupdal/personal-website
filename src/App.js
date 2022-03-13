import './App.css';
// import iphone from './iphone-background.jpeg';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/index';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}
 
export default App;
