import * as React from 'react';

import ser1 from '../static/images/ser1.jpg'
import ser2 from '../static/images/ser2.jpg'
import ser3 from '../static/images/ser3.jpg'

interface IAboutProps {
}

const About: React.FunctionComponent<IAboutProps> = (props) => {
    return <div className='sub-page-container'>
        <h2 className='sub-page-title'>Контакты</h2>
        <div className='contacts'>
            <div className='contacts-meta'>
                <label>Время работы:</label>
                <p>пн-сб 8:00−20:00 | вс 8:00−18:00</p>
                <label>Адрес:</label>
                <p>Троицкое, Октябрьская, 1</p>
                <label>Рабочий телефон:</label>
                <p>+7 (3812) 38-22-36</p>
                <label>Факс:</label>
                <p>+7 (3812) 92-94-85</p>
                <label>Написать нам по электронной почте:</label>
                <p>golosov111@list.ru</p>
            </div>
            <div className='contacts-photo'>
                <img></img>
            </div>
        </div>
        <h2 className='sub-page-title'>Сертификаты и лицензии</h2>
        <div className='certificates'>
            <div>
                <img src={ser1}></img>
                <p>Лицензия 1</p>
            </div>
            <div>
                <img src={ser2}></img>
                <p>Лицензия 2</p>
            </div>
            <div>
                <img src={ser3}></img>
                <p>Лицензия 3</p>
            </div>
        </div>

    </div>;
};

export default About;
