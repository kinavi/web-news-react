import React from "react";
import { connect } from 'react-redux'
import { cmsPage } from '../../Template/cmsPage'

const ListNews = ({ News }) =>
    <cmsPage>
        <ul>
            {(News.length)?
                News.map((_new, i)=>
                <li key={i} >
                    <p>Заголовок</p>
                    <div>{_new.title}</div>
                    <p>Описание</p>
                    <div>{_new.description}</div>
                </li>
                )
                :
                <div>Новостей нет!</div>
            }
        </ul>
    </cmsPage>
    

const mapStateToProps = state =>({
    News: state.News
})

const mapDispatchToProps = dispatch =>({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListNews)