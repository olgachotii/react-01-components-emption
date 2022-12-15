import Painting from "./Painting";

export default function PaintingsList({ items }) {
  return (
    <ul>
      {items.map(({ id, url, title, author, price }) => (
        <li key={id}>
          <Painting
            url={url}
            title={title}
            author={author.url}
            tag={author.tag}
            price={price}
          />
        </li>
      ))}
    </ul>
  );
}
