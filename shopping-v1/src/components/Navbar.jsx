import "../Assets/CSS/nav.css"
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div> 
            <body>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/news'>News</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/product'>Product</Link></li>
                    <li><Link to='/mycounter'>MyCounter</Link></li>
                    <li><Link to='/random'>Random User</Link></li>
                </ul>
            </body>
        </div>
    )
}

export default Navbar