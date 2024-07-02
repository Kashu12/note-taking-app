import React, { useState, useEffect } from 'react';
import './App.css'; 
import GroupList from './GroupList';
import NoteList from './NoteList';
import CreateGroupModal from './CreateGroupModal';
import Header from './Header';

const App = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Loading groups from local storage on initial load
    const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(savedGroups);
  }, []);

  useEffect(() => {
    // Saving groups to local storage whenever groups state changes
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  const handleCreateGroup = (newGroup) => {
    const updatedGroups = [...groups, newGroup];
    setGroups(updatedGroups);
    localStorage.setItem('groups', JSON.stringify(updatedGroups));
  };

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="sticky-title">Pocket Notes</h1>
        <div className="create-group">
          <button className="add-group-btn" onClick={() => setShowModal(true)}>
            Create Notes group <span className="plus-symbol">+</span>
          </button>
        </div>
      </header>
      <main className="main-content">
        <div className="left-panel">
          <GroupList groups={groups} onGroupClick={handleGroupClick} />
        </div>
        <div className="right-panel">
          {selectedGroup ? (
            <NoteList notes={selectedGroup.notes} />
          ) : (
            <div className="info-panel">
              <img src="/image-removebg-preview 1.jpg" alt="Pocket Notes" className="info-image" />
              <p className="info-text">Pocket Notes</p>
              <p>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p>
              <p className="info-text">end-to-end encrypted <img src="/lock-icon.jpg" alt="Lock" className="lock-icon" /></p>
            </div>
          )}
        </div>
      </main>
      {showModal && <CreateGroupModal onCreate={handleCreateGroup} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default App;

