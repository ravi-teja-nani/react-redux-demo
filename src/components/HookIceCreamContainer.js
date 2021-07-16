import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

function HookIceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Hook icecream container: {numOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}>BUY_ICE_CREAM</button>
        </div>
    )
}

export default HookIceCreamContainer
