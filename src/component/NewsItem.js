import React  from "react";
const NewsItem =(props)=> {
  
    let {title,discription,imageurl,newsurl,author,date,source}=props;
    return (
      <div className=" my-3 ">
        <div className="card "  >
        <div style={{
          display:"flex",
          position:"absolute",
          right:'0',
          justifyContent:"flex-end"
      }}>
        <span  className="  badge rounded-pill bg-danger"    >
     {source}
     
  </span>
  </div>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {discription}
            </p>
            {/* {date}-this give the date in ios format to get in GMT form-(Fri, 19 Jan 2024 06:04:00 GMT )make the Date object and the use the following syntax to 
            new Date(date).toGMTString() */}
            <p  className="card-text"><small  className="text-body-secondary">By {!author?"Unkown":author} published on-{new Date(date).toGMTString()}</small></p>
            {/* target load are news to new page */}
            <a href= {newsurl} target="blank" className="btn sm btn-primary">
              Read more 
            </a>
          </div>
        </div>
      </div>
    );
   
}

export default NewsItem;
