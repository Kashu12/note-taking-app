import React from 'react';
import PropTypes from 'prop-types';

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.map(note => (
        <div key={note.id} className="note-item">
          <div className="note-content">{note.content}</div>
          <div className="note-meta">{note.date} - {note.time}</div>
        </div>
      ))}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NoteList;

