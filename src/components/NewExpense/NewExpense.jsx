import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const changeStateHandler = () => {
    setIsVisible((prevVisibility) => {
      setIsVisible(!prevVisibility);
    });
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isVisible && (
        <button onClick={changeStateHandler}>Add New Expense</button>
      )}
      {isVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStateChange={changeStateHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
