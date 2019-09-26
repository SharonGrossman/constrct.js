import React, { createContext, useState, useContext } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const LoadingContext = createContext();

export default props => {
  const [loading, setLoading] = useState(false);

  const { children } = props;

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading
      }}
      {...props}
    >
      {loading && <LinearProgress color={'secondary'} />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
