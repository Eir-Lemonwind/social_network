import React, { useEffect, useState } from 'react';
import Nav from '../Components/navbar';
import Post from '../Components/post';
import { getPosts } from '../api/posts';

const News = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then((value: any) => {
            setPosts(value)
        })
    }, [])

    // var post1 = "Сегодня в актовом зале состоиться концерт, посвящённый дню гранёного стакана. Выступать будет 6 коллективов параллели. Всем приходить!";
    // var post2 = "Ну а что тут ещё писать-то?";
    // var post3 = "Ребята, на следующей неделе мы проводим конкурс, по названию понятно какой. На забудьте взять с собой карандаши, линейки и плутоний, украденный с ближайшей военной части. Всем успехов!"
    return (
        <center>
            
        <div>
            <p style={{fontSize: "35px", fontWeight: 700}}> НОВОСТИ </p>
            
            {posts.map((post: any) =>
                <Post title={post.title} content={post.text}/>
            )}
        </div>
        </center>
    );

}; 

export default News