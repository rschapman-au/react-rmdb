import React, { useContext } from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg"

import { Wrapper, Content, LogoImg } from "./Header.styles";

//Context
import { Context } from "../../context";

const Header = () => {
    const [user] = useContext(Context);
    console.log(user);

return (    
    <Wrapper>
        <Content>
            <Link to='/'> 
                <LogoImg src={RMDBLogo} alt="rmdb-logo"/>
            </Link>
            {user ? (
                <span className='loggedin'>Logged in as: {user.username}</span>
            ) :(
                <Link to='/login'> 
                    <span className='login'>Log in</span>
                </Link>
            )
            }

        </Content>
    </Wrapper>
)};

export default Header;