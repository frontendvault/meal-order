import '@/styles/globals.css'
import { StoreProvider } from '@/utils/Store'
import { UserProvider } from '@/utils/providers/user.provider';
import { CartProvider } from "@/utils/providers/cart.provider";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const guest = Component.guest

  return (
    <StoreProvider>
      <ToastContainer />
      <UserProvider guest={guest}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </UserProvider >
    </StoreProvider>
  )
}
