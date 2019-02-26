import { createStore } from 'redux';
import reducer from '../reducers/videos-reduc';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
/* const store = createStore( reducer, {
    // variables iniciales
    suggestionList: [],
    categoryList: []
})
*/

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, reducer)

  const store = createStore(persistedReducer)
  const persistor = persistStore(store)


export { store, persistor }; 