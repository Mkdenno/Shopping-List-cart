import React ,{useState} from 'react'

function Item({name,category}) {
    const [isInCart, setIsInCart] = useState(false);
    function handleAddToCart(){
      setIsInCart((isInCart)=>!isInCart)
    }

  return (
    <li className={ isInCart ? "in-cart" : ""}>
        <span>{name}</span>
        <span>{category}</span>
        <button className={isInCart ? "add" : "remove"} onClick={handleAddToCart}>{isInCart ? "Remove From" : "Add To"} Cart</button>
    </li>

  )
}

export default Item