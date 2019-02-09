import React from 'react';

const Modal = (props) => {
  return (
      <div 
        className="modal"
        style={{ 
          visibility: props.show ? 'visible' : 'hidden'  
        }}
      >
          <div className="modal-wrapper"
              style={{
                top: props.show ? '30%' : '-50%',
                visibility: props.show ? 'visible' : 'hidden',
                opacity: props.show ? 1 : 0
              }}>
              <span className="close-modal-btn" onClick={props.close}>×</span>
              <div className="modal-body">
                {props.children}
              </div>
          </div>
          <div 
            className="back-drop"
            style={{
              display: props.show ? 'block' : 'none'
            }}
          >
          </div>
      </div>
  );
};

export default Modal;
