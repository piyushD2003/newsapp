import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description, imageUrl,url} =this.props
        return (
            <div className='my-2' >
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}.</p>
                            <a href={url} target='_blank' className="btn btn-sn btn-primary">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
