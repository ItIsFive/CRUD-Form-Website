import './Main.css'
import { Link } from 'react-router-dom'

function Main({children}) {
  return (
      <div className="main">
        <h2 className="main-header">React <Link to='/create'>C</Link><span><Link to='/read'>R</Link></span>UD Operations</h2>
        {children}
        <div className='backbtn'>
          <link href="https://cdn.jsdelivr.net/npm/remixicon@3.6.0/fonts/remixicon.css" rel="stylesheet" />
          <i classname="backbtn" class="ri-arrow-left-circle-line"></i>
        </div>
      </div>
      
  );
}

export default Main;