import { useEffect, useState } from "react";
import { CartItems } from "../fetches/fetching";

const Cart = () => {
  const userId = sessionStorage.getItem("id");
  const [cart, setCartList] = useState([]);
  var total = 0;
  var quantity = 0;

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

  // console.log(cart)

  // if(cart.length == 0) {
  //   setCartList([]);
  // }
  if(cart.length > 0) {
    cart.forEach(item => (total += (parseInt(item.price) * parseInt(item.quantity)), quantity += parseInt(item.quantity)));
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
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => <CartRows key={item.id} prop={item} index={index + 1} />)}
              <tr>
                <th colSpan={3}>Total: </th>
                <td>{quantity}</td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table> : undefined
        }
        
      </section>
    </div>
  )
}

function CartRows(props) {
  const { p_name, price, quantity } = props.prop;
  const index = props.index;

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{p_name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{(price * quantity)}</td>
    </tr>
  )
}

export default Cart;