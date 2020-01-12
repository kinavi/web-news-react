import React from 'react'
import { Page } from '../components/Page'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import LiteNews from '../components/LiteNews'
import CmsListNews from '../components/ListNewsCms'
import AddNewsForm from '../components/Forms/AddNewsForm'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';

const CMS = ({route}) =>{
    return(
        <Page>
            {/* <AddNewsForm/> */}
            <Link className="nav-link " to="/add" replace={true}>Добавить новость</Link>
            {/* <button>Добавить новость</button> */}
            <CmsListNews/>
            {renderRoutes(route.routes)}
        </Page>
        
    )
    
}

export default {
    component:CMS
}