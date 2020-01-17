import React from 'react'
import { Page } from '../components/Page'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import LiteNews from '../components/LiteNews'
// import CmsListNews from '../components/ListNewsCms'
// import AddNewsForm from '../components/Forms/AddNewsForm'
// import { Link } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config';

const NoMatch = ({route}) =>{
    return(
        <Page>
            404
        </Page>
        
    )
    
}

export default {
    component:NoMatch
}