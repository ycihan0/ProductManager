import ProductItem from "./ProductItem";
import "./Products.css";
import { productData } from "../../productData";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";
const Products = () => {
    const [products, setProducts]=useState(productData);

    return (
        <div className="product-wrapper">
            <NewProduct setProducts={setProducts} products={products}  />
            <h1>Products</h1>
            <div className="products">
                {products.length===0 ?(<p>Hiç ürün yok</p>) : (products.map((product) => {
                    return <ProductItem key={product.id} product={product} products={products} setProducts={setProducts}/>;
                }))}
            </div>
        </div>
    );
};
export default Products;
