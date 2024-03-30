import React from 'react';
import Nav from '../Components/navbar';
import Post from '../Components/post';

const News = () => {
    var post1 = "Сегодня в актовом зале состоиться концерт, посвящённый дню гранёного стакана. Выступать будет 6 коллективов параллели. Всем приходить!";
    var post2 = "Ну а что тут ещё писать-то?";
    var post3 = "Ребята, на следующей неделе мы проводим конкурс, по названию понятно какой. На забудьте взять с собой карандаши, линейки и плутоний, украденный с ближайшей военной части. Всем успехов!"
    return (
        <center>
        <div>
            НОВОСТИ
            
            <Post title={"Концерт в лицее"} content = {post1}/>

            <Post title={"Отмена урока обществознания"} content = {post2}/>

            <Post title={"Конкурс на лучший самодельный ядерный реактор"} content = {post3}/>
        </div>
        </center>
    );

}; 

export default News