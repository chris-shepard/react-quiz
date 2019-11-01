import React from 'react';

const ProgressIndicator = ({value, numOfQuestions}) => {
  const result = Math.floor((value / numOfQuestions)*100);
  
  return (
    <div>{`${result}%`}</div>
  )
}

export default ProgressIndicator;