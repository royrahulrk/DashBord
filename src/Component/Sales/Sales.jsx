import { Row, Col, Card, Typography, List } from 'antd';
import { PieChartOutlined, ShoppingCartOutlined, BarChartOutlined, WalletOutlined, EyeOutlined } from '@ant-design/icons';
import CardImg from "../img/14.png"
const { Title, Paragraph } = Typography;

const SalesActivity = () => {
  return (
    <Row gutter={[16, 16]} justify="center" style={{marginTop:"2rem",width:"100%"}}>
    <Col xs={24} sm={24} md={20} lg={10} xl={10}>
      <Card>
        <div className='card-header'>
          <Title level={4}>Sales Activity</Title>
          <Paragraph type="secondary" className='secondary'>
            Sales activities are the tactics that salespeople use to achieve their goals and objectives.
          </Paragraph>
        </div>
        <List
          dataSource={[
            { icon: <PieChartOutlined />, title: 'Total Products', time: '3 days ago', description: '1.3k New Products' },
            { icon: <ShoppingCartOutlined />, title: 'Total Sales', time: '35 mins ago', description: '1k New Sales' },
            { icon: <BarChartOutlined />, title: 'Total Revenue', time: '50 mins ago', description: '23.5K New Revenue' },
            { icon: <WalletOutlined />, title: 'Total Profit', time: '1 hour ago', description: '3k New profit' },
            { icon: <EyeOutlined />, title: 'Customer Visits', time: '1 day ago', description: '15% increased' },
          ]}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                style={{ alignItems: "center" }}
                avatar={item.icon}
                title={<span className="font-weight-semibold mb-4 tx-14">{item.title}</span>}
                description={<p className="mb-0 text-muted tx-12" style={{ fontSize: '12px', color: "#8f8fb1" }}>{item.description}</p>}
              />

              <p className="float-end tx-11 text-muted" style={{ fontSize: '11px', color: "#8f8fb1" }}>{item.time}</p>
            </List.Item>
          )}
        />
      </Card>
    </Col>
    <Col xs={24} sm={24} md={20} lg={10} xl={10}>
      <Card>
        <div className='card-header'>
          <Title level={4}>Top Products</Title>
          <Paragraph type="secondary" className='secondary'>
            Top Trending Products to Sell Online At Your Ecommerce & Dropshipping Store.
          </Paragraph>
        </div>
        <List
          dataSource={[
            { img: CardImg, name: 'College Bag', category: 'Fashion', price: '$990.00', sold: '10 Sold' },
            { img: CardImg, name: 'Smartwatch', category: 'Electronics', price: '$990.00', sold: '10 Sold' },
            { img: CardImg, name: 'Chair', category: 'Furniture', price: '$990.00', sold: '10 Sold' },
            { img: CardImg, name: 'Flowers Pot', category: 'Gardening', price: '$990.00', sold: '10 Sold' },
            { img: CardImg, name: 'iPhone Mobile', category: 'Electronics', price: '$990.00', sold: '10 Sold' },
          ]}
          renderItem={item => (
            <List.Item style={{ lineHeight: '2.4' }}>
              <div className="product-item">
                <div className="product-img">
                  <img src={CardImg} alt="" className='list-img' />
                  <div className="product-info">
                    <div className="product-name" style={{ fontWeight: "500" }}>{item.name}</div>
                    <div className="price" style={{ color: "#8094ae", fontSize: "0.8125rem" }}>{item.category}</div>
                  </div>
                </div>

                <div className="product-amount">
                  <div className="product-price" style={{ fontWeight: "600" }}>{item.price}</div>
                  <div className="items-sold" style={{ color: "#8094ae", fontSize: "11px" }}>{item.sold}</div>
                </div>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </Col>
  </Row>
  );
};

export default SalesActivity;
