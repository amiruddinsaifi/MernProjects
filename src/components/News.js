import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
  static defaultProps= {
    pageSize:8,
    countryCode:'in',
    category:'general',
  }
  static propTypes = {
    pageSize:PropTypes.number,
    countryCode:PropTypes.string,
    category:PropTypes.string,
  }



  constructor(props){
    super(props);
    console.log("Main constructor hu or news component ke ander baitha hua hun yaar aaja");
    this.state = {
      articles:[],
      loading:false,
      page:1,
      totalResults:0
    }
    document.title= `${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1,)} - LatestNews`;
  }
  
  async updateNews(){
    this.props.setProgress(10)
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})

   //  let url ="https://newsapi.org/v2/everything?q=tesla&from=2023-04-10&sortBy=publishedAt&category={this.state.category}&apiKey=57aa3216c1454446802c55b591c26616";
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(50)
    console.log(parsedData);
    this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults, loading:false})
    this.props.setProgress(100)

  }

  async componentDidMount(){
    this.updateNews()
  }
   handlePrevClick= async ()=>{
    // console.log("Previous")
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apiKey=57aa3216c1454446802c55b591c26616&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // //  let url =`https://newsapi.org/v2/everything?q=tesla&from=2023-04-10&sortBy=publishedAt&category={this.state.category}&apiKey=57aa3216c1454446802c55b591c26616&page=${this.state.page - 1}`;
    // this.setState({loading:true})
 
    // let data = await fetch(url);
    //  let parsedData = await data.json();
    //  console.log(parsedData);
    //  this.setState({articles:parsedData.articles})
    // this.setState({
    //   page: this.state.page-1,
    //   loading:false
    // })

    this.setState({page:this.state.page-1});
    this.updateNews()
  }

  handleNextClick= async ()=>{
    // console.log("Next");
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){

    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apiKey=57aa3216c1454446802c55b591c26616&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // //  let url =`https://newsapi.org/v2/everything?q=tesla&from=2023-04-10&sortBy=publishedAt&category={this.state.category}&apiKey=57aa3216c1454446802c55b591c26616&page=${this.state.page + 1}`;
    //  let data = await fetch(url);
    //  let parsedData = await data.json();
    //  console.log(parsedData);
    // this.setState({
    //   page:this.state.page+1,
    //   articles:parsedData.articles,
    //   loading: false
      
    // })
    // }
    this.setState({page:this.state.page+1});
    this.updateNews()
  }

  fetchData = async() => {
  this.setState({page:this.state.page+1});
  let url =`https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

   //  let url ="https://newsapi.org/v2/everything?q=tesla&from=2023-04-10&sortBy=publishedAt&category={this.state.category}&apiKey=57aa3216c1454446802c55b591c26616";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles:this.state.articles.concat(parsedData.articles), 
      totalResults:parsedData.totalResults
})
  };
  render() {
    
    return (
      <>
        <h1 className='text-center'>Latest News From -{this.props.category.toUpperCase()}</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length!== this.state.totalResults}
            loader={<Spinner/>}
            >
      <div className='container'>
        <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className='col-md-3' key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:'unknown'} publishedDate={element.publishedAt} source={element.source.name}/>
        </div>
          })
          }
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className='container d-flex justify-content-between'>
          <button disabled = {this.state.page<=1} type="button" className='btn btn-dark' onClick={this.handlePrevClick}>&laquo; Previous </button>
          <p>Page {this.state.page}</p>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className='btn btn-dark'onClick={this.handleNextClick}>Next &raquo; </button>
        </div> */}
      </>
      
    )
  }
}

export default News