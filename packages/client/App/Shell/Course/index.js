import React from 'react';

export default ({
  match: {
    params: { id }
  }
}) => {
  return <span>{`hi course ${id}`}</span>;
};
