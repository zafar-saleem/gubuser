import {
  createContext,
  useEffect,
  useContext,
  useState,
} from 'react';

export const AppTitleContext = createContext({});

export const useAppTitle = () => useContext(AppTitleContext);

export const AppTitleProvider = ({ children }) => {
  const [title, setTitle] = useState('Search');

  useEffect(() => {
  }, []);

  return (
    <AppTitleContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </AppTitleContext.Provider>
  );
};

export default AppTitleProvider;
