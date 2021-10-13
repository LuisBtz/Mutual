import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Header = () => {

    const [menu, showMenu] = useState(false);

    return(
        <HeadeContainer>
            <button className='icon' onClick={() => showMenu(!menu)}>
                <img src='./icon.svg' alt='Mutual icon' />
            </button>
            {menu ? 
                <ul className='menu'>
                    <li><button>Work</button></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            : ''
            }
        </HeadeContainer>
    )
}

const HeadeContainer = styled.nav`
position: fixed;
width: 100%;
height: 50px;
    .icon {
        position: absolute;
        left: 16px;
        top: 14px;
        width: 20px;
    }
    ul.menu {
        position: absolute;
        top: 15px;
        left: 70px;
        li {
            margin-right: 30px;
            display: inline;
            a, button {
                text-transform: uppercase;
            }
        }
    }
`

export default Header