const ProductInfo =(props) =>{
    return <div className="product-info">
        <span className="ad">reklamlar</span>
        {props.children}
    </div>
}
export default ProductInfo;