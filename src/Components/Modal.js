import React from 'react';
import ReactDom from 'react-dom';
const MODAL_STYLE = {
    position: 'fixed',
    top:'50%',
    left: '50%',
    transform:'translate(-50%,-50%)',
    backgroundColor: '#f9f5f2',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top:0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}

function Modal({open,children,onClose}){
    if(!open) return null
    return ReactDom.createPortal(
        <>
         <div style={OVERLAY_STYLE}/>
        <div style={MODAL_STYLE}>
            <button onClick={onClose}>Close Modal</button>
            {children}
        </div>
            </>,
        document.getElementById('portal')
    )
}

export default Modal