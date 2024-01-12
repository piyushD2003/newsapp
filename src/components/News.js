import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Shishir Gupta",
            "title": "Maldives govt distances from minister's derogatory remark against PM Modi, calls it 'personal opinion' - Hindustan Times",
            "description": "The statement from Maldives govt came after India made it known that the statement of the junior lady minister was totally uncalled for and unacceptable. | World News",
            "url": "https://www.hindustantimes.com/world-news/maldives-govt-distances-from-ministers-derogatory-remark-against-pm-modi-101704619980690.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/07/1600x900/Prime-Minister-Narendra-Modi-will-be-visiting-Nash_1704569576965_1704620205756.jpg",
            "publishedAt": "2024-01-07T09:34:19Z",
            "content": "The Maldives government on Sunday distanced itself from derogatory remarks made by its minister Mariyam Shiuna against Prime Minister Narendra Modi.\r\nIn a statement, the government said the opinions … [+2489 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India TV News"
            },
            "author": "Edited by Ajeet Kumar",
            "title": "Blinken meets Jordan's king in an attempt to avert Israel-Hamas war from spreading in entire Middle East - India TV News",
            "description": "Jordan and other Arab states have been highly critical of Israel's actions and have eschewed public support for long-term planning, arguing that the fighting must end before such discussions can begin.",
            "url": "https://www.indiatvnews.com/news/world/israel-hamas-war-antony-blinken-meets-jordan-king-to-stop-gaza-war-from-spreading-in-entire-middle-east-2024-01-07-910655",
            "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/01/antony-blinken-1704619573.jpg",
            "publishedAt": "2024-01-07T09:28:38Z",
            "content": "Israel-Hamas war: US Secretary of State Antony Blinken met on Sunday with Jordan's king and foreign minister and visited a World Food Programme warehouse in Amman as he pressed ahead with an urgent M… [+5296 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Rafael Nadal withdraws from Australian Open 2024 with muscle tear - Hindustan Times",
            "description": "Former World No.1 Rafael Nadal will not feature in the 2024 edition of the Australian Open. The Spanish superstar won the Australian Open in 2009 and 2022. | Tennis News",
            "url": "https://www.hindustantimes.com/sports/tennis/rafael-nadal-pulls-out-of-australian-open-with-muscle-tear-101704619391634.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/07/1600x900/TENNIS-BRISBANE--0_1704619485292_1704619499744.JPG",
            "publishedAt": "2024-01-07T09:25:28Z",
            "content": "Spanish superstar Rafael Nadal will not feature in the 2024 edition of the Australian Open, the 22-time Grand Slam title winner confirmed on Sunday. One of the most decorated players in men's singles… [+3538 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "‘ED is itself an idiot’: Adhir Chowdhury over attack on raid team in Bengal - Hindustan Times",
            "description": "The ED team was attacked and its vehicles were damaged in Sandeshkhali village of North 24 Parganas district. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/ed-is-itself-an-idiot-adhir-chowdhury-over-attack-on-raid-team-in-bengal-101704615436233.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/01/07/1600x900/Congress-leader-Adhir-Ranjan-Chowdhury-said-the-Co_1704617726886_1704617741961.jpg",
            "publishedAt": "2024-01-07T09:11:59Z",
            "content": "Two days after a team of the Enforcement Directorate (ED) was attacked in West Bengal, state Congress president Adhir Ranjan Chowdhury on Sunday criticised the central agency and the ruling Mamata Ba… [+2081 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount(){
        let url ='https://newsapi.org/v2/top-headlines?country=in&apiKey=26b55d01b5d94a169c14ffde08aa0c10';
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({articles: parseData.articles})
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
            </div>
        )
    }
}

export default News
