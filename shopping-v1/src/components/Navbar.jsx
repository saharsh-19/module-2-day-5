import "../Assets/CSS/nav.css"
import { Link} from 'react-router'

function Navbar(){
    return(
        <div> 
            <body>
                <ul>
                    <li><a class="active" href="/home">Home</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </body>
        </div>
    )
}

export default Navbar