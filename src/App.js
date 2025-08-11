import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HelloWorld from './components/HelloWorld';
import GreetingCard from './components/GreetingCard';
import Counter from './components/Counter';
import ToggleVisibility from './components/ToggleVisibility';
import TodoList from './components/TodoList';
import FilterableTodoList from './components/FilterableTodoList';
import Timer from './components/Timer';
import UserProfile from './components/UserProfile';
import LoginForm from './components/LoginForm';
import ThemeSwitcherPage from './components/ThemeSwitcherPage';
import { ThemeProvider } from './context/ThemeContext';
import MultiPageApp from './components/MultiPageApp';



function App() {


  const navStyle = {
    padding: '10px',
    backgroundColor: '#eee',
    display: 'flex',
    justifyContent: 'space-around',
    fontFamily: 'Arial, sans-serif'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold'
  };

  return (
    // <div>
    //   <HelloWorld />
    //   <GreetingCard name="Alex"/>
    //   <Counter />
    //   <ToggleVisibility />
    //   <TodoList />
    // </div>


  <ThemeProvider>

    <Router>
      <div>
        <nav style={navStyle}>
          <Link to="/hello" style={linkStyle}>Hello World</Link>
          <Link to="/greeting" style={linkStyle}>Greeting Card</Link>
          <Link to="/counter" style={linkStyle}>Counter</Link>
          <Link to="/toggle" style={linkStyle}>Toggle</Link>
          <Link to="/todo" style={linkStyle}>Todo List</Link>
          <Link to="/filter" style={linkStyle}>Filter</Link>
          <Link to="/timer" style={linkStyle}>Timer</Link>
          <Link to="/user" style={linkStyle}>User Profile</Link>
          <Link to="/login" style={linkStyle}>Login Form</Link>
          <Link to="/theme" style={linkStyle}>Theme Switcher</Link>
          <Link to="/multi" style={linkStyle}>Multi Page App</Link>
          
        </nav>

        <Routes>
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/greeting" element={<GreetingCard name="React Student" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/toggle" element={<ToggleVisibility />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/filter" element={<FilterableTodoList />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/theme" element={<ThemeSwitcherPage />} />
          <Route path="/multi/*" element={<MultiPageApp />} />
        </Routes>
      </div>
    </Router>
  </ThemeProvider>
  );
}

export default App;
