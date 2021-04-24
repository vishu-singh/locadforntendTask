import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, DeleteProduct } from './producAction';
import SampleImage from '../../assets/sampleimage.jpeg';
import { toast } from 'react-toastify';
export const ProductListing = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  let products = useSelector(state => state.ProductReducer.products);

  const handleEdit = product => {
    props.history.push({
      pathname: `/products/edit/${product._id}`,
      state: { product },
    });
  };

  const handleDelete = product => {
    let obj = {
      id: product._id,
    };
    DeleteProduct(obj).then(res => {
      if (res.data.status == 200) {
        toast.dark('Product Deleted');
        dispatch(getProducts());
      }
    });
  };

  const showProducts = () => {
    if (products.length) {
      return products.map(item => {
        return (
          <div className="col-lg-3 col-sm-6 col-md-6 mt-3">
            <div className="card" style={{ width: '18rem' }}>
              <img
                className="card-img-top"
                src={SampleImage}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6>Rs {item.price}</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div
                  className="btn btn-primary"
                  onClick={() => handleEdit(item)}
                >
                  <i class="fas fa-pencil-alt"> Edit</i>
                </div>
                <div
                  className="btn btn-danger ml-2"
                  onClick={() => handleDelete(item)}
                >
                  <i class="fas fa-trash"> Delete</i>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <>No products to display</>;
    }
  };

  const handleRouteForAdd = () => {
    props.history.push({
      pathname: `/products/add`,
    });
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row  ">
          <div
            className="btn btn-success ml-auto mr-5"
            onClick={handleRouteForAdd}
          >
            <i class="fas fa-plus-circle"> Add New </i>
          </div>
        </div>

        <div className="row p-5 ">{showProducts()}</div>
      </div>
    </>
  );
};
