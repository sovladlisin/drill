import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { RootStore } from '../store';
import BACK from '../static/images/back.png'
import { getHistory } from '../actions/service/service';
import { getImage } from '../utils';
import { THistory } from '../actions/service/types';
import HistoryWindow from './HistoryWindow';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getHistory())
    }, [])
    const historyState = useSelector((state: RootStore) => state.services.history)

    const [selectedHistory, setSelectedHistory] = React.useState<THistory>(null)
    return <>
        <div className='home-title-card-outer'>
            <div className='home-title-card'>
                <h1>Многопрофильная компания <br></br> "ООО ИНЖЕНЕР-ОМСК"</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <Link to='/about'>ПОДРОБНЕЕ</Link>
            </div>
            <img className='home-gears' src={BACK}></img>
        </div>

        <h2 className='home-title'>Наши преимущества</h2>

        <div className='home-tips'>
            <div className='tip-left'>
                <i className='fas fa-gem'></i>
                <p>Компания всегда четко выполняет требования заказчика относительно сроков реализации проекта и качества работ. На выполненные работы мы даем гарантию, в течение которой выполняем обслуживание и техническую поддержку оборудования.</p>
            </div>
            <div className='tip-right'>
                <i className='fas fa-hard-hat'></i>
                <p>Наши специалисты выполняют проектные работы, монтаж котельных, тепловых центров, водомерных узлов, строят и ремонтируют внутренние и наружные газопроводы из стали и полиэтилена. Также в наличии услуги по строительству и ремонту тепловых, водопроводных и канализационных сетей всех параметров.</p>
            </div>
            <div className='tip-left'>
                <i className='fas fa-ruble-sign'></i>
                <p>Мы используем накопленный опыт для разработки оптимального инженерно-технического решения, учитывающего одновременно потребности и желания клиента, а также необходимый технический регламент с соблюдением обязательных норм. При этом заказчик с нашей помощью выбирает наиболее приемлемый ценовой вариант.</p>
            </div>
        </div>

        <div className='home-title-blue-outer'>
            <h2 className='home-title-blue'>Портфолио</h2>
        </div>

        <div className='history-outer'>
            <div className='history'>
                {historyState && historyState.map(h => {
                    return <div className='history-item' onClick={_ => setSelectedHistory(h)}>
                        <p>{h.title}</p>
                        <img src={getImage(h.img)}></img>
                    </div>
                })}
            </div>
        </div>


        {selectedHistory && <HistoryWindow history={selectedHistory} onClose={() => setSelectedHistory(null)} />}
    </>
};

export default Home;

