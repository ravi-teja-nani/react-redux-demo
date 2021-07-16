import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store'
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <CakeContainer greetings = "welcome to react redux tutorial" />
       <HookCakeContainer />
       <hr />
       <IceCreamContainer />
       <HookIceCreamContainer />
      </div>
    </Provider>

  );
}

export default App;
