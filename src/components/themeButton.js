import { useContext } from "react";
import ThemeContext from "../stores/themeContext";
import ToastContext from "../stores/toastContext";

const ThemeButton = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const { addToast } = useContext(ToastContext);

    return(
        <button onClick={() => {
            addToast('info', 'Tema', 'Tema alterado para ' + (theme === 'dark' ? 'claro' : 'escuro') + '.');
            toggleTheme();
        }}>{ theme === 'dark' ? '🌞' : '🌙'}</button>
    );
}

export default ThemeButton;