import React from 'react';
import { Col, Card, Typography, List, Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;

const orderActivityData = [
  {
    title: 'Order Picking',
    value: '3,876',
    percent: 3,
    status: 'last month',
    icon: <ArrowDownOutlined style={{ color: 'green' }} />,
    timeAgo: '5 days ago',
  },
  {
    title: 'Storage',
    value: '2,178',
    percent: 16,
    status: 'last month',
    icon: <ArrowDownOutlined style={{ color: 'red' }} />,
    timeAgo: '2 days ago',
  },
  {
    title: 'Shipping',
    value: '1,367',
    percent: 6,
    status: 'last month',
    icon: <ArrowUpOutlined style={{ color: 'green' }} />,
    timeAgo: '1 day ago',
  },
  {
    title: 'Receiving',
    value: '678',
    percent: 25,
    status: 'last month',
    icon: <ArrowDownOutlined style={{ color: 'red' }} />,
    timeAgo: '10 days ago',
  },
  {
    title: 'Other',
    value: '5,678',
    percent: 16,
    status: 'last month',
    icon: <ArrowUpOutlined style={{ color: 'green' }} />,
    timeAgo: '5 days ago',
  },
];

const OrderActivity = () => {
  return (
    <Col xl={6} md={20} sm={6} lg={20}>
      <Card className="custom-card">
        <div className="card-header border-bottom-0">
          <div>
            <Title level={4} >Order Activity</Title>
            <Text type="secondary" style={{fontSize:"12px",color:"#8f8fb1"}}>
              Ordering Activity means an activity that is authorized to place orders or establish blanket purchase agreements.
            </Text>
          </div>
        </div>
        <div className="card-body pt-1">
          <div className="border">
            <List
              dataSource={orderActivityData}
              renderItem={(item) => (
                <List.Item className="list-group-item-action flex-column align-items-start border-0">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1 font-weight-semibold" style={{fontWeight:"500",fontSize:"0.875rem",marginBottom:"0",marginTop: "0px"}}>{item.title}</h6>
                    
                    <span className="text-muted" >
                      {item.icon}
                      {` ${item.percent}% ${item.status}`}
                    </span>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                  <h6 className="mb-0 font-weight-bold tx-15">{item.value}</h6>
                    <span className="text-muted tx-11">{item.timeAgo}</span>
                  </div>
                </List.Item>
              )}
              className="projects-list pt-0 pb-0 ps-0 pe-0"
            />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default OrderActivity;
