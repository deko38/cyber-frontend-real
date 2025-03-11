import classes from '../module/Navbar.module.css';
import { useEffect, useState } from "react";
import axios from "axios";
import cart from '../assets/Icon/cart.png';
import person from '../assets/Icon/person.png';
import heart from '../assets/Icon/heart.png';

function Navbar() {
    const [menus, setMenus] = useState({});
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/menus")
            .then(response => {
                console.log("Fetched menus:", response.data);
                setMenus(response.data[0]);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setMenus({});
            });
    }, []);

    return (
        <>
            <div className={classes['main-wrapper']}>

                <div className={classes['logo']}>
                    cyber
                </div>

                {/* The search input and menu items inside the hamburger menu */}
                {menus ? (
                    <div className={`${classes['elements']} ${menuOpen ? classes.active : ''}`}>
                        <input placeholder='search' type='text' className={classes['input']} />
                        <p>{menus.home ? menus.home.name : ""}</p>
                        <p>{menus.about ? menus.about.name : ""}</p>
                        <p>{menus.contactUs ? menus.contactUs.name : ""}</p>
                        <p>{menus.blog ? menus.blog.name : ""}</p>

                        {/* Icons only visible inside the mobile menu */}
                        <div className={classes['icons']}>
                            <img src={cart} className={`${classes['icon']} ${classes['small-icon']}`} />
                            <img src={heart} className={`${classes['icon']} ${classes['small-icon']}`} />
                            <img src={person} className={`${classes['icon']} ${classes['small-icon']}`} />
                        </div>
                    </div>
                ) : ""}

                {/* Hamburger menu icon for mobile */}
                <div className={classes['hamburger']} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? '×' : '☰'} {/* Change to 'X' when open */}
                </div>
            </div>
        </>
    );
}

export default Navbar;
