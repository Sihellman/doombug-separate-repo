import React, {useEffect, useState} from 'react';
import './Head.css';

import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import {Link, Redirect} from "react-router-dom";
import {useHistory} from "react-router-dom";


const Head = (props) => {

    let history = useHistory();
    const handleLogout = () => {
        props.setUser('');
        localStorage.clear();
        window.location.href="/sign-in";
    };
    const renderRedirect = () => {
        if(props.redirect){
            props.setRedirect(false);
            return <Redirect to='/newPost' />

        }

    }



    return (

        <div>

            <Navbar color="light" light expand="md" >
                {props.isLoggedIn && <span className={'nav-element'}  >D</span>}
                {props.isLoggedIn && <span><img
                    src="bug4.jpg"
                    width="40"
                    height="40"
                /></span>}

                {props.isLoggedIn && <span className="LogoWhenLoggedIn">omBug</span>}
                {!props.isLoggedIn && <span className="LogoWhenLoggedOut-FirstPart">D</span>}
                {!props.isLoggedIn && <span><img
                    src="bug4.jpg"
                    width="40"
                    height="40"
                />
                        </span>}
                {!props.isLoggedIn && <span className="LogoWhenLoggedOut-SecondPart">omBug</span>}


                <Nav className="mr-auto" navbar>


                </Nav>


                {props.isLoggedIn && <Button  className={"addPost"}type="submit" onClick={()=> props.setRedirect(true)} >
                    Post +
                </Button>}
                {renderRedirect()}
                {!props.isLoggedIn && props.toggleLogInSignUp &&
                <Button onClick={() => history.push("/sign-in")}>Sign in</Button>}
                {!props.isLoggedIn && !props.toggleLogInSignUp &&
                <Button onClick={() => history.push("/sign-up")}>Sign up</Button>}

                {props.isLoggedIn && <UncontrolledDropdown >

                    <DropdownToggle caret size={"md"}>
                        {props.user.firstName}'s Account
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem onClick={()=>window.location.href="/edit-account"}>
                            Edit Account
                        </DropdownItem>
                        <DropdownItem onClick={handleLogout}>
                            Log Out
                        </DropdownItem>

                    </DropdownMenu>
                </UncontrolledDropdown>}




            </Navbar>

        </div>
    );
}
export default Head;