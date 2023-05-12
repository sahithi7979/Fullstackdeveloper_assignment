import React from 'react'
import Card from './Card'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Flipkart = () => {
  
  const [name,setName]=useState("")
  const [Price,setPrice]=useState("")
  const [Discount,setDiscount]=useState("")
  const [url,setUrl]=useState("")


  const [items,setItems] = useState([
    {name:"Western Shirt",Price:"600",Discount:"10%",img:"https://rukminim1.flixcart.com/image/200/200/xif0q/jacket/4/7/b/m-2325-darzi-original-imafnnz8schtzv3s-bb.jpeg?q=70"},
    {name:"Laptop",Price:"60000",Discount:"25%",img:"https://rukminim1.flixcart.com/image/200/200/kfmv9u80/monitor/9/n/v/ha220q-um-ww0si-a01-acer-original-imafwfjq3gzgjvz5.jpeg?q=70"},
    {name:"Camera",Price:"55000",Discount:"15%",img:"https://rukminim1.flixcart.com/image/200/200/j6tn53k0/instant-camera/d/j/r/lime-green-mini-9-mini-9-fujifilm-original-imaex6qtwau9yfwy.jpeg?q=70"},
    {name:"Lipsticks",Price:"550",Discount:"20%",img:"https://rukminim1.flixcart.com/image/200/200/kwzap3k0/lipstick/j/t/n/16-non-transfer-insta-beauty-waterproof-longlast-sensational-original-imag9jby47tukyz5.jpeg?q=70"}
])

  function handlenamechange(event){
    setName(event.target.value)
  }

  function handlepricechange(event){
    setPrice(event.target.value)
  }
  function handlediscountchange(event){
    setDiscount(event.target.value)
  }
  function handleurlchange(event){
    setUrl(event.target.value)
  }
  function handlesubmit(event){
    event.preventDefault()
    const item = {name:name,Price:Price,Discount:Discount,img:url}
    setItems([...items,item])
    setName('')
    setPrice('')
    setDiscount('')
    setUrl('')
  }
  return (
    <div className="container">
    <h1>Items to View</h1>
    <div className="d-flex justify-content-center">
      <div className='row'>
        {items.map(item => <Card src={item.img} name={item.name} Price={item.Price} Discount={item.Discount} ></Card>)}
      </div>
    </div>
    
    <div style={{borderRadius:"10px",boxShadow:"0px 0px 5px 0.5px black",padding:'10px'}}>
      <h1>Add New Product</h1>
      <Form>
        <Form.Group className="md-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder=" Enter Product Name" value={name} onChange={handlenamechange}/>
        </Form.Group>
        <Form.Group className="md-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter Price" value={Price} onChange={handlepricechange} />
        </Form.Group>
        <Form.Group className="md-3">
          <Form.Label>Discount</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Discount" value={Discount} onChange={handlediscountchange}/>
        </Form.Group>
        <Form.Group className="md-3">
          <Form.Label>Product Image Url</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Image Url" value={url} onChange={handleurlchange} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handlesubmit}>
          Submit the Product
        </Button>
      </Form>
    </div>
    </div>
  )
}

export default Flipkart
