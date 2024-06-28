import React from 'react';
import './LeftSide.css';
import {useState} from 'react';
import ImageLayout from '../ImageLayout';
import logo from '../../../images/logo.png';
import covid from '../../../images/covid.png';
import groups from '../../../images/groups.png';
import memories from '../../../images/memories.png';
import messenger from '../../../images/messengerkids.png';
import adcentre from '../../../images/ads.png';
import blood from '../../../images/blood.png';

const LeftSide = () => {
  const[data, setData] = useState([
    {
      "image": logo,
      "text": "Luffy"
    },
    {
      "image": covid,
      "text": "Covid-19 Information Center"
    },
    {
      "image": groups,
      "text": "Friends"
    },
    {
      "image": memories,
      "text": "Memories"
    },
    {
      "image": messenger,
      "text": "Messenger Kids"
    },
    {
      "image": adcentre,
      "text": "Ad-Centre"
    },
    {
      "image": blood,
      "text": "Blood Donation"
    }
  ]);

  return (
    <div> 
      {
        data.map((data) => (
          <ImageLayout image={data.image} text={data.text}/>
        ))
      }
    </div>
  )
}

export default LeftSide
