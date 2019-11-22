import React from "react";

import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam, necessitatibus nesciunt consequuntur doloribus qui. Autem hic totam quo quod nobis molestiae expedita beatae ipsa numquam consequuntur recusandae excepturi voluptate animi, id, magni amet accusantium quia tempora vel consectetur, perspiciatis unde. Magni, repudiandae in similique adipisci eligendi quos quidem iusto."
  },
  {
    id: 2,
    title: "Czym jest paradoks",
    author: "Jan Buda",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam, necessitatibus nesciunt consequuntur doloribus qui. Autem hic totam quo quod nobis molestiae expedita beatae ipsa numquam consequuntur recusandae excepturi voluptate animi, id, magni amet accusantium quia tempora vel consectetur, perspiciatis unde. Magni, repudiandae in similique adipisci eligendi quos quidem iusto."
  },
  {
    id: 3,
    title: "Ciemna materia",
    author: "Adam Wolański",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam, necessitatibus nesciunt consequuntur doloribus qui. Autem hic totam quo quod nobis molestiae expedita beatae ipsa numquam consequuntur recusandae excepturi voluptate animi, id, magni amet accusantium quia tempora vel consectetur, perspiciatis unde. Magni, repudiandae in similique adipisci eligendi quos quidem iusto."
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));

  return <div className="home">{artList}</div>;
};

export default HomePage;
