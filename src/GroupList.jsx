import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({ groups, onGroupClick }) => {
  return (
    <div className="group-list">
      {groups.map(group => (
        <div key={group.id} className="group-item" onClick={() => onGroupClick(group)}>
          <div className="group-name" style={{ backgroundColor: group.color }}>{group.name}</div>
          <div className="group-short-form">{group.shortForm}</div>
        </div>
      ))}
    </div>
  );
};

GroupList.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      shortForm: PropTypes.string.isRequired,
    })
  ).isRequired,
  onGroupClick: PropTypes.func.isRequired,
};

export default GroupList;

