import React from 'react'
import { Page } from '../components/Page'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import LiteNews from '../components/LiteNews'
import CmsListNews from '../components/ListNewsCms'
import AddNewsForm from '../components/Forms/AddNewsForm'
import { Link, useHistory,useParams, useLocation } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import { Button } from "react-bootstrap";

const CMS = ({route}) =>{

    let history = useHistory();

    const handleClickAddNewsBtn = () =>{
        history.push("/cms/add");
    }

    return(
        <Page>
            <button className="btn btn-add-news" onClick={handleClickAddNewsBtn}>Добавить новость</button> 
            {/* <Button size="sm" className="mb-4" onClick={handleClickAddNewsBtn}>Добавить новость</Button>  */}
            {renderRoutes(route.routes)}
            <CmsListNews/>
        </Page>
        
    )
    
}

export default {
    component:CMS
}