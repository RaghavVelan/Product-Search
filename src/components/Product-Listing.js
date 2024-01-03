

function ProductListing({productDetails}) {
    console.log(productDetails)
  return (
    <div className="productListing">
      {
        productDetails.map((product) => {
            return(
                <div className="card-container">
                    <div className="product-card">
                      <div className="product-image">
                        <img src={product.product_photos} alt={product.product_title} />
                      </div>
                      <div className="product-details">
                        <h2 className="product-title">{product.product_title}</h2>
                        <p className="product-price"> <span className="original-price">{product.offer.original_price} </span> {product.offer.price}</p>
                        <p className="product-description">{product.offer.store_name} <br /> Product Condition: {product.offer.product_condition}</p>
                        <div className="buttons">
                          <button className="add-to-cart"><a href={product.offer.offer_page_url} target="_blank">Buy Now</a></button>
                        </div>
                      </div>
                    </div>
                </div>
            )
        })
      }
    </div>
  );
}

export default ProductListing;
