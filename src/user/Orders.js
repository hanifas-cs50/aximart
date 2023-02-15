import { useEffect, useState } from 'react';
import { TransFetch } from '../fetches/fetching';

const Transaction = () => {
  const userId = sessionStorage.getItem('id');
  const [trans, setTransList] = useState([]);

  useEffect(() => {
    const loadTransList = async () => {
      try {
        const transList = await TransFetch(userId);
        setTransList(transList);
      } catch (error) {
        console.log(error.message)
      }
    }

    loadTransList();
  }, []);

  return (
    <div id='carts' className='container-fluid d-flex flex-column justify-content-center'>
      <section className='container-sm' style={{ maxWidth: '700px' }}>
        <div className='pt-5'>
          <h1 className='fw-bold'>Transaction</h1>
        </div>
        {
          trans.length > 0 ? 
            <table className='table mt-5'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Product Name</th>
                <th scope='col'>Product Price</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Price</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {trans.map((item, index) => <CartRows key={item.id} prop={item} index={index + 1} delete={deleteCartItem}/>)}
              <tr>
                <th colSpan={3}>Total: </th>
                <td>{quantity}</td>
                <td>Rp. {total}</td>
                <td></td>
              </tr>
            </tbody>
          </table> : <h5>You bought anything yet</h5>
        }
        {trans.length > 0 ? <button className='btn btn-primary' onClick={orderAll()}>Buy All</button> : undefined}
        
      </section>
    </div>
  )
}

function CartRows(props) {
  const { p_name, price, quantity, id } = props.prop;
  const index = props.index;

  return (
    <tr>
      <th scope='row'>{index}</th>
      <td>{p_name}</td>
      <td>Rp. {price}</td>
      <td>{quantity}</td>
      <td>Rp. {(price * quantity)}</td>
      <td>
        <button className='btn btn-danger' onClick={() => props.delete(id)}>Delete</button>
      </td>
    </tr>
  )
}

export default Transaction;