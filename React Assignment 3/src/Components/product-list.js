import "../css/product-list.css";
const ProductList = (props) =>{
    return (
        <>
            <div className="product-container">
                <div>
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check"/>
                </div>
                <div className="product-image">
                    <img src={props.productData.image} alt="imageAvatar" />
                </div>
                <div>
                    <div className="product-key">
                        {props.productData.name}
                    </div>
                    <div className="product-value">
                        {props.productData.description}
                    </div>
                </div>
                <div>
                    <i className="fa fa-angle-right"></i>
                </div>
            </div>
        </>
    )
}
export default ProductList;