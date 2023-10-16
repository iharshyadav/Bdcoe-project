import React from 'react'

const Header = ({totalIncome}) => {
  return (
    <header>
        <div className="logo">
          <a href="">
           <img src="https://play-lh.googleusercontent.com/_IA1p-kzpnDyoutaCf9gxWME1fc76UpoLhtvm-5K3Aainu-U0ClZYS8ug-4stKjZu_s" alt="" />
          </a>
          <h1>ExpenseTracker</h1>
        </div>
        <div className="logo">
          <h1>Total Amount:</h1>
          <div className="total-income">₹{totalIncome}</div>
        </div>
    </header>
  )
}

export default Header