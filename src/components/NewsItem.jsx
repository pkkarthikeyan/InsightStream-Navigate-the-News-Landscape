import React from "react";

const NewsItem =(props) => {

    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className="my-3">
        <div
          className="card"
          style={{
            maxWidth: "25rem",
            minHeight: "23rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://www.moroylab.org/wp-content/uploads/2018/05/news-2444778_640-300x181.jpg"
            }
            className="card-img-top"
            alt="..."
            style={{
              height: "170px",
              objectFit: "cover",
              width: "100%",
            }}
          />
          <div className="card-body d-flex flex-column">
        
            <h5 className="card-title">
              {title}...{" "}
              
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                Published at {new Date(date).toLocaleString()}
              </small>
            </p>
          </div>
          <div
            className="card-footer text-start"
            style={{
              backgroundColor: "inherit",
              borderTop: "none",
            }}
          >
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
              style={{
                fontSize: "0.9rem", 
                padding: "6px 12px", 
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
