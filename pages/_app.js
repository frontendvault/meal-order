import '@/styles/globals.css'
import { StoreProvider } from '@/utils/Store'
import UserProvider from '@/utils/providers/user.provider';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {

  return (
    <StoreProvider>
      <UserProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </UserProvider>
    </StoreProvider>
  )
}
