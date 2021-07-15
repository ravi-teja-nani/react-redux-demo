import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Hook cake container: {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>BUY__CAKE</button>
        </div>
    )
}

export default HookCakeContainer
