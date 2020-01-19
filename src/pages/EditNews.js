import React, {useState, useEffect} from "react";
import EditNewsForm from '../components/Forms/EditNewsForm'
import { render } from "react-dom";
import { useParams } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import {Page} from '../components/Page'
import { connect } from 'react-redux'
import { addNews, loadFile } from '../store/Actions/index'
//{ListNews, _onCreateNews}
const EditNews = ({ListNews, _onCreateNews})=>
{
    let { id } = useParams();
    const [News, setNews] = useState(getItemById(ListNews, id))
    // // console.log("ListNews in EditNews - ",ListNews)
    // // const [News, setNews] = useState()
    // console.log("listNews - ",listNews)
    // useEffect(()=>{
    //     console.log(1, " - ",ListNews)
    //     setListNews(ListNews)
    //     // if(id!==undefined){
    //     //     setNews(getItemById(ListNews, id))
    //     //     // console.log(getItemById(ListNews, id))
    //     //     //console.log(News)
    //     // }
    // }, [ListNews])
//ListNews={ListNews} _onCreateNews={_onCreateNews} 
    return (
        <Page>
            {/* {console.log("News in EditNews - ",News)} */}
            <EditNewsForm {...News} _onCreateNews={_onCreateNews}/>
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
// export default {
//     component:EditNews
// }
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