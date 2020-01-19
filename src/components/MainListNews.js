import React from "react";
import { connect } from 'react-redux'
import PreviewNews from './PreviewNews'

const MainListNews = ({ listNews }) =>
    <div>
            {(!!listNews)?
                listNews.map((news, i)=>
                    <PreviewNews key={i} {...news}/>
                )
                :
                <div>Новостей нет</div>
            }

    </div>

const mapStateToProps = state =>({
    listNews: state.ListNews
})

export default connect(
    mapStateToProps,
    null
)(MainListNews)