import React from 'react'
import { Link } from '@reach/router';

export const Navbar = () => {
    return (
        <nav>
            <h1>Welcome to my routing site</h1>
            <ul>
                <li> <Link to = "/">Home</Link></li>
                <li> <Link to = "/4">Number 4</Link></li>
                <li> <Link to = "/hello">Hello</Link></li>
                <li> <Link to = "/hello/blue/red">Blue or Red</Link></li>
            </ul>
        </nav>
    )
}
