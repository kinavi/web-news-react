import React from "react";
import { connect } from 'react-redux'
//import NewsTitle from './NewsTitle'
import EditNews from '../components/EditNews'

const cmsListNews = ({ ListNews, onEdit}) =>
        <div className="">
            {(!!ListNews)?
                ListNews.map((n,i)=>
                    <EditNews key={i} {...n} />
                    )
                :
                <div>Новостей нет</div>
            }
        </div>

const mapStateToProps = state =>({
    ListNews:state.ListNews
})

export default connect(
    mapStateToProps,
    null
)(cmsListNews)
