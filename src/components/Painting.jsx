import React from "react";

function Painting({ url, title, author, tag, price }) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={author}>{tag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

export default Painting;
