import * as React from 'react';
import { THistory } from '../actions/service/types';
import { getImage } from '../utils';
import { useOnClickOutside } from './HandleClickOutside';

interface IHistoryWindowProps {
    history: THistory,
    onClose: () => void
}

const HistoryWindow: React.FunctionComponent<IHistoryWindowProps> = (props) => {

    const ref = React.useRef()
    useOnClickOutside(ref, () => props.onClose())
    return <>
        <div className='m-background'>

        </div>
        <div className='m-popup' ref={ref}>
            <div className='pop-image-container'>
                <img src={getImage(props.history.img)}></img>
            </div>
            <h2>{props.history.title}</h2>

            {props.history.decs.length != 0 && <>
                <p>{props.history.decs}</p>
            </>}

        </div>
    </>;
};

export default HistoryWindow;
