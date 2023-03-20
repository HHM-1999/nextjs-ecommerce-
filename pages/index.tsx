import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { BsFacebook, BsGoogle, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
import Carousel from 'react-bootstrap/Carousel';

const Home =() => {
  return (
    <>
      <div className='container mt-5'>
        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://as1.ftcdn.net/v2/jpg/02/88/65/54/1000_F_288655459_H5Auoet68jYBOGtVezdt8xY9VzH9GmHO.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://as1.ftcdn.net/v2/jpg/02/87/14/26/1000_F_287142678_SzL6eCUbTDTRAGQPWm6GY6Jv9hfpvwGD.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://as1.ftcdn.net/v2/jpg/02/88/65/46/1000_F_288654645_EhWUFq1Cz24TcQ7t1Lx9GvrDszz96HzA.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
     </div>
{/* Footer Start */}
      <div className='container justify-items-end mt-5 '>

      <footer className="bg-dark text-center text-white ">

  <div className="container p-4 pb-0 flex-wrap ">
   
    <section className="mb-4">
      
              <div className='Gap '>
                
                <a  className='gap-10' href="#!" role="button"
        ><BsFacebook  size={25}></BsFacebook></a>
    
      <a className='gap-10' href="#!" role="button"
        ><BsGoogle size={25}></BsGoogle></a>

    
      <a className='gap-10' href="#!" role="button"
        ><BsInstagram size={25}></BsInstagram></a>

      
      <a className='gap-10'  href="#!" role="button"
        ><BsLinkedin size={25}></BsLinkedin></a>

      <a  className='gap-10' href="#!" role="button"
        ><BsGithub size={25}></BsGithub></a>
      </div>
    </section>
   
  </div>
  
          <div className="text-center p-3" style={{background:"rgba(0, 0, 0, 0.2)" }}>
    © 2023 Copyright By Humaira Hossain :
    <a className="text-white" href="https://mdbootstrap.com/">  MiniMap.com</a>
  </div>
 
</footer>


      </div>
      </>
  )
}

export default Home;