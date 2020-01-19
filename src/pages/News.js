import React, {useState, useEffect} from "react";
import { Page } from '../components/Page'
import { useParams } from "react-router-dom";
import { connect } from 'react-redux'
import FullNews from '../components/FullNews'

const News = ({ListNews}) =>{

    let { id } = useParams();
    const [News, setNews] = useState(getItemById(ListNews, id))
    
    return(
        <Page>
            <FullNews {...News}/>
        </Page>
    )
}
const mapStateToProps = state =>({
    ListNews:state.ListNews
})

export default {
    component:connect(
        mapStateToProps,
        null
    )(News)
}

// Фигня, надо переделать
const getItemById = (List, id) =>{
    return List.filter(item => item.id==id)[0] 
}