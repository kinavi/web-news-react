import React, {useState, useEffect} from "react";
import NewsForm from '../components/Forms/NewsForm'
import { render } from "react-dom";
import { useParams } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import {Page} from '../components/Page'
import { connect } from 'react-redux'
import { addNews, loadFile } from '../store/Actions/index'

const EditNews = ({ListNews, _onCreateNews})=>
{
    let { id } = useParams();

    const [News, setNews] = useState(getItemById(ListNews, id))

    // useEffect(()=>{
    //     if(id!==undefined){
    //         setNews()
    //         // console.log(getItemById(ListNews, id))
    //         //console.log(News)
    //     }
    // }, [])

    return (
        <Page>
            {console.log(News)}
            <NewsForm News={News} _onCreateNews={_onCreateNews} />
        </Page>

    )
}
const mapStateToProps = state =>({
    ListNews:state.ListNews
})

const mapDispatchToProps = dispatch =>({
    _onCreateNews(title, description, file){
        dispatch(addNews(title, description, file.name))
        
        //Колхоз, надо в отдельную функцию
        var data = new FormData()
        data.append('file', file)
        data.append('user', 'hubot')

        loadFile(data)
        
    }
})
export default {
    component:connect(
        mapStateToProps,
        mapDispatchToProps
    )(EditNews)
}


// Фигня, надо переделать
const getItemById = (List, id) =>{
    return List.filter(item => item.id==id)[0] 
}