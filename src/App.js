import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import ImageGalleryPage from './pages/ImageGalleryPage';


const store = configureStore();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <ImageGalleryPage />
      </Provider>
    );
  }
}

export default App;


