import React from 'react'
import { Page } from '../components/Page'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import LiteNews from '../components/LiteNews'
import CmsListNews from '../components/CmsListNews'
import AddNews from '../components/AddNews'

const CMS = () =>{
    return(
        <Page>
            <AddNews/>
            {/* <CmsListNews/> */}
        </Page>
        
    )
    
}

export default {
    component:CMS
}