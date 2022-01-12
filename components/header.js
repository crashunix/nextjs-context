import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import LogoutButton from "./logoutButton";
import ThemeButton from "./themeButton";

const Header = () => {

    const { isAuthenticated, user, signout } = useContext(AuthContext);

    return(
        <header className="bg-white dark:bg-gray-900 transition-colors flex">
            <div className="mx-auto h-20 flex items-center justify-between flex-1 px-4">
                <h1 className="font-bold text-lg dark:text-white">🔍</h1>
                <div className="flex items-center space-x-4">
                    <ThemeButton />
                    { isAuthenticated ? 
                        <div className="flex items-center space-x-2">
                            <span className="cursor-pointer text-gray-600" onClick={() => signout()}>Sair</span>
                            <img className="w-10 h-10 rounded-full object-cover" src={user?.avatar} alt={user?.name} />
                        </div>
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