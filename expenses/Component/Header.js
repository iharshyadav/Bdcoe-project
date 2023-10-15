import React from 'react'

const Header = ({totalIncome}) => {
  return (
    <header>
        <div className="logo">
          <h1>ExpenseTracker</h1>
          <a href="">
           <img src="https://play-lh.googleusercontent.com/_IA1p-kzpnDyoutaCf9gxWME1fc76UpoLhtvm-5K3Aainu-U0ClZYS8ug-4stKjZu_s" alt="" />
          </a>
        </div>
        <div className="total-income">₹{totalIncome}</div>
    </header>
  )
}

export default Header