import React from 'react'

function Filter({search,onSearchChange,onCategoryChange}) {
  function onChangeSearch(event){
    onSearchChange(event.target.value)
  }
  return (
    <div className='Filter'>
        <input type="text" name="search" value={search} onChange={onChangeSearch} placeholder='Search....'/>


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