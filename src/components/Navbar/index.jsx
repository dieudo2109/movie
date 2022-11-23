import React, { useState } from 'react';
import { MdSearch } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import './Navbar.scss'
function Navbar(props) {

    const [keywords, setKeywords] = useState('')
    const navigate = useNavigate();
    const handleChangeInput = (e) => {
        let keywords = e.target.value;
        setKeywords(keywords);
        if (keywords.length > 0) {
            navigate(`/search?keywords=${keywords.trim()}`)
        } else navigate('/')
    }
    const goHome = () => {
        navigate('/')
        setKeywords('')
    }
    return (
        <div className="Navbar">
            <div className='Navbar_container'>
                <div className='logo' onClick={goHome}>
                    <img src='./accsets/logo.png' alt='logo' />
                </div>
                <div className="Navbar_Search">
                    <MdSearch className="Navbar_iconSearch" />
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={handleChangeInput}
                        value={keywords}
                    />
                </div>
            </div>
        </div>
    )
}
export default Navbar