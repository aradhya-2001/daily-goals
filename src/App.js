import {useState} from 'react';
import GoalList from './components/Goals/GoalList/GoalList';
import Input from './components/Goals/Input/Input';
import './App.css';

export default function App(){
  const [goals, setGoals] = useState([
    { text: 'Click on button to add goal', id: 'g1' },
    { text: 'Click on any goal to delete it', id: 'g2' }
  ]);

  const addGoal = enteredText => {
    setGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const delGoal = goalId => {
    setGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>;

  if (goals.length > 0) {
    content = <GoalList items={goals} onDeleteItem={delGoal} />
  }

  return (
    <div>
      <section id="goal-form">
        <Input onAddGoal={addGoal} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};


