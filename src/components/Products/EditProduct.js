import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { postRequest } from '../../api';
import { toast } from 'react-toastify';
import { updateProduct } from './producAction';

export const EditProduct = ({ history }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const data = history.location.state;

  useEffect(() => {
    setDefaultData();
  }, []);

  const setDefaultData = () => {
    setName(data.product.name);
    setPrice(data.product.price);
  };

  function validateForm() {
    return name.length > 0 && price > 0;
  }

  const handleSubmit = async event => {
    event.preventDefault();
    let senddata = {
      name,
      price,
      id: data.product._id,
    };
    updateProduct(senddata).then(res => {
      if (res.data.status == 200) {
        toast.success('Product Updated');
        history.push('/products');
      }
    })
  };

  return (
    <>
      <div className="container mt-5">
        <Form style={{ width: '50vw' }} onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
