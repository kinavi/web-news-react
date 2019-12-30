import React from "react";
import { connect } from 'react-redux'
import  CmsPage  from '../../Template/CmsPage'
import News from './News'

const ListNewsPage = ({ listNews }) =>//list-group
    <CmsPage className='nav'>
        <div className="">
            {(!!listNews)?
                listNews.map((news, i)=>
                    <News key={i} {...news}/>
                )
                :
                <div>Новостей нет</div>
            }
        </div>
    </CmsPage>
    

const mapStateToProps = state =>({
    listNews: state.ListNews
})

const mapDispatchToProps = dispatch =>({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListNewsPage)