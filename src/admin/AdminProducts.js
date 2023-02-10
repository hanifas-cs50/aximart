import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ItemDelete, ShopItemFetch } from "../fetches/fetching";
import Topbar from "../parts/AdminTop";
import Footer from "../parts/Footer";

const AdminProducts = () => {
  const [items, setItemList] = useState([]);
  // const [items, setItemList] = useState([{item_nm: "Fingers", item_price: 7000, category: "Foods", id: "ki1RD9YP1xZVM3RkvI7V"}]);

  useEffect(() => {
    const loadItemList = async () => {
      try {
        const itemList = await ShopItemFetch();
        setItemList(itemList);
      } catch (error) {
        console.log(error.message)
      }
    }

    loadItemList();
  }, [])

  const deleteItem = (id) => {
    ItemDelete(id);
  }

  return (
    <div className="col-10 container-fluid p-0 d-flex flex-column align-content-between">
      <Topbar />

      <section className="container-sm table-responsive-xxl p-5 mt-5">
        <div className="d-flex justify-content-between mt-2">
          <h3 className="fw-bold">Products</h3>
          <Link className="btn btn-success align-content-center" to="/admin/addProduct">Add Product</Link>
        </div>

        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Item Price</th>
              <th scope="col">Category</th>
              <th colSpan={2} scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? items.map((item, index) => <ItemRows key={item.id} prop={item} index={index + 1} delete={deleteItem}/>) : undefined}
          </tbody>
        </table>
      </section>

      <Footer />
    </div>
  )
}

function ItemRows(props) {
  const { item_nm, item_price, category, id } = props.prop;
  const index = props.index;

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{item_nm}</td>
      <td>{item_price}</td>
      <td>{category}</td>
      <td><button className="btn btn-danger" onClick={() => props.delete(id)}>Delete</button></td>
      <td><Link to={`/admin/products/${ id }`} className="btn btn-success">Update</Link></td>
    </tr>
  )
}

export default AdminProducts;