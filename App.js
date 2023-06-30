import { useState } from 'react';
import './App.css'
const App = () => {
    const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0,all:0 })
    const Good = () => {
        setClicks(newclicks=>({ ...newclicks, good: newclicks.good + 1 }))
        All()
    }
    const Bad = () => {
        setClicks(newclicks=>({ ...newclicks, bad: newclicks.bad + 1 }))   
             All()
    }
    const Neutral = () => {
        setClicks(newclicks=>({ ...newclicks, neutral: newclicks.neutral + 1 }))   
             All()
    }
const All=()=>{
    setClicks(newclicks=>({ ...newclicks, all: newclicks.all + 1 })) 
}
const calculateAverage=()=>
{
    const totalReviews=clicks.all
    const totalScore=clicks.good-clicks.bad
    if (totalReviews == 0) {
                 return 0;
               }
              return totalScore / totalReviews;
}
  const positivePercentage=()=>{
    const totalReviews=clicks.all
    const positiveReviews=clicks.good
    if (totalReviews == 0) {
       return 0   }
       return (positiveReviews/totalReviews)*100

  }
  const average=calculateAverage()
  const positive=positivePercentage()
    return (
        <div>
            <h1>give feedback</h1>
            <p>
                <button onClick={Good}>Good</button>
                <button onClick={Bad}>Bad</button>
                <button onClick={Neutral}>Neutral</button></p>
            <h1>statistics</h1>
            <p>
               Good:{clicks.good}
            </p>
            <p>Bad:{clicks.bad}</p>
            <p>Neutral:{clicks.neutral}</p>
            <p>All:{clicks.all}</p>
            <p>Average:{average}</p>
            <p>PositivePercentage:{positive}%</p> 
        </div>
    )
}
export default App;