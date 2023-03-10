import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 } from 'uuid';
import { ItemUpdate, ShopItemFetch, storage } from "../fetches/fetching";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Footer from "../parts/Footer";

const EditProduct = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [itemName, setItemName] = useState(`Loading...`);
  const [desc, setDesc] = useState(`Loading...`);
  const [price, setPrice] = useState(`Loading...`);
  const [category, setCategory] = useState(`Loading...`);
  const [imageUpload, setImageUpload] = useState(null);

  useEffect(() => {
    const loadItemList = async () => {
      try {
        const itemList = await ShopItemFetch(id);
        
        // console.log(itemList);
        setItemName(`${itemList[0].item_nm}`);
        setDesc(`${itemList[0].item_desc}`);
        setPrice(`${itemList[0].item_price}`);
        setCategory(`${itemList[0].category}`);
      } catch(error) {
        console.log(error.message)
      }
    }
    loadItemList();
  }, []);

  const sendItem = async (e) => {
    e.preventDefault();
    if (imageUpload == null) return;
    
    var imageName = imageUpload.name + v4();
    let imageRef = ref(storage, `images/${imageName}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        ItemUpdate(id, itemName, desc, price, category, url, imageName);
      });
    });
  
    setItemName('');
    setDesc('');
    setPrice('');
    setCategory('');
    setImageUpload(null);
    navigate('/admin/products');
  }

  return (
      <div className="col-10 container-fluid p-0">
        <form onSubmit={sendItem} className="bg-light m-auto mt-5 p-5 rounded-4 border border-dark-subtle" style={{ maxWidth: "500px" }}>
          <h3 className="my-5 fw-bold">Add Item</h3>
          <div className="mb-4">
            <label for="name" className="form-label fw-bold">Item Name</label>
            <input required value={itemName} onChange={(e) => setItemName(e.target.value)} type="text" className="w-100 input-css" id="name" />
          </div>
          <div className="mb-4">
            <label for="price" className="form-label fw-bold">Item Price</label>
            <input required value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="w-100 input-css" id="username" />
          </div>
          <div className="mb-4">
            <label for="desc" className="form-label fw-bold">Item Description</label>
            <input required value={desc} onChange={(e) => setDesc(e.target.value)} type="text" className="w-100 input-css" id="desc" />
          </div>
          <div className="mb-4">
            <label for="category" className="form-label fw-bold d-block">Item Category</label>
            <select required className="form-select" value={category} onChange={(e) => setCategory(e.target.value)} style={{border: "2px solid #000"}}>
              <option value="foods">Foods</option>
              <option value="beverages">Beverages</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div>
            <label for="picture" className="d-flex form-label fw-bold">Picture</label>
            <input required type='file' onChange={(event) => { setImageUpload(event.target.files[0]) }} id='picture' name='filename' />
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary float-left">Add Product</button>
            </div>
          </div>
        </form>
        <Footer />
      </div>
  )
}

export default EditProduct;