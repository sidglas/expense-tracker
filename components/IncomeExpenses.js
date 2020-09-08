
import React, { useContext }  from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const positive = transactions.filter(transaction => transaction.amount > 0)
  const posAmounts = positive.map(values => values.amount)
  const income = posAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  const negative = transactions.filter(transaction => transaction.amount < 0)
  const negAmounts = negative.map(values => values.amount)
  const expense = negAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  

  /*
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  */ 

  return (
    <>
    <div className="inc-exp-container">
      <div>
         <h4>Income</h4>
         <p className="money plus">+${income}</p>
      </div>
      <div>
         <h4>Expense</h4>
         <p className="money minus">-${Math.abs(expense)}</p>
      </div>
    </div>      
    </>
  )
}















