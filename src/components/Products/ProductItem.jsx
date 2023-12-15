import ProductInfo from "./ProductInfo";
import {useState} from "react";
import "./ProductItem.css";
import Counter from "../Counter";
const ProductItem=({product,setProducts,products}) =>{
    const {imageUrl, productName,productPrice}=product;
  
    const [title, setTitle] = useState(productName);
    const clickHandler=()=>{setTitle("Güncellendi")};
    const deleteHandler=()=>{setProducts(products.filter((item)=>item.id!==product.id))};
    return (
    <div className="product-item">
        <div  className="product-image">
            <img src={imageUrl}/>
        </div>
        <div  >
            <ProductInfo>
            <h2>{title}</h2>
            <span>{productPrice}₺</span>
            <br/>
            <Counter productPrice={Number(productPrice)}/>
            <button onClick={clickHandler}>update </button>
            <button onClick={deleteHandler} className="btn-delete">delete </button>
            </ProductInfo>
        </div>
    </div>)
}
export default ProductItem;