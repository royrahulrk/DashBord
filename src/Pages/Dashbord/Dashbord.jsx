import React from "react";
import { Typography, Space, Card, Statistic} from "antd";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
// import { getCustomers, getInventory, getOrders, getRevenue } from "../../API/index";


const Dashbord = () => {
  return (
    <div>
      <Typography.Title level={4}>Dashbord</Typography.Title>
      <Space direction="horizontal">
        <DashbordCard
          icon={<ShoppingCartOutlined 
            style={{
              fontSize:"24px",
              padding:"8px",
            }}          
          />}
          title={"Orders"}
          value={1234}
          
        />
        <DashbordCard
          icon={<ShoppingOutlined 
            style={{
              fontSize:"24px",
              padding:"8px",
            }} 
          />}
          title={"Inventory"}
          value={56}
        />
        <DashbordCard icon={<UserOutlined style={{
              fontSize:"24px",
              padding:"8px",
            }} />} title={"Customer"} value={124} />
        <DashbordCard
          icon={<DollarCircleOutlined 
            style={{
              fontSize:"24px",
              padding:"8px",
            }} />}
          title={"Revenue"}
          value={15644}
        />
      </Space>
    </div>
  );
};

function DashbordCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}





// function RecentOrders() {
//   const [dataSource, setDataSource] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     getOrders().then((res) => {
//       setDataSource(res.products.splice(0, 3));
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <>
//       <Typography.Text>Recent Orders</Typography.Text>
//       <Table
//         columns={[
//           {
//             title: "Title",
//             dataIndex: "title",
//           },
//           {
//             title: "Quantity",
//             dataIndex: "quantity",
//           },
//           {
//             title: "Price",
//             dataIndex: "discountedPrice",
//           },
//         ]}
//         loading={loading}
//         dataSource={dataSource}
//         pagination={false}
//       ></Table>
//     </>
//   );
// }




export default Dashbord;
