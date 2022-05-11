import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // You may see individual state controls like the ones commented out. It maybe more common?
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // Bellow is how to create one state. more management is required for this though.
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    //Function to set the Title for a new Expense
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // Bellow is how you bring in the previous states of other values while updating the new one.
        // serUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value};
        // });
    };
    
    //Function to set the Amount for a new Expense
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    
    //Function to set the Date for a new Expense
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    //Submit Handler Form
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        //This line bellow passes the data/state up.
        props.onSaveExpenseData(expenseData);
        //Setting the input fields to blank after for is submitted, and the object is created
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                    type="text" 
                    value={enteredTitle} 
                    onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                    type="number" 
                    min="0.00" step="0.01" 
                    value={enteredAmount} 
                    onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                    type="date" 
                    min="2019-01-01" max="2022-12-31" 
                    value={enteredDate}
                    onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;