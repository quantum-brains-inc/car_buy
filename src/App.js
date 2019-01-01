import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, 
        title,
        description,
        author,
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return <div>
      <Navbar/>
    <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Listes d'Annonce</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/create">Poster une annonce</Link>
            </h4>
          </div>
        </div>
        <div class="row">
            {this.state.boards.map(board => 
          <div class="col-4">
            <div class="card">
                <img class="card-img-top" src="https://success.md/images/CARS/dacia_logan/dacia-1.jpg" alt="Card image cap" />
                <div class="card-body">
                  <div>
                    <h5 class="card-title">
                     {board.title}
                    </h5>
                    <p class="card-text">{board.description}</p>
                    <a href="#" class="btn btn-primary">
                      <Link to={`/show/${board.key}`}>More</Link>
                    </a>
                    <p>By {board.author}</p>
                  </div>
                </div>
              </div>
              </div>
          )}
        </div>
      </div>
      </div>;
  }
}

export default App;
