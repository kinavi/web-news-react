import React from 'react'
import { Page } from '../components/Page'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import LiteNews from '../components/LiteNews'
import CmsListNews from '../components/CmsListNews'
import AddNewsForm from '../components/Forms/AddNewsForm'
import { Link } from 'react-router-dom'
const CMS = () =>{
    return(
        <Page>
            {/* <AddNewsForm/> */}
            <Link className="nav-link " to="/add">Добавить новость</Link>
            {/* <button>Добавить новость</button> */}
            <CmsListNews/>
        </Page>
        
    )
    
}

export default {
    component:CMS
}