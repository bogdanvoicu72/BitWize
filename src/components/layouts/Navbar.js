import React from 'react';
import styled from "styled-components";

const Navbar = () => {
    return (
        <NavBarContainer>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">BitWize</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            </nav>
        </NavBarContainer>
    )
}

export default Navbar;

//Main NavBar container

const NavBarContainer = styled.div`
    background: #f9f5f2;
`;