import React from 'react'
import diamond from "../assets/images/1984.jpeg"
import starts from "../assets/images/starts.jpg"
import investor from "../assets/images/outliers.jpeg"
import money from "../assets/images/psy-money.jpg"
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const OneBook = () => {

  return (
    <Container >
    <Row className='justify-center items-center'>
      <Col>
  
  <div className='w-[350px] h-[400px] bg-[#3C2A21] rounded-2xl mb-[3rem]'>
  <p className='font-sans text-[#E5E5CB] text-3xl px-[30px] pt-[30px] font-bold'>Monthly selected books for adults</p>
  <div className="images flex">
      <img className='mt-[60px]  h-[200px] -rotate-12' src={investor} alt="" />
    <img className='mt-[60px]  h-[200px] rotate-12' src={starts} alt="" />
  </div>
      </div>
       </Col>
  <Col>
    <div className='w-[350px] h-[400px] bg-[#E5E5CB] rounded-2xl mb-[3rem]'>
       <p className=' font-bold font-sans text-[#1A120B] text-3xl px-[30px] pt-[30px]'><span className='text-[#D70040] italic text-4xl'>50%</span>  Discount to all James Clear books!</p>
       <button className='grid mx-auto text-xl  font-bold text-[#FFFBEB]  w-[180px]  bg-[#3C2A21] rounded-full p-[10px] text-center mt-[52px] '> <Link to="/items">shop now</Link> </button>

        </div>
  </Col>

    <Col >
    <div className='w-[350px] h-[400px] bg-[#1A120B] rounded-2xl mb-[3rem]'>
    <p className='font-bold font-sans text-[#E5E5CB] text-3xl px-[30px] pt-[30px]'>Weekly Favorites of Our Club Members</p>
    <div className="images flex">
      <img className='mt-[60px] ml-[120px] h-[200px] -rotate-12' src={money} alt="" />
    <img className='mt-[60px]  h-[200px] rotate-12' src={diamond} alt="" />
    </div>

  </div>
  </Col>
    </Row>
  </Container>

      // <div className='flex justify-around my-[100px]'>

     
   

  )
}

export default OneBook
