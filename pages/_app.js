import '@/styles/globals.css'
import { StoreProvider } from '@/utils/Store'
import { UserProvider } from '@/utils/providers/user.provider';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {

  return (
    <StoreProvider>
      <ToastContainer />
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider >
    </StoreProvider>
  )
}
