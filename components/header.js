import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import ThemeButton from "./themeButton";

const Header = () => {

    const { isLoggedIn, logout } = useContext(AuthContext);

    return(
        <header className="shadow-md bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto h-20 flex items-center justify-between">
                <h1 className="font-bold text-lg dark:text-white">Logo</h1>
                <div className="flex items-center space-x-4">
                    <ThemeButton />
                    { isLoggedIn ? 
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => logout()}>Logout</button> 
                        :
                        <Link href="/login">
                            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Login</div> 
                        </Link>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;