import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer({numOfCakes, buyCake, greetings}) {
    return (
        <div>
            <h1>{greetings}</h1>
            <h1>Num of Cakes: {numOfCakes} </h1>
            <button onClick = {buyCake}>BUY CAKE</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
