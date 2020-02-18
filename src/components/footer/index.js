import React from 'react'
import './footer.css'
export default function Footer() {
  return (
                <div className="footer-main">
                    <div class="container">
            <div class="row">
                <div class="col-sm footer-container logo-footer">
                Tonobila.ma
                </div>
                <div class="col-sm footer-container">
                        <ul className="list-footer">
                            <li>Accueil</li>
                            <li>Annonces</li>
                            <li>Guid D’achat</li>
                            <li>Contacter nous</li>
                            <li>Blog</li>
                        </ul>
                </div>
                <div class="col-sm footer-container">
                        <ul className="list-footer">
                            <li>Condition d’utilisation</li>
                            <li>Conditions générales</li>
                            <li>Qui sommes nous</li>
                            <li>Politique de confidentialité</li>
                        </ul>
                </div>
                <div class="col-sm footer-container">
                        <ul className="list-footer">
                            <li>Connecter</li>
                            <li>Inscription</li>
                            <li>Recherche</li>
                            <li>Plan du site</li>
                        </ul>
                </div>
            </div>
            <div className="footer-last">
                <p>©2020 Tonobila.ma : Guide d'achat des voitures d'occasion et neuves au Maroc</p>
                </div>
            </div>
    </div>
  )
}
