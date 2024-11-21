import React, {useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
 import PropTypes from 'prop-types'
 import InfiniteScroll from "react-infinite-scroll-component";
const News =(props)=>
{
  const [articles,setarticles]=useState([]);
  const [loading,setloading]=useState(true);
  const [page,setpage]=useState(1);
  const [totalResults,settotalResults]=useState(0);
 const capitalize=(string)=>{
return string.charAt(0).toUpperCase()+ string.slice(1);
  }
  //  constructor(props)
  //   {
  //       super(props);
  //       this.state={
  //       articles:[],
  //      loading:true,
  //     page:1,
  //     totalResults:0,
 
  //       }
        // document.title=`${this.capitalize(props.category)}-News Monkey`;
    // }
const updatenews=async()=>{
      props.setprogress(10);
    
      let url=`https://newsapi.org/v2/top-headlines?&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
       setloading(true);
      let data=await fetch(url);
      props.setprogress(30);
     let parsedata=await data.json();
     props.setprogress(60);
     setarticles(parsedata.articles);
     settotalResults(parsedata.totalResults);
     setloading(false);

     
    props.setprogress(100);

    }
  useEffect(() => {
    document.title=`${capitalize(props.category)}-News Monkey`;
    updatenews();
    // eslint-disable-next-line 
  },[]);
    // async componentDidMount() {
      // pagesize tell how many articles u want to show on a single page
    //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b51ae1843cf7427289412f2a22c2936f&page=1&pageSize=${props.pageSize}`;
    //   this.setState({loading:true});
    //   let data=await fetch(url);
    //  let parsedata=await data.json();
    //  this.setState({
    //   articles:parsedata.articles,
    //   totalResults:parsedata.totalResults,
    //   loading:false,
    // });

    //   this.updatenews();
    
    // }
    // handleprev=async()=>{
//       let url=`https://newsapi.org/v2/top-headlines? country=${props.country}&category=${props.category}&apiKey=b51ae1843cf7427289412f2a22c2936f&page=${this.state.page-1}&pageSize=${props.pageSize}`;
//       this.setState({loading:true});
//       let data=await fetch(url);
//      let parsedata=await data.json();
    
// this.setState({
//   page:this.state.page-1,
//   articles:parsedata.articles,
//   loading:false,
// })
// this.setState({page:this.state.page-1})
// this.updatenews();
//     }

//     handlenext=async()=>{
 
//       console.log("next");
//       let url=`https://newsapi.org/v2/top-headlines? country=${props.country}&category=${props.category}&apiKey=b51ae1843cf7427289412f2a22c2936f&page=${this.state.page+1}&pageSize=${props.pageSize}`;
//       this.setState({loading:true});
//       let data=await fetch(url);
//      let parsedata=await data.json();
    
// this.setState({
//   page:this.state.page+1,
//   articles:parsedata.articles,
//   loading:false,
// })
// this.setState({page:this.state.page+1})
// this.updatenews();

//  }  
 


    // using infinte scrool bar
  const  fetchMoreData = async() => {
      
     
    // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    let url = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;

    setpage(page+1)
      let data=await fetch(url);
     let parsedata=await data.json();
     setarticles(articles.concat(parsedata.articles))
     settotalResults(parsedata.totalResults)
    //  this.setState({
    //   articles:this.state.articles.concat(parsedata.articles),
    //   totalResults:parsedata.totalResults,
    //  })
    };
  
   

    return (
      // <div className='container my-3'>
      //   <h1 className='text-center' style={{margin:'35px 0px'}}>News Monkey-Top {this.capitalize(props.category)} headlines </h1>
      // {this.state.loading&&<Spinner />}
      //    <div className="row">
      //    { !this.state.loading&&this.state.articles.map((element)=>{
      //     // to limit the discription and title we use slice method
      // return <div className="col-md-4" key={element.urlToImage}> <NewsItem title={element.title?element.title.slice(0,40):""}  discription={element.description?element.description.slice(0,88):" "} imageurl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/default/550x309.jpg"} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/></div> 
      //  })}
      //    </div>
      //  <div className="container d-flex justify-content-between ">
      //  <button type="button" disabled={this.state.page<=1} className="btn btn-dark"onClick={this.handleprev} >&larr; Prev</button>
      //  <button  disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark " onClick={this.handlenext} >Next &rarr;</button>
      //  </div>
      // </div>

      // use of infinite scroll bar
      <> 
     <h1 className='text-center' style={{margin:'35px 0px',marginTop:'90px'}}>News Monkey-Top {capitalize(props.category)} headlines </h1>
      {loading&&<Spinner />}
      <InfiniteScroll
        dataLength={ articles.length}
        next={fetchMoreData}
        hasMore={articles.length< totalResults}
        loader={ <Spinner />  }
      > 
      <div className="container">
          <div className="row">
         {articles.map((element,index)=>{
          // to limit the discription and title we use slice method
      return <div className="col-md-4" key={index}> <NewsItem title={element.title?element.title.slice(0,40):""}  discription={element.description?element.description.slice(0,88):" "} imageurl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/default/550x309.jpg"} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/></div> 
       })}
         </div>
         </div>
      </InfiniteScroll>
    </>
    )
  
 }
 
News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general',
  setingprogress:'number',

}
News.propTypes={
  country:PropTypes.string,
  category:PropTypes.string,
  pageSize:PropTypes.number,
}

export default News
 
