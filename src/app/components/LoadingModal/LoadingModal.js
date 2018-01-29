import React from 'react';
import './LoadingModal.css';
import '../Shadow/Shadow.css';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border: 'none',
      background: 'transparent'
    }
};

class LoadingModal extends React.Component {
    render() { 

        Modal.setAppElement('#root');

        return (
            <Modal
                isOpen={this.props.isVisible}
                style={customStyles}
                onRequestClose={this.props.closeLoadingModal}>
                <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
          </Modal>);
    }
}

export default LoadingModal;
