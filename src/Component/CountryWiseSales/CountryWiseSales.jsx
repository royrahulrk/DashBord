import { Col, Row, Card, Typography, Progress } from 'antd';
import WorldMap from './WorldMap';
import React from 'react';
const { Title, Text } = Typography;

const CountryWiseSales = () => {
  return (
    <>
    <div className='country-block'>
    <Col xl={20}  md={20} sm={12} lg={20}>
      <Card className="custom-card">
        <div className="card-header border-bottom-0">
          <Title level={4}>Country Wise Sales</Title>
          <Text type="secondary" style={{fontSize:"12px",color:"#8f8fb1"}}>
            The global ecommerce sales in 2020 is expected to reach $4.453 trillion, marking an increase of <b>22.5%</b> from the previous year as the global ecommerce market.
          </Text>
        </div>
        <Row xl={16}  className="card-body pt-0 pb-3 country-sale-d" style={{padding:".5rem",gap:"4rem"}}>
          <Col xl={16} lg={20}>
            <div id="world-map-markers" className="ht-700">
                <WorldMap />
            </div>
          </Col>
          <Col xl={6} md={22} lg={20} className="mt-xl-4">
            <div className="mb-4 pt-2">
              <h5 className="mb-2 d-block">
                <span className="fs-14">Brazil</span>
                <span className="float-end fs-14">80%</span>
              </h5>
              <Progress percent={80} status="active" />
            </div>
            <div className="mb-4">
              <h5 className="mb-2 d-block">
                <span className="fs-14">Russia</span>
                <span className="float-end fs-14">72%</span>
              </h5>
              <Progress percent={72} status="active" />
            </div>
            <div className="mb-4">
              <h5 className="mb-2 d-block">
                <span className="fs-14">Poland</span>
                <span className="float-end fs-14">67%</span>
              </h5>
              <Progress percent={67} status="active" />
            </div>
            <div className="mb-4">
              <h5 className="mb-2 d-block">
                <span className="fs-14">Canada</span>
                <span className="float-end fs-14">53%</span>
              </h5>
              <Progress percent={53} status="active" />
            </div>
            <div className="mb-4">
              <h5 className="mb-2 d-block">
                <span className="fs-14">India</span>
                <span className="float-end fs-14">75%</span>
              </h5>
              <Progress percent={75} status="active" />
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
    </div>
    </>
  );
};




export default CountryWiseSales;
