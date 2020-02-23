import React from 'react';

import Auxx from '../../../hoc/Auxx';

const orderSummary = (props) => {
    
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey =>{
        return  <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        });
        
    
    return (
        <Auxx>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingrediens: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout!</p>
        </Auxx>
    );
};

export default orderSummary;