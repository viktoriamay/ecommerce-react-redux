import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../storage/actions/productActions';
import './Product.scss';

export const Product = () => {
  const product = useSelector((state) => state.product.productData);

  const dispatch = useDispatch();

  const { productId } = useParams();

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  return (
    <section className="product">
      <div className="container">
        <div className="product__wrapper">
          <div className="product__image_wrapper">
            <img src={product?.image} alt="Product" />
          </div>
          <div className="product__info_wrapper">
            <p className="title">{product?.title}</p>
            <p className="product__info">{product?.description}</p>
            <div className="product__buttons">
              <p className="product__price">{product?.price}$</p>
              {// ? 
                <div className="product__buttons_cart">
                <button className="product__button_cart">-</button>
                {'quantity'}
                <button className="product__button_cart">+</button>
              </div>
              // : <button className='sort__button product_card__button cart__checkout_button'>Add to cart</button>
              }
            </div>
            <div className="product__addition">
              <span className="product__badge">{product?.category}</span>
              <span className="product__rate">{product?.rating?.rate}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
