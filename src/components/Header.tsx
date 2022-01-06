import * as React from 'react';
import AlertContainer from './AlertContainer';
import LOGO from '../static/images/logo.png'
import LOGO2 from '../static/images/logo-black.png'
import LOGO3 from '../static/images/logo-white.png'
import { Link } from 'react-router-dom'

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return <>
        <div className='header-container'>
            <div className='header-content-container'>
                <div className='header-logo'>
                    <Link to='/' ><img src={LOGO3}></img></Link>
                </div>

                <div className='header-buttons'>
                    <Link to='/service'>Услуги</Link>
                    <Link to='/about'>Контакты</Link>
                </div>
            </div>
        </div>
    </>;
};

export default Header;
