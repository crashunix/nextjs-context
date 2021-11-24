import { useContext } from "react";
import ThemeContext from "../stores/themeContext";
import Header from '../components/header';
import Link from 'next/link';

const DefaultLayout = ({children}) => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <div className="w-screen h-screen bg-gray-100 dark:bg-gray-800 transition-colors flex flex-col">
                <Header></Header>
                {/* <div className="h-20 bg-red-400">
                    <div className="w-20 h-20 bg-blue-300"></div>
                </div> */}
                <div className="flex-1 flex">
                    <div className="w-20 bg-white dark:bg-gray-900 flex flex-col shadow-sm">
                        <div className="flex-1 flex flex-col">
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
                    <div className="flex-1">
                        <div className="container mx-auto p-4 max-h-full">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;