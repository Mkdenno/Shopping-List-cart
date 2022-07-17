import React from 'react'

function Filter({onCategoryChange}) {
  return (
    <div className='Filter'>
        <input type="text" name="search" placeholder='Search....'/>
        <select name='filter' onChange={onCategoryChange}>
        <option value='All'>Filter By Category</option>
        <option value='Produce'>Produce</option>
        <option value='Dairy'>Dairy</option>
        <option vlaue='Dessert'>Dessert</option>
        </select>
    </div>
  )
}

export default Filter