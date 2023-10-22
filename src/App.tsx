import './App.css';
import { Repositories } from './components/Repositories';
import { store } from './state';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for package</h1>
        <Repositories/>
      </div>
    </Provider>
  );
}

export default App;
