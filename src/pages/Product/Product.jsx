import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../storage/actions/productActions';
import './Product.scss';
import { addToCart, deleteFromCart } from '../../storage/actions/cartActions';

export const Product = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.productData);

  const cart = useSelector((state) => state.cart.cart);

  const currentProduct = cart.find((pr) => pr.id === product.id);

  const [quantity, setQuantity] = useState(currentProduct?.quantity);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setQuantity((prevQuantity) => (prevQuantity ? prevQuantity + 1 : 1));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(deleteFromCart(id));
    setQuantity((prevQuantity) =>
      prevQuantity ? prevQuantity - 1 : undefined
    );
  };

  useEffect(() => {
    setQuantity(currentProduct?.quantity);
  }, [currentProduct]);

  const { productId } = useParams();

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  return (
    <section className="product">
      <div className="container">
        <div className="product__wrapper">
          <p className="title product_page__title">{product?.title}</p>
          <div className="product__image_wrapper">
            <img src={product?.image} alt="Product" />
          </div>
          <p className="product__info">{product?.description}</p>
          <div className="product__buttons">
            <p className="product__price">{product?.price}$</p>
            {currentProduct?.quantity !== undefined ? (
              <div className="product__buttons_cart">
                <button
                  className="product__button_cart"
                  onClick={() => handleRemoveFromCart(product?.id)}
                >
                  -
                </button>
                <p className="product__price">
                  <span>{quantity}</span>
                </p>
                <button
                  className="product__button_cart"
                  onClick={() => handleAddToCart(product)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="sort__button product_card__button cart__checkout_button"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
            )}
          </div>
          <div className="product__addition">
            <span className="product__badge">{product?.category}</span>
            <span className="product__rate">{product?.rating?.rate}★</span>
          </div>
        </div>
      </div>
    </section>
  );
};
