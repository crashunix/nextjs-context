import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import LogoutButton from "./logoutButton";
import ThemeButton from "./themeButton";
import Image from "next/image";

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
                            <LogoutButton></LogoutButton>
                            <span className="text-gray-600">Olá, {user.name.split(" ")[0]}</span>
                            <div className="flex items-center justify-center">
                                <Image width={40} height={40} className="rounded-full object-cover" src={user?.avatar} alt={user?.name} />
                            </div>
                        </div>
                        :
                        <div className="flex items-center space-x-2">
                            <div className="bg-gray-200 w-24 h-4 animate-pulse"></div>
                            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;