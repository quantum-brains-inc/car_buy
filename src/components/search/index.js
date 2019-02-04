import React, { Component } from 'react';
import './search.css';
class Search extends Component {
    render() {
        return (
            <div className="search">
            <select className="chose">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
                <option value="audi" selected>MARQUE</option>
                </select>
            <select className="chose">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
                <option value="audi" selected>VILLE</option>
                </select>
                 <select className="chose">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
                <option value="audi" selected>ANNEE</option>
                </select>
            <select className="chose">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
                <option value="audi" selected>MODELE</option>
            </select>
            <select className="chose">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="vw">VW</option>
                <option value="audi" selected>PRIX MAX</option>
                </select>
                <button className="search-button">Search</button>
            </div>
        );
    }
}

export default Search;
