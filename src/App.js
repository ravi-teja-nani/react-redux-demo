import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <CakeContainer greetings = "welcome to react redux tutorial" />
      </div>
    </Provider>

  );
}

export default App;
