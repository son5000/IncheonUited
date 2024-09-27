import data from '../../data.json';

const  products = data.products;

export default function Product() {

return (
  <ul>
    {products.map((el)=>{
      return(
        <li key={el.id} herf="###">
          <a href="###">
            <img src={el.image} alt={el.title} />
            <p>{el.title}</p>
          </a>
        </li>
      )
    })}
  </ul>
)
}
