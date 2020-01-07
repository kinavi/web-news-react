import React from 'react'
import { Page } from '../components/Page'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import '../styles/App.css'
import MainListNews from  '../components/MainListNews'

const ListNews = () =>{
    return(
        <Page>
            <MainListNews/>
            {/* <div> Тут выводится список новостей </div> */}
        </Page>
    )
}

export default {
    component:ListNews
}