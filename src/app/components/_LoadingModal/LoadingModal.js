import React from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal';
import APP from '../../constants/app.constants'
import './LoadingModal.css';
import '../_Shadow/Shadow.css';
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
        const { isLoading } = this.props;
        Modal.setAppElement('#'+APP.CONTAINER_ID);

        return (
            <Modal
                isOpen={isLoading}
                style={customStyles}>
                <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
          </Modal>);
    }
}

function mapStateToProps(state) {
    const { isLoading } = state.appReducer

    return { isLoading }
}

const ConnectedLoadingModal = connect(mapStateToProps)(LoadingModal)
export default ConnectedLoadingModal