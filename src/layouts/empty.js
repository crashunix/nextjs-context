import { useContext } from "react";
import ThemeContext from "../stores/themeContext";

const EmptyLayout = ({children}) => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            {children}
        </div>
    );
}

export default EmptyLayout;