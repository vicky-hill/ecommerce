import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import store from '../store';
import { persistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}


export default App