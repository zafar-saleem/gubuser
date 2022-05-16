import {
  createContext,
  useEffect,
  useContext,
  useState,
} from 'react';

export const SearchContext = createContext({
});

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchedItems, setSearchedItems] = useState([]);
  // const [update, setUpdate] = useState(0);
  // const { sortNewsStories } = useSorting();

  useEffect(() => {
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchedItems,
        setSearchedItems,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
