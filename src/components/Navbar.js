import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                    <li class="nav-item">
                        <a class="nav-link" href="#">Car</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">test</a>
                    </li>
                    </ul>
                    <span class="navbar-text">
                    By a car
                    </span>
                </div>
            </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
