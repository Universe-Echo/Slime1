import React, { createContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import '../style.scss'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { ColorPicker, Dropdown, Space } from 'antd';





const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',

  },
];


const Home = () => {



  return (
    <Dropdown menu={{ items }} trigger={['contextMenu']}>

      <div className='home' >
        <div className="container">
          <Sidebar />
          <Chat />
        </div>
      </div>

    </Dropdown>

  )
}

export default Home