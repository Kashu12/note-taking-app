import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateGroupModal = ({ onCreate, onClose }) => {
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleCreate = () => {
    if (groupName.trim() === '' || selectedColor === '') {
      alert('Please enter group name and select color.');
      return;
    }

    onCreate(groupName, selectedColor);

    setGroupName('');
    setSelectedColor('');
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create Group</h2>
        <label htmlFor="groupName">Group Name:</label>
        <input
          type="text"
          id="groupName"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <div className="color-options">
          <label>Choose Color:</label>
          <div className="color-option" style={{ backgroundColor: 'red' }} onClick={() => setSelectedColor('red')}></div>
          <div className="color-option" style={{ backgroundColor: 'blue' }} onClick={() => setSelectedColor('blue')}></div>
          <div className="color-option" style={{ backgroundColor: 'green' }} onClick={() => setSelectedColor('green')}></div>
          <div className="color-option" style={{ backgroundColor: 'yellow' }} onClick={() => setSelectedColor('yellow')}></div>
          <div className="color-option" style={{ backgroundColor: 'purple' }} onClick={() => setSelectedColor('purple')}></div>
          <div className="color-option" style={{ backgroundColor: 'orange' }} onClick={() => setSelectedColor('orange')}></div>
        </div>
        <button onClick={handleCreate}>Create</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

CreateGroupModal.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CreateGroupModal;

