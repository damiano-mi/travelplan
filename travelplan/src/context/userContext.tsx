import { createContext, useState } from "react";

interface User {
    name: string;
}

interface UserProviderProps {
    children: React.ReactNode;
}

const UserContext = createContext<User | null>(null);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState({name:""});

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;