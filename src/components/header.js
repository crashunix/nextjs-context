import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiMenu4Fill } from "react-icons/ri";
import { VscBell } from "react-icons/vsc";
import AuthContext from "../stores/authContext";
import LogoutButton from "./logoutButton";

const Header = ({ ...props }) => {

    const { user } = useContext(AuthContext);

    const [menu, setMenu] = useState(false);

    return (
        <header className="">
            <div className="container mx-auto px-4">
                <div className="flex justify-between py-5">
                    <button onClick={() => { setMenu(!menu) }}>
                        <RiMenu4Fill className="text-xl" />
                    </button>
                    {
                        user ?
                            <>
                                <button onClick={() => { console.log("notifications"); }}>
                                    <div className="relative">
                                        <div className="absolute w-2 h-2 bg-red-400 rounded-full right-px"></div>
                                        <VscBell className="text-xl" />
                                    </div>
                                </button>
                                <LogoutButton />
                            </>
                            :
                            <Link href="/signin">
                                <a>signin</a>
                            </Link>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;