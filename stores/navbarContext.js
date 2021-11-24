import { createContext, useEffect, useState } from 'react'

const NavBarContext = createContext({
})

export const NavBarContextProvider = ({ children }) => {

    const [items, setItems] = useState([
        {
            id: 1,
            label: 'Alteração de cadastro',
            route: 'alteracao-de-cadastro'
        },
        {
            id: 2,
            label: 'Limite cartão pré pago',
            route: 'limite-cartao-pre-pago'
        },
        {
            id: 3,
            label: 'Solicitação de cartão',
            route: 'solocitacao-de-cartao'
        },
    ])

    const [active, setActive] = useState(null);

    const changeMenu = (id) => {
        if(id !== active) {
            setActive(id);
        }
    }

    const context = { items, changeMenu }

    return (
        <NavBarContext.Provider value={context}>
            { children }
        </NavBarContext.Provider>
    );
}

export default NavBarContext;