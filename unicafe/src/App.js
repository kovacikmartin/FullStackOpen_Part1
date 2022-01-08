import React, { useState } from 'react'

const Heading = ({title}) => <h2>{title}</h2>

const StatisticLine = ({feedback, count}) => {

  return(
    <tr>
      <td>{feedback}</td>
      <td>{count}</td>
    </tr>
  )
  
}

const Statistics = ({stats}) => {

  if(stats.all === 0){

    return(
      <p>No feedback given</p>
    )
  }

  return(
    <table>
      <tbody>
        <StatisticLine feedback="good" count={stats.good}/>
        <StatisticLine feedback="neutral" count={stats.neutral}/>
        <StatisticLine feedback="bad" count={stats.bad}/>
        <StatisticLine feedback="all" count={stats.all}/>
        <StatisticLine feedback="average" count={stats.average}/>
        <StatisticLine feedback="positive" count={stats.positive}/>
      </tbody>
    </table>
  )
}

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {

  const [goodFeedback, setGoodFeedback] = useState(0)
  const [neutralFeedback, setNeutralFeedback] = useState(0)
  const [badFeedback, setBadFeedback] = useState(0)

  const goodFeedbackClick = () => setGoodFeedback(goodFeedback+1)
  const neutralFeedbackClick = () => setNeutralFeedback(neutralFeedback+1)
  const badFeedbackClick = () => setBadFeedback(badFeedback+1)

  const titleFeedback = "Give feedback"
  const titleStatistics = "Statistics"

  const allFeedback = goodFeedback+neutralFeedback+badFeedback
  const averageFeedback = (goodFeedback-badFeedback)/allFeedback
  const positiveFeedback = (100 / allFeedback) * goodFeedback + " %"

  const statsFeedback = {

    good: goodFeedback,
    neutral: neutralFeedback,
    bad: badFeedback,
    all: allFeedback,
    average: averageFeedback,
    positive: positiveFeedback,
  }
  
  return (
    <div>
      <Heading title={titleFeedback} />
      
      <Button handleClick={goodFeedbackClick} text="good" />
      <Button handleClick={neutralFeedbackClick} text="neutral" />
      <Button handleClick={badFeedbackClick} text="bad" />

      <Heading title={titleStatistics} />
      <div>
        <Statistics stats={statsFeedback}/>
      </div>

    </div>
  )
}
export default App