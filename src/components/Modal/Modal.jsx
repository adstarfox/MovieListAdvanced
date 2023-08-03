import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

const ModalOverlay = props => {
    return(
        <div >
            <div><h2>This is my modal</h2></div>
        </div>
    )
}

const portalElement = document.getElementById('overlay')

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal