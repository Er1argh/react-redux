import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addCashAction, getCashAction } from './store/cashReducer'
import { addCustomerAction, removeCustomerAction } from './store/customerReducer'
import { fetchCustomers } from './asyncActions/customers'

const App = () => {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cashReducer.cash)
  const customers = useSelector(state => state.customerReducer.customers)

  const addCash = cash => {
    dispatch(addCashAction(cash))
  }

  const getCash = cash => {
    dispatch(getCashAction(cash))
  }

  const addCustomer = name => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = customer => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <>
      <h1>Without redux-saga, only redux-thunk</h1>
      <h1>{cash}</h1>
      <div>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map(customer => (
            <h1 onClick={() => removeCustomer(customer)} key={customer.id}>
              {customer.name}
            </h1>
          ))}
        </div>
      ) : (
        <h1>Клиенты отсутствуют</h1>
      )}
    </>
  )
}

export default App
