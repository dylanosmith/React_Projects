import React, {useContext} from 'react';
import { NavContext } from './NavContext';

const Navbar = () => {
    const [user] = useContext(NavContext);
        return(
            <div>
                <h1>Hi {user.name} </h1>
            </div>

        );
}
export default Navbar;