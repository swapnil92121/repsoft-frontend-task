import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


export const Navbar = () => {


    return (
        <>
            <div className="navbar">

                <ul>
                    <li>Home</li>
                    <li>Tournaments</li>
                    <li>Compare Devices</li>
                    <li>Shop</li>
                    <li>
                        <div style={{ display: 'flex', borderRadius: '3.45382px', border: '1px solid white', width: '130%',marginTop:'2%' }}>
                            <input placeholder="Search for Tournaments,games etc" />
                            <SearchIcon style={{ marginTop: '1%' }} />
                        </div>
                    </li>
                    <Link to={'login'} style={{textDecoration:'none'}}><li className='login'><h5>LOG IN</h5></li></Link>
                    <Link to={'signup'} style={{textDecoration:'none'}}><li className='signup'><h5>SIGN UP</h5></li></Link>
                </ul>
                <MenuIcon className='hamburger_icon'/>
            </div>

        </>
    )
}