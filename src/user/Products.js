import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopItemFetch } from "../fetches/fetching";

const Products = () => {
  // const [items, setItemList] = useState([{item_nm: "Fingers", item_price: 7000, item_pic: "noodles.jpg",  category: "foods", id: "AJSASsadasNBJshA8S98ASD1213"}]);

  const [items, setItemList] = useState([]);

  useEffect(() => {
    const loadItemList = async () => {
      try {
        const itemList = await ShopItemFetch();
        setItemList(itemList);
      } catch(error) {
        console.log(error.message)
      }
    }

    loadItemList();
  }, [])
  
  return (
    <div id='items' className='container-fluid'>
      <section className="container-sm">

        <div className="text-center pt-5">
          <h1 className="fw-bold">Products</h1>
        </div>

        <div className="row m-auto p-5">
          <div className="d-flex align-items-end justify-content-between">
            <h2>All Products</h2>
          </div>
          { items.length>0 && items.map(itm => <ItemCards key={itm.id} item={itm}/>) }
        </div>

      </section>
    </div>
  )
}

function ItemCards(props) {
  const { item_nm, item_price, item_pic, id } = props.item;

  return (
    <div className="col-lg-4 my-2">
      <div className="card shadow-hover">
      <img src={item_pic} alt="stew" className="card-img-top" />
        <div className="card-body d-flex flex-column text-center">
          <h3 className="card-title">{ item_nm }</h3>
          <h5 className="">Rp. { item_price }</h5>
          <Link to={`/products/${ id }`} className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    </div>
  )
}

export default Products;