import React from 'react';
import Orders from '../../components/order/Orders.component';
import Layout from '../../layout';

const OrderPage = () => {
  return (
    <Layout header='Orders'>
      <Orders />
    </Layout>
  );
};

export default OrderPage;
