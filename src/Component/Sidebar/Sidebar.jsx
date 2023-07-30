import React from 'react';
import { Layout, Checkbox, Progress ,Drawer,Space} from 'antd';
import { CloseOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';




const Sidebar = ({ visible, onClose }) => {

   
  return (
    <>
      <Drawer
      title={<CloseOutlined onClick={onClose} />}
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      width={300}
      top="4rem !important"
      
    >
      <div className="sidebar-body" >
        <h5>Todo</h5>
        <div className="d1-flex p-3">
          <Checkbox defaultChecked>Hungout with friends</Checkbox>
          <Space style={{paddingLeft:"3rem"}}>
            <EditOutlined style={{ color: '#6259ca ', cursor: 'pointer' }} />
            <DeleteOutlined style={{ color: '#f16d75', cursor: 'pointer' }} />
          </Space>
        </div>
        <div className="d1-flex p-3">
          <Checkbox defaultChecked>Prepare for presentation</Checkbox>
          <Space style={{paddingLeft:"3rem"}}>
            <EditOutlined style={{ color: '#6259ca ', cursor: 'pointer' }} />
            <DeleteOutlined style={{ color: '#f16d75', cursor: 'pointer' }} />
          </Space>
        </div>
        <div className="d1-flex p-3">
          <Checkbox defaultChecked>Prepare for presentation</Checkbox>
          <Space style={{paddingLeft:"3rem"}}>
            <EditOutlined style={{ color: '#6259ca ', cursor: 'pointer' }} />
            <DeleteOutlined style={{ color: '#f16d75', cursor: 'pointer' }} />
          </Space>
        </div>
        <div className="d1-flex p-3">
          <Checkbox defaultChecked>System Updated</Checkbox>
          <Space style={{paddingLeft:"3rem"}}>
            <EditOutlined style={{ color: '#6259ca ', cursor: 'pointer' }} />
            <DeleteOutlined style={{ color: '#f16d75', cursor: 'pointer' }} />
          </Space>
        </div>
        <div className="d1-flex p-3">
          <Checkbox defaultChecked>Do something more</Checkbox>
          <Space style={{paddingLeft:"3rem"}}>
            <EditOutlined style={{ color: '#6259ca ', cursor: 'pointer' }} />
            <DeleteOutlined style={{ color: '#f16d75', cursor: 'pointer' }} />
          </Space>
        </div>
        <div className="d1-flex p-3">
          <Checkbox defaultChecked>System Updatede</Checkbox>
          <Space style={{paddingLeft:"3rem"}}>
            <EditOutlined style={{ color: '#6259ca ', cursor: 'pointer' }} />
            <DeleteOutlined style={{ color: '#f16d75', cursor: 'pointer' }} />
          </Space>
        </div>
        {/* ... other todo items */}
        <h5>Overview</h5>
        <div className="p-4" >
          <div className="main-traffic-detail-product-item" style={{padding:"1rem"}}>
            <div>
              <span>Founder &amp; CEO</span> 
            </div>
            <Progress percent={20} />
          </div>
          <div className="main-traffic-detail-product-item" style={{padding:"1rem"}}>
            <div>
              <span>UX Designer 1</span> 
            </div>
            <Progress percent={24} />
          </div>
          <div className="main-traffic-detail-product-item" style={{padding:"1rem"}}>
            <div>
              <span>Software Engineer </span> 
            </div>
            <Progress percent={87} />
          </div>
          <div className="main-traffic-detail-product-item" style={{padding:"1rem"}}>
            <div>
              <span>Project Manager </span> 
            </div>
            <Progress percent={32} />
          </div>
          {/* ... other overview items */}
        </div>
      </div>
    </Drawer>
     
    </>
  );
};

export default Sidebar;
