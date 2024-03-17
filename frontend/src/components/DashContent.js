import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
  from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';
import UploadIcon from '@mui/icons-material/Upload';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './DashContent.css';

function DashContent() {

  const data = [
    {
      name: 'Jan',
      pv: 5,
      amt: 2400,
    },
    {
      name: 'Feb',
      pv: 10,
      amt: 2210,
    },
    {
      name: 'Mar',
      pv: 2,
      amt: 2290,
    },
    {
      name: 'Apr',
      pv: 8,
      amt: 2000,
    },
    {
      name: 'May',
      pv: 15,
      amt: 2181,
    },
    {
      name: 'Jun',
      pv: 7,
      amt: 2500,
    },
    {
      name: 'Jul',
      pv: 5,
      amt: 2100,
    },
    {
      name: 'Aug',
      pv: 7,
      amt: 2100,
    },
    {
      name: 'Sep',
      pv: 9,
      amt: 2100,
    },
    {
      name: 'Oct',
      pv: 1,
      amt: 2100,
    },
    {
      name: 'Nov',
      pv: 11,
      amt: 2100,
    },
    {
      name: 'Dec',
      pv: 9,
      amt: 2100,
    },
  ];


  return (
    <main className='main-container'>
      {/* <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div> */}

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>ACTIVITIES</h3>
            <DirectionsWalkIcon className='card_icon' />
          </div>
          <h1>300</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>UPLOADS</h3>
            <UploadIcon className='card_icon' />
          </div>
          <h1>12</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>SUCCESS</h3>
            <CheckBoxIcon className='card_icon' />
          </div>
          <h1>33</h1>
        </div>
        {/* <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>42</h1>
        </div> */}
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fill: 'white' }}/>
            <YAxis tick={{ fill: 'white' }}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fill: 'white' }} />
            <YAxis tick={{ fill: 'white' }}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>

      </div>
    </main>
  )
}

export default DashContent;
