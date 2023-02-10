import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddToCart, ShopItemFetch } from "../fetches/fetching";

const Detail = () => {
  const userId = sessionStorage.getItem("id");
  let navigate = useNavigate();
  const { name } = useParams();
  const [item, setItemList] = useState([]);
  const [quantity, setQuantity] = useState(0);

  // if(item.length>0) {
  //   console.log(item[0]);
  // }

  useEffect(() => {
    const loadItemList = async () => {
      try {
        const itemList = await ShopItemFetch(name);
        setItemList(itemList);
      } catch(error) {
        console.log(error.message)
      }
    }
    loadItemList();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    AddToCart(item[0].item_nm, item[0].item_price, quantity, userId);
    setQuantity(0);
    navigate('/cart');
  }

  return (
    <div>
      <section id="detail" className="container-sm py-5">
        <div className="row m-auto p-5" style={{ textAlign: 'justify' }}>
          <div className="col-lg-5 order-lg-1 d-flex justify-content-center justify-content-lg-end mb-4 mb-lg-0">
            <div className="w-full h-full">
              <img className="rounded-3 float-start img-fluid" width="1000" height="1000" src={item.length>0 ? item[0].item_pic : undefined} alt="stew" />
            </div>
          </div>
          <div className="col-lg-7 order-lg-2 d-flex flex-column">
            <h3>{ item.length > 0 && item[0].item_nm }</h3>
            <h5>{ item.length > 0 && item[0].item_price }</h5>
            <p>
              { item.length > 0 && item[0].item_desc }
            </p>
            <div className="input-group mt-3">
              <input className="px-3" value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" id="quantity" name="quantity" min="1" max="5"></input>
              <button className="btn btn-primary" type="button" id="button-addon2" onClick={handleAdd}>Add to cart</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Detail;
