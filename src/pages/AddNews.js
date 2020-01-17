import React, {useState} from "react";
import AddNewsForm from '../components/Forms/AddNewsForm'
//import { renderRoutes } from 'react-router-config';
import {Page} from '../components/Page'
// import NewsForm from '../components/Forms/NewsForm'
// import { connect } from 'react-redux'
// import { addNews, loadFile } from '../store/Actions/index'

const AddNews = ()=>
    <Page>
        {/* <NewsForm _onCreateNews={_onCreateNews}/> */}
        <AddNewsForm />
        
    </Page>

// const mapDispatchToProps = dispatch =>({
//     _onCreateNews(title, description, file){
//         dispatch(addNews(title, description, file.name))

//         //Колхоз, надо в отдельную функцию
//         var data = new FormData()
//         data.append('file', file)
//         data.append('user', 'hubot')

//         loadFile(data)
//     }
// })

// export default {
//     component:connect(
//         null,
//         mapDispatchToProps
//     )(AddNews)
// }
export default {
    component:AddNews
}
