import { createBrowserHistory } from 'history';
import React, { createContext, useState, useContext, useEffect } from 'react';

const HistoryContext = createContext();
const history = createBrowserHistory();

export default props => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (url) {
      history.push(url);
    }
  }, [url]);

  const navigate = url => setUrl(url);

  return (
    <HistoryContext.Provider
      value={{
        history,
        navigate
      }}
      {...props}
    />
  );
};

export const useHistory = () => useContext(HistoryContext);
