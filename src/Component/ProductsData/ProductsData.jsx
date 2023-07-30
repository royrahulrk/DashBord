import React from 'react';
import { Col, Row, Card, Typography, Table, Image } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import OrderActivity from './OrderActivity';
import ProductImg from "../img/14.png"
const { Title, Text } = Typography;

const productsData = [
  {
    productId: '#C234',
    product: 'Regular waterproof (24 L) Backpack',
    productImage: '../img/14.png',
    productCost: '$14,500',
    total: '2,977',
    status: 'Available',
  },
  {
    productId: '#C389',
    product: 'Women Pink Heels Sandal',
    productImage: './14.png',
    productCost: '$30,000',
    total: '678',
    status: 'Limited',
  },
  {
    productId: '#C936',
    product: 'Designer Hand Decorative flower Pot',
    productImage: './img/14.png',
    productCost: '$13,200',
    total: '4,922',
    status: 'Available',
  },
  {
    productId: '#C493',
    product: 'Plastic Outdoor Chair',
    productImage: './img/14.png',
    productCost: '$15,100',
    total: '1,234',
    status: 'Limited',
  },
  {
    productId: '#C729',
    product: 'Blck Digital smart watch',
    productImage: './img/14.png',
    productCost: '$5,987',
    total: '4,789',
    status: 'No Stock',
  },

  {
    productId: '#C529',
    product: 'Apple iPhone(Black, 128 GB)',
    productImage: './img/14.png',
    productCost: '$11,987',
    total: '938',
    status: 'Limited',
  },
];

const columns = [
  {
    title: 'Product ID',
    dataIndex: 'productId',
    key: 'productId',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    render: (text, record) => (
      <div className="d-flex">
        <Image src={ProductImg } alt="" width={40} height={40} className="me-3" />
        <span className="my-auto">{text}</span>
      </div>
    ),
  },
  {
    title: 'Product Cost',
    dataIndex: 'productCost',
    key: 'productCost',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
      <span className={`badge bg-primary ${text === 'No Stock' ? 'op-5' : ''}`}>
        {text}
      </span>
    ),
  },
];



const CountryWiseSales = () => {
  return (
    <>
     <div className='country-sale'>
      <Row gutter={[16, 16]} style={{justifyContent:'center',alignItems:"center",width:"100%"}}>
        <Col xs={24} sm={14} md={20} lg={20} xl={14}>
          <Card className="custom-card overflow-hidden">
            <div className="card-header border-bottom-0 d-flex">
              <div>
                <Title level={4}>Products Details</Title>
                <Text type="secondary" style={{ fontSize: "12px", color: "#8f8fb1" }}>
                  The details displayed often include size, color, price, shipping information, reviews, and other relevant information customers may want to know before making a purchase
                </Text>
              </div>
              <div className="card-options float-end">
                <EllipsisOutlined className="tx-17 float-end" />
              </div>
            </div>
            <div className="card-body pt-0">
              <Table
                columns={columns}
                dataSource={productsData}
                bordered
                pagination={false}
                
              />
            </div>
          </Card>
        </Col>
        
          <OrderActivity/>
       
      </Row>
    </div>
    </>
  );
};

export default CountryWiseSales;
