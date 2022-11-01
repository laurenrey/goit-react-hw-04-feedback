import { useState } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Wrapper } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
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
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  const option = ['good', 'neutral', 'bad'];

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions options={option} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Wrapper>
  );
}

////////////////////////////////////////
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// onLeaveFeedback = option => {
//   this.setState(prevState => ({
//     [option]: prevState[option] + 1,
//   }));
// };

// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// };

// countPositiveFeedbackPercentage = () => {
//   const { good } = this.state;
//   return Math.round((good / this.countTotalFeedback()) * 100) || 0;
// };

// render() {
//   const { good, neutral, bad } = this.state;
//   const total = this.countTotalFeedback();
//   const positivePercentage = this.countPositiveFeedbackPercentage();
//   const options = Object.keys(this.state);

// return (
//   <Wrapper>
//     <Section title="Please leave feedback">
//       <FeedbackOptions
//         options={options}
//         onLeaveFeedback={this.onLeaveFeedback}
//       />
//     </Section>
//     <Section title="Statistics">
//       <Statistics
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         total={total}
//         positivePercentage={positivePercentage}
//       />
//     </Section>
//   </Wrapper>
// );
//   }
// }
