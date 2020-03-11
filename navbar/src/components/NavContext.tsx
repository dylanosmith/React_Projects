import React, {createContext} from 'react';

interface Person {
    name:string; 
    age: number
}

export const NavContext = createContext<[Person,Function]>([{name: "Dylan", age: 33},Function]);

export const NavProvider = (props:any) => {
    const [user, setUser] = React.useState({name: "Dylan", age: 33})
    return (
        <NavContext.Provider value = {[user,setUser]}>
            {props.children}
        </NavContext.Provider>
    );
}

export default NavProvider;