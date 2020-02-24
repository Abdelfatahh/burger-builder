import React from 'react'
import styles from './Modal.module.css';
import Auxx from '../../../hoc/Auxx';
import backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Auxx>
        <backdrop/>
        <div 
            className = {styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
            >
            {props.children}
        </div>
    </Auxx>
);

export default modal;