import DefaultLayout from '../layouts/default';
import EmptyLayout from '../layouts/empty';
import { AuthContextProvider } from '../stores/authContext'
import { ModalContextProvider } from '../stores/modalContext';
import { NavBarContextProvider } from '../stores/navbarContext';
import { ThemeContextProvider } from '../stores/themeContext'
import { ToastContextProvider } from '../stores/toastContext';
import '../styles/globals.css'
import { theme } from "../helpers/theme";
import { ThemeProvider } from "@material-ui/core";

function MyApp({ Component, pageProps }) {

  const Layout = Component.layout || EmptyLayout;
  return (
    <ModalContextProvider>
      <ToastContextProvider>
        <NavBarContextProvider>
          <AuthContextProvider>
            <ThemeContextProvider>
              <ThemeProvider theme={theme}>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ThemeProvider>
            </ThemeContextProvider>
          </AuthContextProvider>
        </NavBarContextProvider>
      </ToastContextProvider>
    </ModalContextProvider>
  );
}

export default MyApp
