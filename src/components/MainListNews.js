import React from "react";
import { connect } from 'react-redux'
import News from './News'

const MainListNews = ({ listNews }) =>
    <div>
            {(!!listNews)?
                listNews.map((news, i)=>
                    <News key={i} {...news}/>
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