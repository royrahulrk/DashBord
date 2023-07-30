import React, { useState } from 'react';
import ImgDropdown from "./ImgDropdown"
import {MessageOutlined, BellOutlined,CaretDownFilled,ExpandOutlined,UserOutlined,AlignRightOutlined,SearchOutlined,AlignLeftOutlined,MoreOutlined  } from "@ant-design/icons"
import { Badge, Image ,Space, Dropdown,Input,Avatar,Menu} from 'antd'
import Logo from "../img/logo.png"
import Sidebar from '../Sidebar/Sidebar'
import ResHeader from './ResHeader';




const Header = () => {
  
  const [open, setOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [resHeaderVisible, setResHeaderVisible] = useState(false);

  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  
  
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };

    

    const showDrawer1 = () => {
      setResHeaderVisible(!resHeaderVisible); // Toggle the visibility state
    };

    
    const handleSearchVisibleChange = (visible) => {
      setSearchVisible(visible);
    };
  

  return (
    <>
    <div className='header'>
       
      <Space className='header-left'>
       <Space className='alignLeftOutlined'>
          <AlignLeftOutlined style={{fontSize:"24px"}} onClick={showDrawer1}/>
        </Space>
        <Image src={Logo}  />
        <Space className='inputSearch'>
        <DropdownHeader/>
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </Space>
        <MoreOutlined  className='moreOutlined ' style={{fontSize:"24px"}}/>
      </Space>
       
        <Space className='header-right'>
          <Menu mode="horizontal" theme="light" className='search-drop' onVisibleChange={handleSearchVisibleChange}>
            
             <Menu.SubMenu key="search" icon={<SearchOutlined  />} mode="vertical" >
              <Space>
                <Menu.Item  style={{lineHeight:"0",background:"none"}}><DropdownHeader/></Menu.Item>
                <Menu.Item key="crypto-dashboard"><Search placeholder="input search text" onSearch={onSearch} enterButton /></Menu.Item>
              </Space>
              
          
             </Menu.SubMenu>
          </Menu>
            
            <ImgDropdown style={{fontSize:"24px"}}/>
            <ExpandOutlined />
            <Badge count={10}>
               <BellOutlined style={{fontSize:"24px"}} />
            </Badge>
            <Badge count={20}>
            <MessageOutlined style={{fontSize:"24px"}} />
            </Badge>
            <Space style={{fontSize:"18px"}} >
               <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Space>
            <AlignRightOutlined  style={{fontSize:"24px"}}  onClick={showDrawer}/>
        </Space>
         
    </div>
      <Sidebar visible={open} onClose={() => setOpen(false)}/>
      <ResHeader visible={resHeaderVisible} onClose={() => setResHeaderVisible(false)} setResHeaderVisible={setResHeaderVisible} />
    </>
  )
}




function DropdownHeader() {
  const items = [
    {
      label: 'IT Projects',
      key: '1',
    },
    {
      label: 'Business Case',
      key: '2',
    },
    {
      label: 'Microsoft Project',
      key: '3',
    },
    {
      label: 'Risk Management',
      key: '4',
    },
    {
      label: 'Team Building',
      key: '5',
    },
  ];


  const menuProps = {
    items,
  };

  return (
    <Space wrap >
      <Dropdown.Button menu={menuProps} icon={<CaretDownFilled />} visible={false} >
         Choose one
      </Dropdown.Button>
    </Space>
  );
}




export default Header