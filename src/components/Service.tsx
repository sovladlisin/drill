import * as React from 'react';

interface IServiceProps {
}

const Service: React.FunctionComponent<IServiceProps> = (props) => {
    const [search, setSearch] = React.useState('')

    const data = [
        {
            id: 1,
            title: 'Пример 1',
            price: '1000 Р.',
            desc: 'Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 ',
            img: '',
        },
        {
            id: 2,
            title: 'Пример 1',
            price: '1000 Р.',
            desc: 'Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 ',
            img: '',
        },
        {
            id: 3,
            title: 'Пример 1',
            price: '1000 Р.',
            desc: 'Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 ',
            img: '',
        },
        {
            id: 4,
            title: 'Пример 1',
            price: '1000 Р.',
            desc: 'Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 ',
            img: '',
        },
        {
            id: 5,
            title: 'Пример 1',
            price: '1000 Р.',
            desc: 'Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 ',
            img: '',
        },
        {
            id: 6,
            title: 'Пример 1',
            price: '1000 Р.',
            desc: 'Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 ',
            img: '',
        },
        {
            id: 7,
            title: 'Пример 1',
            price: '1000 Р.',
            desc: 'Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 ',
            img: '',
        },
        {
            id: 8,
            title: 'Пример 1',
            price: '1000 Р.',
            desc: 'Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 Пример 1 ',
            img: '',
        },


    ]

    return <>
        <div className='sub-page-container'>
            <h2 className='sub-page-title'>Товары и услуги</h2>
            <div className='search-service'>
                <span><i className='fas fa-search'></i></span>
                <input value={search} onChange={e => setSearch(e.target.value)}></input>
            </div>
            <div className='service-items-container'>
                {data.map(d => {
                    return <div className='service-item' onClick={_ => { }}>
                        <p className='service-item-title'>{d.title}</p>
                        <img src={d.img}></img>
                        <p className='service-item-price'>{d.price}</p>
                    </div>
                })}
            </div>
        </div>
    </>;
};

export default Service;
