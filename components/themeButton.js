import { useContext } from "react";
import ThemeContext from "../stores/themeContext";

const ThemeButton = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <button onClick={() => toggleTheme()}>{ theme === 'dark' ? '🌞' : '🌙'}</button>
    );
}

export default ThemeButton;