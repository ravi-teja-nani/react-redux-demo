import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer({numOfIceCreams, buyIceCream}) {
    return (
        <div>
            <h1>Num of ICE CREAMS: {numOfIceCreams} </h1>
            <button onClick = {buyIceCream}>BUY ICE CREAM</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
