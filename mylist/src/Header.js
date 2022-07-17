import React from 'react'

function Header({isDarkMode,onDarkMode}) {
  return (
    <div>
        <header>
            <h2>ShopSter</h2>
            <button onClick={onDarkMode}>{isDarkMode ? "Dark" : "Light"} Mode</button>
        </header>
    </div>
  )
}

export default Header