import React, { Component } from 'react';


class Navbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <nav class = "navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top" >
        <div  class="container">
                <a class="navbar-brand" href="#">Annonce Auto</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    {
                        this.props.user ?
                    <li class="nav-item">
                        <a class="nav-link" onClick={this.props.action} href="#">Log Out</a>
                    </li>
                    :
                    <li class="nav-item">
                        <a class="nav-link"  onClick={this.props.login} href="#">Log In</a>
                    </li>
                    }
                   {
                       this.props.user ?
                    <li class="nav-item">
                        <a class="nav-link"  href="">{this.props.user.displayName}</a>
                    </li>
                    :
                    <li class="nav-item">
                        <a class="nav-link"  href="">not logged in</a>
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
                <div class="inset">
                  <p>Not logged in</p>
                </div>
                }
              </li>
            </ul>
                </div>
            </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
