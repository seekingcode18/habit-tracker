import React from 'react'
import NewHabit from '../../components/NewHabit/NewHabit'
import Habits from '../../components/Habits/Habits'

export default function Dashboard() {
  return (
    <div>
      <h2>User dashboard</h2>
      <NewHabit />
      <Habits />
    </div>
  )
}
