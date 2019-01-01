import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      title: '',
      description: '',
      author: '',
      selectedFile: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, author } = this.state;

    this.ref.add({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }
    fileselectedHnadler = event => {
      this.setState({
        selectedFile: 'event.target.files[0]'
      })
    }
    fileUploadHandler = () => {

    }
  render() {
    const { title, description, author } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Nouvelle Annonce
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Retour</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Titre:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Titre" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
              </div>
              <div class="form-group">
                <label for="author">Auteur:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Auteur" />
              </div>
              <div class="form-group">
                <label for="author">Image:</label>
                <input type="file" class="form-control" name="image" onChange={this.fileselectedHnadler}/>
              </div>
              <button onClick={this.fileUploadHandler} type="submit" class="btn btn-success">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;