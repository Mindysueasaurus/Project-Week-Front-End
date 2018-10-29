import React from 'react';
import axios from 'axios';

import NoteCard from './NoteCard';

export default class NotesContainer extends React.Component{
  constructor() {
    super ();
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then( response => {
        this.setState({ notes: response.data });
      })
      .catch( error => {
        console.error( error );
      })
  }

  render(){
    return (
      <div>
        {this.state.notes.map( note => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    )
  }
  
}

