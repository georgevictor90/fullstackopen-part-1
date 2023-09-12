import { useState } from "react";
import Statistics from "./components/Statistics";
import StatisticsLine from "./components/StatisticsLine";
import Button from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <div>
      <section>
        <h2>give feedback</h2>
        <Button handler={() => setGood(good + 1)} text={"good"} />
        <Button handler={() => setNeutral(neutral + 1)} text={"neutral"} />
        <Button handler={() => setBad(bad + 1)} text={"bad"} />
      </section>

      <Statistics>
        {all ? (
          <table>
            <tbody>
              <StatisticsLine text={"good"} value={good} />
              <StatisticsLine text={"neutral"} value={neutral} />
              <StatisticsLine text={"bad"} value={bad} />
              <StatisticsLine text={"all"} value={all} />
              <StatisticsLine text={"average"} value={average} />
              <StatisticsLine text={"positive"} value={positive + " %"} />
            </tbody>
          </table>
        ) : (
          <p>No feedback given</p>
        )}
      </Statistics>
    </div>
  );
};

export default App;
