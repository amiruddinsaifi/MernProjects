import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, publishedDate, author, imageUrl, newsUrl,source}= this.props
    return (
      <div className='my-3'>
        
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger " style={{left:"90%", zIndex:"1"}}>
    {source}
  </span>
            <img src={imageUrl?imageUrl:"https://d.newsweek.com/en/full/2206892/president-joe-biden.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}.....</p>
           
  <p className="card-text"><small className="text-danger"> by {author} on {new Date(publishedDate).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Learn More</a>
        </div>
        </div>

      </div>
    )
  }
}

export default NewsItem
