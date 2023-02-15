import { useEffect, useState } from "react";
import { CartItemDelete, CartItems, OrderItems } from "../fetches/fetching";

const Cart = () => {
  const userId = sessionStorage.getItem("id");
  const [cart, setCartList] = useState([]);
  var total = 0;
  var quantity = 0;
  var itemNames = [];

  useEffect(() => {
    const loadCartList = async () => {
      try {
        const itemList = await CartItems(userId);
        setCartList(itemList);
      } catch (error) {
        console.log(error.message)
      }
    }

    loadCartList();
  }, []);

  if(cart.length > 0) {
    cart.forEach(item => (total += (parseInt(item.price) * parseInt(item.quantity)), quantity += parseInt(item.quantity), itemNames.push(item.p_name)));
  }

  const deleteCartItem = (itemId) => {
    CartItemDelete(userId, itemId);
    window.location.reload();
  }

  const orderAll = () => {
    OrderItems(userId, itemNames, quantity, total);
  }

  return (
    <div id='carts' className='container-fluid d-flex flex-column justify-content-center'>
      <section className="container-sm" style={{ maxWidth: "700px" }}>

        <div className="pt-5">
          <h1 className="fw-bold">Cart</h1>
        </div>

        {
          cart.length > 0 ? 
            <table className="table mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => <CartRows key={item.id} prop={item} index={index + 1} delete={deleteCartItem}/>)}
              <tr>
                <th colSpan={3}>Total: </th>
                <td>{quantity}</td>
                <td>Rp. {total}</td>
                <td></td>
              </tr>
            </tbody>
          </table> : <h5>You haven't ordered anything</h5>
        }
        {cart.length > 0 ? <button className="btn btn-primary" onClick={orderAll()}>Buy All</button> : undefined}
        
      </section>
    </div>
  )
}

function CartRows(props) {
  const { p_name, price, quantity, id } = props.prop;
  const index = props.index;

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{p_name}</td>
      <td>Rp. {price}</td>
      <td>{quantity}</td>
      <td>Rp. {(price * quantity)}</td>
      <td>
        <button className="btn btn-danger" onClick={() => props.delete(id)}>Delete</button>
      </td>
    </tr>
  )
}

export default Cart;