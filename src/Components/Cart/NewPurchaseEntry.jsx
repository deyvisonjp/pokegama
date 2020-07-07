import React, { useState } from 'react';

const NewPurchaseEntry = ({ onSubmit }) => {
    const [newItem, setNewItem] = useState('');

    function setNewPurchase({ target }) {
        setNewItem(target.value)
    }

    function submit(e) {
        e.preventDefault();
        onSubmit(newItem);
    }

    return (
        <div>
            <form onSumbit={submit}>
                <input type="text"
                    className="todoInput"
                    placeholder="Digite a nova Compra"
                    onChange={setNewPurchase}
                />
                <button type="submit">
                    Adicionar
                </button>
            </form>
        </div>
    )
}

export default NewPurchaseEntry;