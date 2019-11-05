import React from 'react';
import './ProgressIndicator.styles.css';

const ProgressIndicator = ({ value, numOfQuestions }) => {
  const result = Math.floor((value / numOfQuestions) * 100);

  return (
    <div className="progress-bar"><div>{`${result}%`}</div></div>
  )
}

export default ProgressIndicator;