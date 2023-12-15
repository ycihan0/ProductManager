const AddProduct = (props) => {
  return (
    <div>
      <button onClick={()=>{props.setIsOpen(true)}}>Add new product</button>
    </div>
  )
}

export default AddProduct
