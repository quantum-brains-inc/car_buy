import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import {TwitterShareButton} from 'react-share';
import Navbar from './Navbar';
class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('boards').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }
  render() {
    return (
      <div>
      <Navbar/>
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">Retour</Link></h4>
            <h3 class="panel-title">
              {this.state.board.title}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Description:</dt>
              <dd>{this.state.board.description}</dd>
              <dt>Auteur:</dt>
              <dd>{this.state.board.author}</dd>
              <img src={`${this.state.board.url}`} alt="image" />
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Modifier</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Suprim</button>
            <TwitterShareButton url={`https://nifty-leakey-3ccdce.netlify.com/show/${this.props.match.params.id}`}>Share on Twitter</TwitterShareButton>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Show;