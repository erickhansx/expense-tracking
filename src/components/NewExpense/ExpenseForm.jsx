import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //Using one state instead of multiple
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (e) => {
    //Using multiple states
    setEnteredTitle(e.target.value);

    //Using one state instead of multiple
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    // setUserInput();
  };

  const amountChangeHandler = (e) => {
    //Using multiple states
    setEnteredAmount(e.target.value);
    //Using one state instead of multiple
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
    //This is the appropriate way to approach changing state when using one state.
    // setUserInput((prevState) => {
    //   return { ...prevState, amountChangeHandler: e.target.value };
    // });
  };

  const enteredDateHandler = (e) => {
    //Using multiple states
    setEnteredDate(e.target.value);

    //Using one state instead of multiple
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
  };

  const submitHander = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHander}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={enteredDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
