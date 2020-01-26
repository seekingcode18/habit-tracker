import React, {useState, useEffect} from 'react'
import Habit from '../Habit/Habit'

export default function Habits() {
  const [habits, setHabits] = useState({habits: []});
  useEffect(() => {
    setHabits({habits: [
      {title: 'Habit title 1'},
      {title: 'Habit title 2'},
      {title: 'Habit title 3'},
      {title: 'Habit title 4'}
    ]})
  })

  return (
    <div>
      Here are your habits:
      {habits.length && habits.map(habit => (
        <Habit title={habit.title} />
      ))}
    </div>
  )
}
