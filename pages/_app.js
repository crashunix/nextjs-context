import { AuthContextProvider } from '../stores/authContext'
import { ThemeContextProvider } from '../stores/themeContext'
import { ToastContextProvider } from '../stores/toastContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ToastContextProvider>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Component {...pageProps} />
        </ThemeContextProvider>
      </AuthContextProvider>
    </ToastContextProvider>
  );
}

export default MyApp
