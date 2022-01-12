import { useContext } from "react";
import ThemeContext from "../stores/themeContext";
import Header from '../components/header';
import Link from 'next/link';
import style from '../styles/default.module.css';

const DefaultLayout = ({children}) => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <div className="h-screen bg-gray-100 dark:bg-gray-800 transition-colors flex">
                <div className="w-20 bg-white dark:bg-gray-900 flex flex-col shadow-sm">
                    <div className="flex-1 flex flex-col">
                        <div className="h-20 w-20 bg-blue-500 flex items-center justify-center font-bold text-4xl text-white">B</div>
                        <Link href="/">
                            <div className="w-full h-20 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors">
                                🏠
                            </div>
                        </Link>
                        <Link href="/users">
                            <div className="w-full h-20 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors">
                                🤵
                            </div>
                        </Link>
                        <Link href="/config">
                            <div className="w-full h-20 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors">
                                ⚙
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 flex flex-col max-h-screen">
                    <Header></Header>
                    <div className="flex-1 overflow-y-auto">
                        <div className="container mx-auto p-4">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;