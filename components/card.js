import React from "react";
import Link from "next/link";
import NextImage from "./image";
import Image from "next/image";

const Card = ({ article }) => {
  const s = ()=>{
    console.log('hellllo'+article.attributes.image.data.attributes.url)
  }
  
  return (
    <Link href={`/article/${article.attributes.slug}`} className="uk-link-reset">
      {/* <a className="uk-link-reset"> */}
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            {/* <NextImage image={article.attributes.image} /> */}
          <NextImage image={article?.attributes?.image} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.attributes.category.data.attributes.name}
            </p>
            <p id="title" className="uk-text-large"
        
            >
              {article.attributes.title}
            </p>  
          </div>
        </div>
      {/* </a> */}
    </Link>
  );
};

export default Card;