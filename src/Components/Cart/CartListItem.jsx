import React from 'react';

const CartListItem = ({ onChange, onDelete, value }) => {
    return (
        <div className="itemContainer">
            <input type="text"
                className="itemField"
                value={value}
                onChange={onChange}
            />
            <button onClick={onDelete}>Excluir</button>
        </div>
    )
}

export default CartListItem;