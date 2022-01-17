import { useContext } from "react";
import AuthContext from "../stores/authContext";
import ModalContext from "../stores/modalContext";

const LogoutButton = () => {

    const { showModal, hideModal } = useContext(ModalContext);
    const { signout } = useContext(AuthContext);

    const logoutModal = () => {
        showModal({
            title: "Logout",
            description: "Deseja desconectar?",
            onClickConfirm: () => {
                signout();
                hideModal();
            }
        });
    }

    return(
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => logoutModal()}>Logout</button>
    );
}

export default LogoutButton;