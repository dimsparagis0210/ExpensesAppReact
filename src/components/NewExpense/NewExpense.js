import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';

const NewExpense = (props) => {
    // Adding a state for the newExpenseForm
    const [isEditing, setIsEditing] = useState(false);
    const SaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseData} onCancel={stopEditingHandler}/>}
        </div>
    );
};

export default NewExpense;