import './ExpenseDate.css'

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    return (
    <div className="expense-date">
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__year"> {year}</div>
    <div className="expense-date__day"> {day}</div>
  </div>)
}

export default ExpenseDate;


// // {/* Over here toLocaleString helped us to extract the date/month in readable format */}
// //  div
//     // one methode to extract it

//     //since date is a object we cannot to expenseDate or it will break we have to use expenseDate.toISOString() */}
