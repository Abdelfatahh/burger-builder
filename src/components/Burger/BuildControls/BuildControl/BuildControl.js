import React from 'react';

import styles from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={styles.BuildControl}>
        <div className={styles.Laber}>{props.label}</div>
        <button className={styles.Less}>Less</button>
        <button className={styles.More} onClick={props.added}>More</button>
    </div>
);


export default buildControl;