import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Categorias = () =>{
    const categories = [
        {id:'as1', url: '/', text: 'Todos los productos'},
        {id:'as2', url: '/category/Zapatillas', text: 'Zapatillas'},
        {id:'as3', url: '/category/Remeras', text: 'Remeras'},
        {id:'as4', url: '/category/Lentes', text: 'Lentes'},
    ]
    return(
        <>
        <div className="cont-categorias mt-4">
            {categories.map((cat) =>{
                 return(
                     <div className="links-categorias" key={cat.id}>
                        <Button as={Link} to={`${cat.url}`} variant="cat">{cat.text}</Button>
                     </div>
                )
            })}
        </div>
      </>
    )
}

export default Categorias;