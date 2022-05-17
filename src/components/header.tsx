import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id="header">
      <Link to="/">Региональные операторы и представители</Link>
      <Link to="/">Участники проекта Sk</Link>
      <Link to="/research">R&D маркет</Link>
      <Link to="/regional-partners">Региональные индустриальные партнеры</Link>
      <Link to="/team">Команда</Link>
    </div>
  );
};

export default Header;
