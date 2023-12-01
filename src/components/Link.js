import React from "react";

const Link = ({content, toPage}) => {
    const navigateToPage = () => {
        window.history.pushState(null, '', `${toPage}`);
        window.location.replace(`${toPage}`);
    }

    return (
        <button onClick={() => navigateToPage()}>{content}</button>
    )
}

export {Link};