import React, { useState } from 'react';
import axios from 'axios';

function CreateNotes() {
  const [notes, setNotes] = useState('');

  const handleAddNote = () => {
    axios.post('http://localhost:3001/nadd', { notes })
      .then(result => {
        location.reload();
      })
      .catch(error => {
        console.error('Error adding note:', error);
      });
  };

  return (
    <div className='create_notes'>
      <textarea
        placeholder='Write Notes'
        id="txtbox"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type='button' onClick={handleAddNote}>Add</button>
    </div>
  );
}

export default CreateNotes;
