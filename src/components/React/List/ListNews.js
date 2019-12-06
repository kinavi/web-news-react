import React from "react";
//import { connect } from 'react-redux'

const ListNews = ({ News }) =>
    <div>
        <ul>
        {console.dir(News)}
        {News.map(_new =>
            <li>{_new.title}</li>
        )}
        </ul>
    </div>

// const mapStateToProps = state =>({
//     News:state.List
// })

// const mapDispatchToProps = dispatch =>({

// })

// export default connect(
//     mapStateToProps,
//     null
// )(ListNews)

export default ListNews