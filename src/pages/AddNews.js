import React, {useState} from "react";
import AddNewsForm from '../components/Forms/AddNewsForm'
import { renderRoutes } from 'react-router-config';

const AddNews = ({route})=>
    <div className="container">
        <AddNewsForm/>
        
    </div>

export default {
    component:AddNews
}
