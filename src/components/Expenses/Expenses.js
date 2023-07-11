import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { useState } from 'react';
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [year, setYear] = useState('All');
    const SelectYear = (selectedYear) => {
        setYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year
    });



    return(
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    selected={year}
                    onSelectYear={SelectYear}
                />
                <ExpensesList items={filteredExpenses}/>


                {/*A different approach*/}
                {/*{filteredExpenses.length === 0 && <p>No expenses found</p>} /!* if condition is true, it displays the paragraph *!/*/}
                {/*{filteredExpenses.length > 0 &&*/}
                {/*    filteredExpenses.map(expense => (*/}
                {/*        <ExpenseItem*/}
                {/*            key={expense.id}*/}
                {/*            title={expense.title}*/}
                {/*            amount={expense.amount}*/}
                {/*            date={expense.date}*/}
                {/*        />*/}
                {/*    ))}*/}


                {/*A different approach*/}
                {/*{filteredExpenses.length === 0 ? (*/}
                {/*      <p>No expenses found.</p>*/}
                {/*  ) : (*/}
                {/*      filteredExpenses.map(expense => (*/}
                {/*          <ExpenseItem*/}
                {/*              key={expense.id}*/}
                {/*              title={expense.title}*/}
                {/*              amount={expense.amount}*/}
                {/*              date={expense.date}*/}
                {/*          />*/}
                {/*      ))*/}
                {/*  )}*/}

            </Card>
        </li>

    );
}

export default Expenses;