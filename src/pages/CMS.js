import React from 'react'
import { Page } from '../components/Page'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import LiteNews from '../components/LiteNews'
import CmsListNews from '../components/CmsListNews'

const CMS = () =>{
    return(
        <Page>
            <CmsListNews/>
            {/* <div>Тут Редоктируются новости</div> */}
        </Page>
        
    )
    
}

export default {
    component:CMS
}