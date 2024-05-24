"use client";
import React from 'react'
import { useState, useEffect } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(3);
  useEffect(() => {
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/general/in.json')
    .then((res)=>res.json()).then((data)=> setNews(data.articles));
  }, []);
  return (
    <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 '>
      <h4 className='font-bold text-xl px-4'>what happening</h4>
      {news.slice(0, articleNum).map((article)=>(
        <div key={article.url}>
          <a href={article.url} target='_blank'>
              <div className='flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transistion duration-200 '>
                <div>
                   <h6 className='text-sm font-bold'>{article.title}</h6>
                   <p className='text-xs font-medium text-gray-500'>{article.source.name}</p>
                </div>
                <img src={article.urlToImage} width={70} className='rounded-xl'/>
              </div>
          </a>
        </div>
      ))}
      <button
        onClick={()=>setArticleNum(articleNum+3)}
        className="w-full bg-blue-400 text-white rounded-full"
        >
        Load More
      </button>
    </div>
  )
}

export default News
