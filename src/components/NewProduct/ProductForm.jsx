import "./ProductForm.css";
import { useState } from "react";
const ProductForm = (props) => {
   const [productName,setProductName]=useState("");
   const [productPrice,setProducPrice]=useState("");
   const [imageUrl,setImageUrl]=useState("");

  // const [productData, setProductData] = useState(
  //   {
  //     productName: "",
  //     productPrice: "",
  //     imageUrl: ""
  //   });

   const titleChangeHandler=(event)=>{setProductName(event.target.value)}
   const priceChangeHandler=(event)=>{setProducPrice(event.target.value)}
   const imageChangeHandler=(event)=>{setImageUrl(event.target.value)}

  // const titleChangeHandler = (event) => {
  //    setProductName(event.target.value);
  //    setProductData({
  //      ...productData,
  //      prductName: event.target.value
  //    })
  //   setProductData((prevState)=>{return{...prevState,productName:event.target.value}})
  // }
  // const priceChangeHandler = (event) => {
   
  //   setProductData((prevState)=>{return{...prevState,productData:event.target.value}})
  // }
  // const imageChangeHandler = (event) => {
   
  //   setProductData((prevState)=>{return{...prevState,imageUrl:event.target.value}})
  // }

  const submitHandler =(event)=>{
    event.preventDefault() //Otomotaik sayfayı güncellemeyi engelle
    const newProductData={
      id:props.products.length+1,
      productName,
      productPrice,
      imageUrl,
    }
    props.onSaveProduct(newProductData)
    setProductName("");
    setProducPrice("");
    setImageUrl(""); //her gönderimden sonra kutuyu boşalt
    
  }
  return (
    <form className="product-form" onSubmit={submitHandler}>
      
        <div className="product-form-input">
          <label>Product Name</label>
          <input 
          type="text" 
          placeholder="please enter a name..." 
          onChange={titleChangeHandler}
          value={productName}
          ></input>
        </div>
        <div className="product-form-input">
          <label>Product Price</label>
          <input 
          type="number" 
          placeholder="please enter price..." 
          onChange={priceChangeHandler}
          value={productPrice}
          ></input>
        </div>
        <div className="product-form-input">
          <label>Product Image</label>
          <input 
          type="text" 
          placeholder="please enter image..." 
          onChange={imageChangeHandler}
          value={imageUrl}
          ></input>
        </div>
        <div className="form-buttons">
        <button className="product-form-button" >add product</button>
        <button className="product-form-button-cancel" type="button" onClick={()=>props.setIsOpen(false)}>Close</button>
      
        </div>
    </form>
  );
};

export default ProductForm;
