import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiMenu4Fill } from "react-icons/ri";
import { VscBell } from "react-icons/vsc";
import AuthContext from "../stores/authContext";
import LogoutButton from "./logoutButton";

const BottomBar = ({ ...props }) => {

    const { user } = useContext(AuthContext);

    const [menu, setMenu] = useState(false);

    return (
        <footer className="grid grid-cols-4">
        </footer>
    );
}

export default BottomBar;