import * as React from 'react';
import LOGO from '../static/images/logo.png'

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return <>
        <div className='footer-container'>
            <div className='footer-content-container'>
                <div className='footer-logo'>
                    <img src={LOGO}></img>
                </div>

                <p>
                    © 2011-2016 ИНЖЕНЕР-ОМСК
                </p>

                <p>
                    Троицкое, Октябрьская, 1
                </p>

                <div className='footer-rows-container'>
                    <p>тел. +7 (3812) 38-22-36 </p>
                    <p>факс +7 (3812) 92-94-85</p>
                </div>
            </div>
        </div>
    </>;
};

export default Footer;
