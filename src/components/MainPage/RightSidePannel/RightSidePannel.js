import React from 'react'
import './RightSidePannel.css'
import { useState } from 'react'
import ImageLayout from '../ImageLayout'
import logo from '../../../images/logo.png'

const RightSidePannel = () => {
    const[contact, setContact] = useState([
        {
          "image": logo,
          "text": "Luffy"
        },
        {
          "image": logo,
          "text": "Zoro"
        },
        {
          "image": logo,
          "text": "Sanji"
        },
        {
          "image": logo,
          "text": "Jimbei"
        }
    ]);

  return (
    <div>
      <div>
        Contacts
      </div>
      <div>
        {
            contact.map((data) => (
            <ImageLayout image={data.image} text={data.text}/>
            ))
        }
      </div>
    </div>
  )
}

export default RightSidePannel
