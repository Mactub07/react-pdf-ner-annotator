import React from 'react';
import './Error.scss';

interface Props {
  message?: string;
}

const Error = ({ message = 'Something went wrong' }: Props) => {
  return (
    <div className="error-container">
      { message }
    </div>
  );
};

export default Error;
