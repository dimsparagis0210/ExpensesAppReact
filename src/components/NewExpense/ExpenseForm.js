import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    // New Title

    // Multiple states
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [addExpense, setAddExpense] = useState(false);

    // Single state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     amount: '',
    //     date: ''
    // });
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     };
        // })
    };
    //
    // // New Amount
    //
    const amountHandler = (ev) => {
        setEnteredAmount(ev.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: ev.target.value
        // });
    };
    //
    // // New Date
    //
    const dateHandler = (ev) => {
        setEnteredDate(ev.target.value);
        // setUserInput({
        //     ...userInput,
        //     date: ev.target.value
        // });
    };

    // const inputChangeHandler = (identifier, value) => {
    //     if ( identifier === 'title') {
    //         setEnteredTitle(value);
    //     }
    //     else if ( identifier === 'amount') {
    //         setAmount(value);
    //     }
    //     else if ( identifier === 'date'){
    //         setDate(value);
    //     }
    // }

    const submitHandler = (event) => {
        event.preventDefault(); //prevent request sending and page reload
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount ,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    //Add expense state handling
    if (!addExpense) {
        return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__actions second">
                    <button type="submit" onClick={() => setAddExpense(true)}>Add new Expense</button>
                </div>
            </form>
        );
    }
    else{
        return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input
                            type="text"
                            value = {enteredTitle}
                            onChange={titleChangeHandler}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input
                            type="number"
                            value={enteredAmount}
                            min="0.01"
                            onChange={amountHandler}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                            type='date'
                            min='2019-01-01'
                            max='2022-12-31'
                            value={enteredDate}
                            onChange={dateHandler}/>
                    </div>
                </div>

                <div className="new-expense__actions">
                    <button type="cancel" onClick={() => setAddExpense(false)}>Cancel</button>
                    <button type="submit">Add new Expense</button>
                </div>

            </form>
        );
    }
}

export default ExpenseForm;