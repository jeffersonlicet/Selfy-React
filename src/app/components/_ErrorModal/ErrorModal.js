import React from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal';

import APP from '../../constants/app.constants'

import './ErrorModal.css';
import '../_Shadow/Shadow.css';

import { resetError } from '../../actions/app.actions'

const customStyles = {
    overlay: {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(0, 0, 0, 0.85)'
    },

    content : {
        top             : '50%',
        left            : '50%',
        right           : 'auto',
        minWidth        : '300px',
        bottom          : 'auto',
        marginRight     : '-50%',
        transform       : 'translate(-50%, -50%)',
        borderRadius    : 'none',
        border          : 'none'
    }
};

class ErrorModal extends React.Component {
    constructor(props) {
        super(props)
        this.handleCloseModal = this.handleCloseModal.bind(this)
    }

    handleCloseModal () {
        this.props.dispatch(resetError())
    }

    render() { 
        const { anyError, error } = this.props;
        Modal.setAppElement('#'+APP.CONTAINER_ID);

        return (
            <Modal
                isOpen={anyError}
                style={customStyles}
                shouldCloseOnOverlayClick={true}
                onRequestClose={this.handleCloseModal}>
                    <h1 className="modal-title">{ error.title }</h1>
                    <p> { error.message } </p>
                <   button className="btn btn-primary float-right shadow-1" onClick={this.handleCloseModal}>Ok</button>
          </Modal>);
    }
}

function mapStateToProps(state) {
    const { anyError, error } = state.appReducer
    return { anyError, error }
}

const ConnectedErrorModal = connect(mapStateToProps)(ErrorModal)
export default ConnectedErrorModal