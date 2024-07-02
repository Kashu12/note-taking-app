import React, { useState } from 'react';

const Header = ({ onCreateGroup }) => {
  const [groupName, setGroupName] = useState('');

  const handleInputChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleCreate = () => {
    if (groupName.trim() === '') {
      alert('Please enter a group name.');
      return;
    }

    const id = `group_${Date.now()}`;

    // Creating new group object
    const newGroup = {
      id,
      name: groupName,
    };

    // Calling parent function to add new group
    onCreateGroup(newGroup);

    setGroupName('');
  };

  return (
    <div className="header">
      <div className="vertical-header">
        <div className="header-item">Pocket Notes</div>
        <div className="header-item">Create Notes Group</div>
      </div>
      <div className="create-group-box">
        <input
          type="text"
          placeholder="Enter group name..."
          value={groupName}
          onChange={handleInputChange}
        />
        <button className="create-btn" onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Header;

