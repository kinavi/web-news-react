import React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const News = ({ id, title, description, fileName}) =>
    <div className="shadow card rounded mb-5">
        <img src={fileName} className=" card-img-top" />
        <div className="card-body">
            <div className="card-title h3">{title}</div>
            <div className="card-text text-muted">{ ReactHtmlParser(description) }</div>
        </div>
    </div>

export default News