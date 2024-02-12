import { SetStateAction, createContext, useState } from "react";

interface User {
    name:string
}

interface UserContextState {
    user: User
    isLogged: boolean
    login(user: User): void
    logout(): void
}

const initialState = {
    user: {name: ""},
    isLogged: false,
    login: (user: User) => {},
    logout: () => {}
}

const UserContext = createContext<UserContextState>(initialState);

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>({name:""});
    const [isLogged, setIsLogged] = useState<boolean>(false);

    const logout = () => {
        setUser({name: ""});
        setIsLogged(false);
    }

    const login = (user: User) => {
        setUser(user);
        setIsLogged(true);
    }

    return (
        <UserContext.Provider value={{user, isLogged, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;