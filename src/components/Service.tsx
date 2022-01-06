import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../actions/service/service';
import { TService } from '../actions/service/types';
import { RootStore } from '../store';
import { getImage } from '../utils';
import ServiceWindow from './ServiceWindow';

interface IServiceProps {
}

const Service: React.FunctionComponent<IServiceProps> = (props) => {
    const [search, setSearch] = React.useState('')

    const serviceState = useSelector((state: RootStore) => state.services)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getServices())
    }, [])

    const [selectedService, setSelectedService] = React.useState<TService>(null)

    return <>
        <div className='sub-page-container'>
            <h2 className='sub-page-title'>Товары и услуги</h2>
            <div className='search-service'>
                <span><i className='fas fa-search'></i></span>
                <input value={search} onChange={e => setSearch(e.target.value)}></input>
            </div>
            <div className='service-items-container'>
                {serviceState.services && serviceState.services
                    .filter(d => JSON.stringify(d).toLocaleLowerCase().includes(search.toLocaleLowerCase())).length === 0 && <div className='service-empty'>

                        <i className='fas fa-times'></i>
                        <p>Поиск не дал результата</p>

                    </div>}
                {serviceState.services && serviceState.services
                    .filter(d => JSON.stringify(d).toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                    .map(d => {
                        return <div className='service-item' onClick={_ => setSelectedService(d)}>
                            <p className='service-item-title'>{d.title}</p>
                            <img src={getImage(d.img)}></img>
                            <p className='service-item-price'>{d.price}</p>
                        </div>
                    })}
            </div>
        </div>

        {selectedService && <ServiceWindow service={selectedService} onClose={() => setSelectedService(null)} />}
    </>;
};

export default Service;
