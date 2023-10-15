import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { addApi } from '../services/allApi';

function Add() {
const [productData,setProductData]=useState({
  pid:"",
  pname:"",
  pcatogory:"",
  cname:"",
  pprice:""

})
const productDeatails=(e)=>{
 let {value,name}=e.target

setProductData({...productData,[name]:value})
}

console.log(productData);

const handleSubmit= async (e)=>{
e.preventDefault()
const data=new FormData()
const {pid,pname,pcatogory,cname,pprice}=productData
data.append('pid',pid)
data.append('pname',pname)
data.append('pcatogory',pcatogory)
data.append('cname',cname)
data.append('pprice',pprice)

const response=await addApi(data)
console.log(response);
if(response.status == 200){
  alert("employee added")
}else{
  alert('employee already prsnt')
}
}


  return (
    <div>
      <h3 style={{ textAlign: "center", padding: '12px' }}>Add New Product</h3>

<div> <Form>
      <Form.Group as={Row} className="mb-3"  id="formPlaintextEmail5">
        <Form.Label column sm="2">
          Product Id
        </Form.Label>
        <Col sm="10">
          <Form.Control required name='pid' onChange={productDeatails}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3"  id="formPlaintextPassword4">
        <Form.Label column sm="2">
          Product Name
        </Form.Label>
        <Col sm="10">
          <Form.Control required type="text" name='pname' onChange={productDeatails} placeholder="" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3"  id="formPlaintextEmail1">
        <Form.Label column sm="2">
          Catagory
        </Form.Label>
        <Col sm="10">
          <Form.Control required type='text' name='pcatogory' onChange={productDeatails} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3"  id="for2">
        <Form.Label column sm="2">
          Company Name
        </Form.Label>
        <Col sm="10">
          <Form.Control required name='cname' onChange={productDeatails} type="text" placeholder="" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}  className="mb-3"  id="il3">
        <Form.Label column sm="2">
          price
        </Form.Label>
        <Col sm="10">
          <Form.Control required name='pprice' onChange={productDeatails} type='text'/>
        </Col>
      </Form.Group >
      <br></br>
<div>

        <Button onClick={handleSubmit} type='submit' variant="primary" size="sm">
          Submit
        </Button>
</div>
      
    </Form></div>





    </div>
  )
}

export default Add