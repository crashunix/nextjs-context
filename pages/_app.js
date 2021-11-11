import { AuthContextProvider } from '../stores/authContext'
import { ThemeContextProvider } from '../stores/themeContext'
import { ToastContextProvider } from '../stores/toastContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <AuthContextProvider>
      <ThemeContextProvider>
        <ToastContextProvider>
          <Component {...pageProps} />
        </ToastContextProvider>
      </ThemeContextProvider> 
    </AuthContextProvider>
  );
}

export default MyApp
