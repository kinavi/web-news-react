import React from "react";
import '../styles/App.css';
import { Form } from './React/Form/Form'
//import ListNews from './React/List/ListNews'
import { connect } from 'react-redux'
import { LoadNews } from './Redux/Actions/List/LoadNews'
import AddNewLayer from './React/cms/AddNewPage/AddNewsLayer'
import ListNews from './React/cms/ListNews/ListNews'

// const App = ({News}) =>
//     <div>
//         <Form/>
//         {/* {console.dir(this.props.state)} */}
//         <ListNews News={state.News}/>
//     </div>


class App extends React.Component {

    // componentDidMount(){
    //     const {onLoad} = this.props
    //     //console.log('Hello')
    //     onLoad()
    // }

    // componentDidUpdate(){
    //     //const {state} = this.props
    //     // console.log(`state - ${state}`)
    //     // console.dir(state)
    //     // console.log(`List`)
    //     //console.dir(state.List)
    // }

    render() {
        const { News } = this.props
        return (
        <div>
            <AddNewLayer/>
            <ListNews/>
            {/* <Form/>
            <ListNews News={News}/> */}
        </div>
        )
        
    }
  }





// App.componentDidMount = () =>{
//     console.log('Hello')
// }

const mapStateToProps = state =>({
    News: state.News
})

const mapDispatchToProps = dispatch =>({

    // onLoad(){
    //     fetch("http://localhost:3000/api")
    //     .then(
    //         response=> 
    //             response.json().then(
    //                 data=>{
    //                     dispatch(Load(data))
    //                     console.log('Data to store:')
    //                     console.dir(data)
                        
    //                     //console.dir(store.getState())
    //                 }
    //             )
    //     )
    //     .catch(function(err) {  
    //         console.log('Fetch Error :-S', err);  
    //     });
    //     }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
