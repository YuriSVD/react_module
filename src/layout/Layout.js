import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h3>Sub pages menu</h3>
            <ol>
                <li>
                    <Link to={"users"}>Users page</Link>
                </li>
                <li>
                    <Link to={"posts"}>Posts page</Link>
                </li>
                <li>
                    <Link to={"comments"}>Comments page</Link>
                </li>
                <li>
                    <Link to={"todos"}>Todos page</Link>
                </li>
                <li>
                    <Link to={"albums"}>Albums page</Link>
                </li>
            </ol>
            <div>
                <h3>Sub view</h3>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;