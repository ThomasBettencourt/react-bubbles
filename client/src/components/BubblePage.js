import React, { useState, useEffect } from 'react';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    AxiosWithAuth()
      .get('/api/colors')
      .then(response => {
        setColorList(response.data);
        // console.log(colorList);
      })
      .catch(error => console.error(error));
  }, []);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const updateColors = () => {
    AxiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <ColorList colors={colorList} updateColors={updateColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;