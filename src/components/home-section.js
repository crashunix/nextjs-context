import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

const HomeSection = ({ ...props }) => {

    return (
        <div className="flex flex-col space-y-8">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-800">{props.title}</h3>
                <Link href="/">
                    <a className="text-blue-400">show all</a>
                </Link>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default HomeSection;