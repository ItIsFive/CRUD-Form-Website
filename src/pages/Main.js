import './Main.css'
import { Link } from 'react-router-dom'

function Main({children}) {
  return (
      <div className="main">
        <h2 className="main-header">React <Link to='/create'>C</Link><span><Link to='/read'>R</Link></span>UD Operations</h2>
        {children}
      </div>
  );
}

export default Main;