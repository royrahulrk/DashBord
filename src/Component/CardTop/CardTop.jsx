import { Card, Space,Row,Col } from "antd";
import {
  UsergroupDeleteOutlined,
  CodeSandboxCircleFilled,
  LineChartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const MyComponent = () => {
  return (
    <>
      <Row gutter={[16, 16]} style={{ paddingTop: '3rem',marginLeft:"0px",marginRight:"0px" }} justify="center" className="card-section-top" >
        <Col xs={24} sm={12} md={12} lg={12} xl={5}>
          <Card
            title="New Users"
            bordered={false}
            style={{ width: '100%' }}
          >
            <Space direction="horizontal" className="card-space">
              <Space direction="vertical">
                <p className="card-icon">
                  <UsergroupDeleteOutlined />
                </p>
                <p className="card-num2">Monthly users</p>
              </Space>
              <Space direction="vertical">
                <p className="card-num">3,672</p>
                <p className="card-num2">50%</p>
              </Space>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={5}>
          <Card
            title="Total Tax"
            bordered={false}
            style={{ width: '100%' }}
          >
            <Space direction="horizontal" className="card-space">
              <Space direction="vertical">
                <p className="card-icon">
                  <CodeSandboxCircleFilled />
                </p>
                <p className="card-num2">Monthly Income</p>
              </Space>
              <Space direction="vertical">
                <p className="card-num">$89,265</p>
                <p className="card-num2">$7,893</p>
              </Space>

            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={5}>
          <Card
            title="Total Profit"
            bordered={false}
            style={{ width: '100%' }}
          >
            <Space direction="horizontal" className="card-space">
              <Space direction="vertical">
                <p className="card-icon">
                  <LineChartOutlined />
                </p>
                <p className="card-num2">Monthly Profit</p>
              </Space>
              <Space direction="vertical">
                <p className="card-num">$23,987</p>
                <p className="card-num2">$4,678</p>
              </Space>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={5}>
          <Card
            title="Card title"
            bordered={false}
            style={{ width: '100%' }}
          >
            <Space direction="horizontal" className="card-space">
              <Space direction="vertical">
                <p className="card-icon">
                  <ShoppingCartOutlined />
                </p>
                <p className="card-num2">Monthly Sales</p>
              </Space>
              <Space direction="vertical">
                <p className="card-num">46,486</p>
                <p className="card-num2">3,756</p>
              </Space>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default MyComponent;
