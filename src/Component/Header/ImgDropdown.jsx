import React from 'react'
import {Dropdown,Button,Space,Image} from 'antd'
import US from "../img/flags/us.svg"

const ImgDropdown = () => {


    const items = [
        {
           label: 'French',
           key: '1',
           url:""
         },
         {
           label: 'Germany',
           key: '2',
           url:""
         },
         {
           label: 'Italy',
           key: '3',
           url:""
         },
         {
           label: 'Russia',
           key: '4',
           url:""
         },
         {
           label: 'spain',
           key: '5',
           url:""
         },
       ];

       const menuProps = {
        items,
      };
  return (
    <>
    <Space>
    <Dropdown
      menu={menuProps} 
      placement="bottom"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <Image  src={US} width={24} height={24}/>
    </Dropdown>

    </Space>
         
    
    </>
  )
}

export default ImgDropdown