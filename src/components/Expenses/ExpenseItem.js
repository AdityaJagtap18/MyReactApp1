import React , { useState } from 'react';
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// This was needed to make react know that he has to take the data from the file ExpenseItem
function ExpenseItem(props) {

 const [title, setTitle] = useState(props.title);
 console.log('ExpenseItem evaluated by React')

const clickHandler = () =>{
  setTitle('Updated!');
  console.log(title);
};

  return (
   <li>
   <Card className="expense-item">
      {/* ClassName is like class in JavaScript */}
      <ExpenseDate date={props.date}/>
     
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">₹{props.amount}</div>
      <button onClick={clickHandler}>Change Title </button>
    </Card>
    </li>
    
  );
}

export default ExpenseItem;
// export is used to imply that you are exporting a certain file
//Curly Brakects can give any output eg <h1>{1+1}</h1> and will get output two

//Props is a super important consept as it help us to actually use our componets again/ make it reusable and make it so that we dont need to hard code any value in costants
//and it allows us to pass data  from another component to this component

//{props.date.toISOString()}
