import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function PayLoadContainer() {
    const [number, setNumber] = useState(1)
    const dispatch = useDispatch()
    return (
        <>
            <input value = {number} onChange = {(e) => setNumber(e.target.value)}/>
            <button onClick = {() => dispatch(buyCake(number))}>BUY {number} CAKES</button>
        </>
    )
}

export default PayLoadContainer
