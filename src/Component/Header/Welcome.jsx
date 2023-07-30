import { Breadcrumb, Button ,Space,Row,Col} from 'antd';
import { DownloadOutlined, FilterOutlined, CloudDownloadOutlined } from '@ant-design/icons';

const PageHeader = () => {
    const ButtonGroup = Button.Group;
  return (
   
    <Row justify="center" align="middle" className='welcome'>
      <Col xs={24} sm={24} md={12} lg={12} xl={10} style={{display:"flex",flexDirection:"column"}}>
        <h2 className="main-content-title tx-24 mg-b-5">Welcome To Dashboard</h2>
        <Breadcrumb>
          <Breadcrumb.Item>Ecommerce</Breadcrumb.Item>
          <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={10} style={{display:"flex",justifyContent:"end" }} >
        <Space size="middle" className="justify-content-center" style={{flexWrap:"wrap"}}>
          <Button type="primary" icon={<DownloadOutlined />} className="my-2 me-2">
            Import
          </Button>
          <Button type="primary" icon={<FilterOutlined />} className="my-2 me-2">
            Filter
          </Button>
          <Button type="primary" icon={<CloudDownloadOutlined />} className="my-2">
            Download Report
          </Button>
        </Space>
      </Col>
    </Row>
 
  );
};

export default PageHeader;
