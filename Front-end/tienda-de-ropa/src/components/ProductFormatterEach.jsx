import React from "react";
import Button from "react-bootstrap/esm/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "react-use-cart";

const ProductFormatterEach = (props) => {
  
  const { addItem } = useCart();
  const notify = () => toast.success('👍🏻Product has been added!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

  return (
    <div className="ProductInfo" key={props.index}>
      <img
        src={props.element.image}
        alt="ProductImage"
        className="imageProduct"
      />
      <div className="textProductInfo">
        <h5>{props.element.name}</h5>
        <p>${props.element.price}</p>
        <Button
          variant="outline-info"
          onClick={() => {
            addItem(props.element);
            notify();
          }}
        >
          Add to cart!
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ProductFormatterEach;
