import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase , { auth, google_provider,facebook_provider } from './Firebase';
import Navbar from './components/Navbar';
import Header from './components/Header';
class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: [],
      user: false,
      test:"hello from app comp"
    };

    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this);
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author,url,price,ville } = doc.data();
      boards.push({
        key: doc.id,
        doc, 
        title,
        description,
        author,
        url,
        ville,
        price
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
      auth.signInWithPopup(google_provider)
        .then((result) => {
          const user = result.user;
          this.setState({
            user
          });
        });
    }
    login_f() {
      auth.signInWithPopup(facebook_provider)
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
      <Navbar {...this.state } action={this.logout} login={this.login}/>
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
                <img class="card-img-top" src={`${board.url}`} alt="Card image cap" />
                {console.log(board.url)}
                <div class="card-body">
                  <div>
                    <h5 class="card-title">
                     {board.title}
                    </h5>
                    <p class="card-text">{board.description}</p>
                    <p class="card-text">{board.ville}</p>
                    <p class="card-text">Prix: {board.price} DH</p>
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
