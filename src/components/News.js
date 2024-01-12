import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles:[],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url ='https://newsapi.org/v2/top-headlines?country=in&apiKey=26b55d01b5d94a169c14ffde08aa0c10&page=1&pageSize=20';
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
    }
    handlePrevClick = async ()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=26b55d01b5d94a169c14ffde08aa0c10&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            page: this.state.page-1,
            articles: parseData.articles
        })
    }

    handleNextClick =async ()=>{
        if(this.state.page+1> Math.ceil(this.state.totalResults/20)){

        }
        else{
            let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=26b55d01b5d94a169c14ffde08aa0c10&page=${this.state.page+1}&pageSize=20`;
            let data = await fetch(url);
            let parseData = await data.json()
            this.setState({
                page: this.state.page+1,
                articles: parseData.articles
            })}
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top NewsHeadline</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://th-i.thgim.com/public/incoming/4qdum8/article67729638.ece/alternates/LANDSCAPE_1200/Britain_Post_Office_Scandal_04543.jpg"} url={element.url} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page<=1} type='button' className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type='button' className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
