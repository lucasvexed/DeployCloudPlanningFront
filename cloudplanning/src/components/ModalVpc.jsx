import React from 'react';
import '../assets/css/modal.css'
import X from '../assets/img/x.png'

const ModalVpc = ({ onClose = () => { }, children }) => {

    return (
        <div className='modal'>
            <div className='container_modal'>
                <h1>VPC</h1>
                <a className='close' id="close-position" onClick={onClose}>
                    <img className="x" src={X} alt="logo_CloudPlanning" />
                </a>
                <div className='content_modal'>{children}</div>
            </div>
        </div>
    )
}
export default ModalVpc;