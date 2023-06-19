import React, { useEffect, useState } from 'react';
import './Products.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../components/Card/Card';
import { Sort } from '../../components/Sort/Sort';

import ReactPaginate from 'react-paginate';

export const Products = () => {
  const products = useSelector((state) => state.products.list);

  const [paginated, setPaginated] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const sliced = products?.slice(
      currentPage * itemsPerPage,
      currentPage * itemsPerPage + itemsPerPage
    );
    setPaginated(sliced);
  }, [currentPage, itemsPerPage, products]);

  useEffect(() => {
    setPage(1);
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <section className="products">
      <div className="container">
        <h2 className="title products__title">New collection</h2>
        <Sort />
        <div className="products__wrapper">
          {paginated.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <ReactPaginate
          className="pagination"
          nextLabel={'Next'}
          previousLabel={'Prev'}
          previousClassName={`pagination__nav_button pagination__color_button`}
          nextClassName={`pagination__nav_button pagination__color_button`}
          activeClassName="active"
          pageClassName={`pagination__page_button pagination__color_button`}
          pageLinkClassName="pagination__page_link_button"
          // marginPagesDisplayed={width < 750 ? 1 : 2}
          // pageRangeDisplayed={width < 750 ? 1 : 2}
          forcePage={currentPage}
          initialPage={currentPage}
          pageCount={Math.ceil(products.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};
