import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopItemFetch } from "../fetches/fetching";

const Home = () => {
  const [items, setItemList] = useState([]);
  // const [items, setItemList] = useState([{item_nm: "Fingers", item_price: 7000, item_pic: "noodles.jpg",  category: "foods", id: "AJSASsadasNBJshA8S98ASD1213"}]);

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
  
  // if(items.length>0) {
  //   console.log(items);
  // }

  return (
    <div id='home' className='container-fluid'>
      <section id="welcome" className="bg-success d-flex align-items-center justify-content-center">
        <div className="justify-content-center flex-column">
          <div className="row text-center text-light m-auto py-5 px-5 justify-content-center max">
            <h1 className="fw-bold" style={{ fontSize: "6rem", fontFamily: "Josefin Sans" }}>AxiMart</h1>
            <br />
            <p  style={{ fontSize: "1.5rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam vitae nisl mattis, auctor dui sit amet, tristique mauris.
            </p>
          </div>
        </div>
      </section>

      <section id="second" className="container-sm pb-5">
        <div className="text-center pt-5">
          <h1 className="fw-bold">Products</h1>
        </div>

        <div className="row m-auto p-5">
          <div className="d-flex align-items-end justify-content-between">
            <h2>Food</h2>
            <Link className="mb-2" to="products">Look for more...</Link>
          </div>
          {items.length>0 && items
          .filter((itm) => itm.category === "foods")
          .map((itm) =>  <ItemCards key={itm.id} item={itm}/>)
          }
        </div>
        <div className="row m-auto p-5">
          <div className="d-flex align-items-end justify-content-between">
            <h2>Beverages</h2>
            <Link className="mb-2" to="products">Look for more...</Link>
          </div>
          {items.length>0 && items
          .filter((itm) => itm.category === "beverages")
          .map((itm) =>  <ItemCards key={itm.id} item={itm}/>)
          }
        </div>
        <div className="row m-auto p-5">
          <div className="d-flex align-items-end justify-content-between">
            <h2>Others</h2>
            <Link className="mb-2" to="products">Look for more...</Link>
          </div>
          {items.length>0 && items
          .filter((itm) => itm.category === "others")
          .map((itm) =>  <ItemCards key={itm.id} item={itm}/>)
          }
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
          <Link to={`products/${ id }`} className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;