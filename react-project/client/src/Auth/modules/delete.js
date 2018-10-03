import React from 'react';

const Delete = (props) => {
    return (
          <div id={props.id} className="modal">
            <div className="modal-content">
                <span onClick={() => props.deleteModal(props.id)} className="close">&times;</span>
                <p>Are you sure you want to delete</p>
                <button onClick={() => props.deleteItem(props.id)}>Yes</button>
                <button>No</button>
            </div>
          </div>
    );
  }

export default Delete;