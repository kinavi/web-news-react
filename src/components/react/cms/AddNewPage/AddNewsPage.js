import React from "react";
import CmsPage from '../../Template/CmsPage'
import AddNewsLayer from './AddNewsLayer'
import ListNewsTitle from '../ListNews/ListNewsTitle'


const AddNewPage = () =>{
    return(
        <CmsPage>
            <AddNewsLayer/>
            <ListNewsTitle/>
        </CmsPage>
    )
}  

export default AddNewPage