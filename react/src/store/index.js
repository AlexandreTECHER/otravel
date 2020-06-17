// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import logMiddleware from '../middleware/logMiddleware';
import userMiddleware from '../middleware/userMiddleware';
 import inscriptionMiddleware from '../middleware/inscriptionMiddleware';
 import addPlaceModal from '../middleware/addPlaceModal';
 import placesMiddleware from '../middleware/placesMiddleware';
 import commentMiddleware from '../middleware/commentsMiddleware'


// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    userMiddleware,
   inscriptionMiddleware,
   addPlaceModal,
   placesMiddleware,
   commentMiddleware
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
