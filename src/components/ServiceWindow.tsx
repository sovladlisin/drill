import * as React from 'react';
import { TService } from '../actions/service/types';
import { getImage } from '../utils';
import { useOnClickOutside } from './HandleClickOutside';

interface IServiceWindowProps {
    service: TService,
    onClose: () => void
}

const ServiceWindow: React.FunctionComponent<IServiceWindowProps> = (props) => {

    const ref = React.useRef()
    useOnClickOutside(ref, () => props.onClose())
    return <>
        <div className='m-background'>

        </div>
        <div className='m-popup' ref={ref}>
            <div className='pop-image-container'>
                <img src={getImage(props.service.img)}></img>
            </div>
            <h2>{props.service.title}</h2>
            <div>
                <label>Цена:</label>
                <p>{props.service.price}</p>
            </div>
            {props.service.decs.length != 0 && <>
                <p>{props.service.decs}</p>
            </>}

        </div>
    </>;
};

export default ServiceWindow;
