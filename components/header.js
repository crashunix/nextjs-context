import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import LogoutButton from "./logoutButton";
import ThemeButton from "./themeButton";

const Header = () => {

    const { isLoggedIn } = useContext(AuthContext);

    return(
        <header className="bg-white dark:bg-gray-900 transition-colors flex">
            <div className="h-20 w-20 bg-blue-500 flex items-center justify-center font-bold text-4xl text-white">B</div>
            <div className="mx-auto h-20 flex items-center justify-between flex-1 px-4">
                <h1 className="font-bold text-lg dark:text-white">🔍</h1>
                <div className="flex items-center space-x-4">
                    <ThemeButton />
                    { isLoggedIn ? 
                        <LogoutButton></LogoutButton> 
                        :
                        <Link href="/login">
                            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">Login</div> 
                        </Link>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;