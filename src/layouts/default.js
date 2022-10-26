import { useContext } from "react";
import ThemeContext from "../stores/themeContext";
import Link from 'next/link';
import style from '../styles/default.module.css';
import Header from "../components/header";

const DefaultLayout = ({ children }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme} bg-inari-background dark:bg-inari-dark-background min-h-screen`}>
            <Header />
            <div className="container mx-auto px-4 pt-10">
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;