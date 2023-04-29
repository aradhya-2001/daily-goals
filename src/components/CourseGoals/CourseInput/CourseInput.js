import { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

export default function CourseInput(props) {
  const [input, updateInput] = useState("");

  const inputHandler = (event) => {
    updateInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(input.length>0){
      props.onAddGoal(input);
    }
     updateInput("") 
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Daily Goals</label>
        <input type="text" value={input} onChange={inputHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}
