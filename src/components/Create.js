import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import {storage} from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      title: '',
      description: '',
      author: '',
      price:'',
      ville:'',
      image:'null',
      url:'',
      progress:0
    };
    this.fileselectedHnadler = this.fileselectedHnadler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

              onSubmit = (e) => {
                e.preventDefault();

                const { title, description, author, url,price, ville } = this.state;

                this.ref.add({
                  title,
                  description,
                  author,
                  url,
                  price,
                  ville
                }).then((docRef) => {
                  this.setState({
                    title: '',
                    description: '',
                    author: '',
                    price:'',
                    url: '',
                    ville
                  });
                  this.props.history.push("/")
                })
                .catch((error) => {
                  console.error("Error adding document: ", error);
                });
              }
    fileselectedHnadler = e => {
      if(e.target.files[0]){
        const image = e.target.files[0];
        this.setState(() => ({image}));
      }
    }
    fileUploadHandler = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
        this.setState({progress})
      }
      ,
      (error) => {
        console.log(error);
      }
      ,
      () => {
        storage.ref('images').child(image.name).getDownloadURL().then(url =>{
          console.log(url);
          this.setState({url})
        } )
      }
      );


    }
  render() {
    const { title, description, author,price,ville } = this.state;
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
                <label for="author">Ville:</label>
              <select  type="text" class="form-control" name="ville" value={ville} onChange={this.onChange}>
                <option value="Agadir">Agadir</option>
                <option value="Béni Mellal">Béni Mellal</option>
                <option value="Casablanca">Casablanca</option>
                <option value="El Jadida">El Jadida</option>
                <option value="Fès">Fès</option>
                <option value="Kénitra">Kénitra</option>
              </select>
              </div>
              <div class="form-group">
                <label for="author">Prix:</label>
                <input type="number" class="form-control" name="price" value={price} onChange={this.onChange} placeholder="prix" />
              </div>
              <div class="form-group">
                <label for="author">Image:</label>
                <input type="file" class="form-control" name="image" onChange={this.fileselectedHnadler}/>
                <progress value={this.state.progress} max="100"/>
                <a onClick={this.fileUploadHandler} href="#">Upload</a>
              </div>

              {
                this.state.progress == 100 ?
                <button type="submit" class="btn btn-success">Envoyer</button>
                :
                <p>Choose image then click upload to post</p>
                }
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;