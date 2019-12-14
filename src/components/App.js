import React from "react";
import '../styles/App.css';
import { Form } from './react/Form/Form'
//import ListNews from './React/List/ListNews'
import { connect } from 'react-redux'
import { LoadNews } from './redux/Actions/List/LoadNews'
import AddNewLayer from './react/cms/AddNewPage/AddNewsLayer'
import ListNewsPage from './react/cms/ListNews/ListNewsPage'

// const App = ({News}) =>
//     <div>
//         <Form/>
//         {/* {console.dir(this.props.state)} */}
//         <ListNews News={state.News}/>
//     </div>

const App = () =>
    <div>
        <AddNewLayer/>
        <ListNewsPage/>
    </div>
    
// class App extends React.Component {

//     render() {
//         const { News } = this.props
//         return (
//         <div>
//             <AddNewLayer/>
//             <ListNewsPage/>
//         </div>
//         )
        
//     }
//   }

// const mapStateToProps = state =>({
//     News: state.News
// })


// export default connect(
//     mapStateToProps,
//     null
// )(App)

export default App