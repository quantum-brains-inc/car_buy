import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase , { auth, provider } from './Firebase';
import Navbar from './components/Navbar';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: [],
      user: false
    };

    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this);
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
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user
        });
      }
    })
  }
  
    login() {
      auth.signInWithPopup(provider) 
        .then((result) => {
          const user = result.user;
          this.setState({
            user
          });
        });
    }
    logout() {
      auth.signOut()
        .then(() => {
          this.setState({
            user: null
          });
        });
    }
  render() {
    return <div>
      < nav class = "navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top" >
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
                    {this.state.user ?
                    <li class="nav-item">
                        <a class="nav-link" onClick={this.logout} href="#">Log Out</a>
                    </li>
                    :
                    <li class="nav-item">
                        <a class="nav-link" onClick={this.login} href="#">Log In</a>
                    </li>
                    }
                    </ul>


            <ul class="nav navbar-nav navbar-right">
              < li > {
                  this.state.user ?
                <div class="inset">
                  < img src = {this.state.user.photoURL}></img>
                  <p>{this.state.user.displayName}</p>
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
      <Header/>
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
