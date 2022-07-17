import React from 'react'

function ItemForm() {
  return (
    <form className="NewItem">
        <label>
            Name: <input type="text" name="name"/>
        </label>
        <label>
            Category:
            <select>
            <option>Produce</option>
            <option>Dairy</option>
            <option>Dessert</option>
            <option>Products</option>
            </select>
        </label>
        <button type="submit">Add to List</button>
    </form>
  )
}

export default ItemForm