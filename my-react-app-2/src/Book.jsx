import './Book.css'
export default function Book({ book }) {
  const { id, name, price } = book;
  return (
    <div className='book'>
        <p>ID: {id}
        </p>
      <h3>Book Name: {name}</h3>
      <h3>Price: {price}</h3>
    </div>
  );
}
