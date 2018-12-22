import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ImageReducer from '../reducers/images';
import KeysReducer from '../reducers/keys';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      images: ImageReducer,
      keys: KeysReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
