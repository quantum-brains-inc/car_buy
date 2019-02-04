import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';


const StyledNavbar = styled(Navbar)
`
    color: white;
    background:transparent;
    position:fixed;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
    border-radius: 3px;
    margin-bottom:0;
    width:100%;
`;
class Navbary extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div >
                <StyledNavbar className = "navbar navbar-expand-lg  transparent" >
        <div  class="container">
                <a class="navbar-brand" href="#">Tonobila.</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">ACCUEIL<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                    <a class="nav-link" href="#">ANNONCES<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                     < a class = "nav-link"
                        href = "#" > MAGAZINE < span class = "sr-only" > (current) < /span></a > 
                    </li>
                    <li class="nav-item active">
                     < a class = "nav-link"
                        href = "#" > CONTACTEZ NOUS <span class = "sr-only" > (current) </span></a>
                    </li>
                    {
                        this.props.user ?
                    <li class="nav-item">
                        <a class="nav-link" onClick={this.props.action} href="#">Log Out</a>
                    </li>
                    :
                    <li class="nav-item">
                        <a class="nav-link"  href="#"></a>
                    </li>
                    }
                   {
                       this.props.user ?
                    <li class="nav-item">
                        <a class="nav-link"  href="">{this.props.user.displayName}</a>
                    </li>
                    :
                    <li class="nav-item">
                        <a class="nav-link"  href=""></a>
                    </li>
                   }
                    </ul>
            <ul class="nav navbar-nav navbar-right">
              <li> {
                  this.props.user ?
                <div class="inset">
                  < img src = {this.props.user.photoURL}></img>
                  <p>{this.props.user.displayName}</p>
                </div>
                :
                <div>
                  <p onClick={this.props.login}>Inscription</p>
                </div>
                }
              </li>
            </ul>
                </div>
            </div>
                </StyledNavbar>
            </div>
        );
    }
}

export default Navbary;
