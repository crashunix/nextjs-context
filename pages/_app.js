import DefaultLayout from '../layouts/default';
import EmptyLayout from '../layouts/empty';
import { AuthContextProvider } from '../stores/authContext'
import { ModalContextProvider } from '../stores/modalContext';
import { NavBarContextProvider } from '../stores/navbarContext';
import { ThemeContextProvider } from '../stores/themeContext'
import { ToastContextProvider } from '../stores/toastContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const Layout = Component.layout || EmptyLayout;
  return (
    <ModalContextProvider>
      <ToastContextProvider>
        <NavBarContextProvider>
          <AuthContextProvider>
            <ThemeContextProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeContextProvider>
          </AuthContextProvider>
        </NavBarContextProvider>
      </ToastContextProvider>
    </ModalContextProvider>
  );
}

export default MyApp
