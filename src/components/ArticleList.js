import React from "react";
import Article from "./Article";

function ArticleList({posts}) {

    const eachPost = posts.map((post) => {
        console.log(post)
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />;
    });

    return <main>{eachPost}</main>

};

export default ArticleList;