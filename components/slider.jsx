'use client'
import Slider, { SliderThumb } from '@mui/material/Slider';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';



const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#b0b0b0',
  height: 1,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    "&:hover": {
      boxShadow: "0 0 0 0px rgba(255, 255, 255, 0)"
    },
    "&:active":{
      scale:1.1,   },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 1,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#dddddd' : '#dddddd',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 1,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

export default function SliderBar({onChange, value}) {
  return (
    <AirbnbSlider
      onChange={(e)=>{onChange(e.target.value);}}
      slots={{ thumb: AirbnbThumbComponent }}
      getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
      defaultValue={[0, 100]}
      value={value}
    />
  );
}