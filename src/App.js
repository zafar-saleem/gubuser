import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { SearchProvider, AppTitleProvider, } from './contexts/';
import { Header } from './components/';
import { Search } from './pages/Search/';
import { User } from './pages/User/';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppTitleProvider>
        <SearchProvider>
          <Header position="sticky" title="Search" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/user/:userid" element={<User />} />
            </Routes>
          </div>
        </SearchProvider>
      </AppTitleProvider>
    </BrowserRouter>
  );
}

export default App;
