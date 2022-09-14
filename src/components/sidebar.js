import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import LogoutButton from "./logoutButton";
import ThemeButton from "./themeButton";
import Image from "next/image";

const Sidebar = () => {

    const { isAuthenticated, user, signout } = useContext(AuthContext);

    return(
        <div className="bg-red-200">sidebar</div>
    );
}

export default Sidebar;