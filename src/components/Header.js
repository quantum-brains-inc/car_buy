import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
    render() {
        return (
            <div className="Home">
                <div className="text-header">
                    <p>Le meilleur <br/>moyen d'acheter<br/> une voiture. </p>
                </div>
                <div className="text-dummy">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> scrambled it to make a type specimen book.</p>
                </div>
                <div className="annonce-hover">
                    DÉPOSE TON ANNONCE
                    <p>Dépôt d'annonces gratuit pour vendre tout type de voitures au maroc.</p>
                </div>
            </div>
        );
    }
}
export default Header;
