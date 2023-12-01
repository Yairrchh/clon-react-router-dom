import React from "react";
import { Link } from "../components/Link";

const Users = () => {
    return (
        <div>
            <Link content="Home" toPage="/"/>
            <Link content="About" toPage="/about"/>
            <h1>Users</h1>
            <ul>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
                <li>User 1</li>
            </ul>
        </div>
    )
}

export {Users};