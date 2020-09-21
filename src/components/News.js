import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';
import NewsArticle from './NewsArticle';

function News() {

    const { data } = useContext(NewsContext);

    return (
        <>
            <h1 className="header__title">News App </h1>
            <div className="all__news">

                {data ?
                    data.articles.map(news =>
                        <NewsArticle data={news} key={news.url} />
                    ) : "Loading..."}

            </div>
        </>
    )
}

export default News
