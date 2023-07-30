import React from 'react';
import { Card, Typography, Row, Col, Avatar, List ,Divider} from 'antd';
import { Line } from 'react-chartjs-2';
import ReactApexChart from 'react-apexcharts';
import Sales from "../Sales/Sales"
import { Chart as ChartJS,
LineElement,
CategoryScale,LinearScale,
PointElement
} from 'chart.js';
import CountryWiseSales from '../CountryWiseSales/CountryWiseSales';
ChartJS.register(
  LineElement,CategoryScale,
  LinearScale,PointElement
)

const { Text } = Typography;

const Graph = () => {
   
  const [chartOptions, setChartOptions] = React.useState({
    chart: {
      type: 'radialBar',
    },
    series: [83], // Example data, modify as needed
    labels: ['Series 1'], // Example labels, modify as needed

    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        track: {
          background: '#333',
          startAngle: -135,
          endAngle: 135,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "30px",
            show: true
          }
        }
      }
    },
  });
  
 
  
  return (
    <>
       <Row gutter={[16, 16]} justify="center" style={{marginTop:"2rem" ,width:"100%"}}>
      <Col xs={24} sm={24} md={22} lg={22} xl={20}>
        <Revenuechart />
      </Col>

      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <Card className="custom-card" >
          <div className="card-header border-bottom-0 pb-0">
            <label className="main-content-label mb-2 pt-1 ">
              Recent Orders
            </label>
            <Text className="tx-12 mb-0 text-muted" style={{ display: 'flex', fontSize: "12px", color: "#8f8fb1" }}>
              An order is an investor's instructions to a broker or
              brokerage firm to purchase or sell
            </Text>
          </div>
          <div className="card-body sales-product-info ot-0 pt-0 pb-0">
            <div id="recentorders" className="ht-150"><ReactApexChart options={chartOptions} series={chartOptions.series} type="radialBar" height={350} /></div>
            <Row className="sales-product-infomation pb-0 mb-0 mx-auto wd-100p">
              <Col
                md={12}
                className="col justify-content-center text-center" align="center"

              >
                <p className="mb-0 d-flex justify-content-center">
                  <span className="legend bg-primary brround"></span>
                  Delivered
                </p>
                <h3 className="mb-1 font-weight-bold">5238</h3>
                <div className="d-flex justify-content-center">
                  <p className="text-muted" style={{ justifyContent: "center" }}>Last 6 months</p>
                </div>
              </Col>
              <Col md={12} className="col text-center float-end" align="center">
                <p className="mb-0 d-flex justify-content-center">
                  <span className="legend bg-light brround"></span>Cancelled
                </p>
                <h3 className="mb-1 font-weight-bold">3467</h3>
                <div className="d-flex justify-content-center">
                  <p className="text-muted" style={{ justifyContent: "center" }}>Last 6 months</p>
                </div>
              </Col>
            </Row>
          </div>
        </Card>
      </Col>

      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <Card className="custom-card">
          <div className="card-header pb-0 border-bottom-0">
            <label className="main-content-label mb-2 pt-1">Tickets</label>
            <p className="tx-12 mb-0 text-muted" style={{ display: 'flex', fontSize: "12px", color: "#8f8fb1" }}>
              Sales activities are the tactics that salespeople use to
              achieve
            </p>
          </div>
          <div className="card-body">
            <List
              className="visitor mb-0 d-block users-images list-unstyled list-unstyled-border"
              itemLayout="horizontal"
              dataSource={[
                {
                  avatar: "https://example.com/users/3.jpg",
                  name: "Vanessa",
                  date: "10-9-2018",
                  description: "sed do eiusmod",
                },
                {
                  avatar: "https://example.com/users/5.jpg",
                  name: "Rutherford",
                  date: "15-9-2018",
                  description: "sed do eiusmod",
                },
                {
                  avatar: "https://example.com/users/7.jpg",
                  name: "Elizabeth",
                  date: "17-9-2018",
                  description: "sed do eiusmod",
                },
                {
                  avatar: "https://example.com/users/4.jpg",
                  name: "Anthony",
                  date: "19-9-2018",
                  description: "sed do eiusmod",
                },
                {
                  avatar: "https://example.com/users/9.jpg",
                  name: "Anthony",
                  date: "19-9-2018",
                  description: "sed do eiusmod",
                },
              ]}
              renderItem={(item) => (
                <List.Item >
                  <List.Item.Meta
                    style={{ alignItems: 'center' }}
                    avatar={
                      <Avatar
                        src={item.avatar}
                        className="me-3 rounded-circle avatar-md"
                      />
                    }
                    title={
                      <h5 className="media-title tx-15 mb-0" style={{ fontSize: "15px", marginTop: "0px" }}>
                        {item.name}
                      </h5>
                    }
                    description={
                      <Text className="text-muted" style={{ color: "#8f8fb1" }}>{item.description}</Text>
                    }
                  />
                  <div className="float-end">
                    <small>{item.date}</small>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </Card>
      </Col>
    </Row>
    <Sales />
    <CountryWiseSales />
    </>
  );
};



 function Revenuechart (){
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June','Jul','Aug'],
        datasets: [
          {
            label: 'Sale',
            data: [50, 100, 50, 200,150,100,200,100],
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.5,
          },
          {
            label: 'order',
            data: [50, 20,100 , 100,150,50,100,200],
            fill: false,
            borderColor: '#dbd9ed',
            tension: 0.5,
          },
        ],
      };

    
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      
    
      return (
       
        <Card className="custom-card"  >
          <div className="card-header border-bottom-0">
            <label className="main-content-label my-auto pt-2 " >Revenue Overview</label>
            <span className="d-block tx-12 mb-0 mt-1 text-muted" style={{display:'flex',fontSize:"12px",color:"#8f8fb1"}}>
              An Overview. Revenue is the total amount of income generated by the sale of goods or services related to the company's primary operations.
            </span>
          </div>
          <Divider />
          
           
              <Line data={data} options={options}  />
      
         
        </Card>
     
        
      );
   
 }
export default Graph;