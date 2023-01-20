import * as React from 'react';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

export default function TabItem({ label, path }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  }

  return (
    <div style={
      {
        width: '1px',
        border: '1px solid lightgray',
        height: '20px',
        alignSelf: 'center'
      }
    }>
      <Tab
        disableRipple= 'true'
        label={label}
        onClick={()=>handleClick(path)}
      />
    </div>
  );
}
