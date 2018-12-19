import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ImageReducer from '../reducers/images';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      images: ImageReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
