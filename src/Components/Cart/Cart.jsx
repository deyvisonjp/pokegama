import React, { useState } from 'react';

import ListItem from './CartListItem';
import Purchase from './NewPurchaseEntry';

const Cart = () => {
    const [purchs, setPurshs] = useState([]);

    function addNewPurchase(purch) {
        const itensCopy = Array.from(purchs);
        itensCopy.push({ id: purchs.length, value: purch });
        setPurshs(itensCopy);
    }

    function updatePurchase({ target }, index) {
        const itensCopy = Array.from(purchs);
        itensCopy.splice(index, 1, { id: index, value: target.value });
        setPurshs(itensCopy);
    }

    function deletePurhase(index) {
        const itensCopy = Array.from(purchs);
        itensCopy.splice(index, 1);
        setPurshs()
    }

    return (
        <div className="cart">
            <Purchase onSubmit={addNewPurchase} />
            {purchs.map(({ id, value }, index) => (
                <ListItem
                    key={id}
                    value={value}
                    onChange={(event) => updatePurchase(event, index)}
                    onDelete={() => deletePurhase(index)}
                />
            ))}
            <div>
                <pre>
                    {JSON.stringify(purchs, null, 4)}
                </pre>
            </div>
        </div>
    )

}

export default Cart;
