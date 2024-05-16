import React from 'react'
import Modal from "./modal/Modal.jsx"
import Card from "../components/modal/Card.jsx"
const View = ({showmodal,Setshowmodal}) => {
  return (
    <Modal Setshowmodal={Setshowmodal}>
          <div className='flex flex-wrap gap-4'>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
             <Card/>
          </div>
    </Modal>
  
  )
}

export default View