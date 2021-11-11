import { AuthContextProvider } from '../stores/authContext'
import { ThemeContextProvider } from '../stores/themeContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <AuthContextProvider>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider> 
    </AuthContextProvider>
  );
}

export default MyApp
