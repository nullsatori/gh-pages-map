import { MemoryRouter as Router } from 'react-router-dom';
import './App.scss';
import AnimatedRoutes from './components/animatedRoutes';
import Header from './components/header';

export default function App() {
  // document.addEventListener('contextmenu', (event) => event.preventDefault());

  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}
