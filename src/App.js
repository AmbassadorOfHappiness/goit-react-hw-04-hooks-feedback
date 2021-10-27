// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Section from './components/Section/Section'
import Statistics from './components/Statistics/Statistics'
import Notification from './components/Notification/Notification'

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = () => {
    const total = [good, neutral, bad];
    return total.reduce((acc, value) => (acc += value), 0);
  };
  
  const countGoodFeedback = () => {
    return Math.round((good * 100) / totalFeedback());
  };

  const onLeaveFeedback = e => {
    const feedback = e.target.textContent;
    
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
  };

    return (

      <div className="App">
       <Section>
        <FeedbackOptions options={{ good, neutral, bad }} onLeaveFeedback={onLeaveFeedback}/>
        </Section>
        {totalFeedback() === 0 ? (<Notification message="No feedback given" />
        ) : (
          <Statistics
          good={ good }
          neutral={ neutral }
          bad={ bad }
          total={ totalFeedback() }
          positivePercentage={countGoodFeedback()}
          />
          )  
        }
        </div>
    )
  }



export default App;
