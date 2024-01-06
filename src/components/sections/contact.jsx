import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';



const Contact = () => {
  const [data, setData] = useState({name: "", email: "", mobile: "", message: ""});
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]:value})
    }

        const handleSubmit = () =>{
           e.preventDefault() 
           alert(data)
        }

  return (
    <section id='contact'>
              <Row>
                <h1>For any queries please feel free to get in touch</h1>
                  <Form className='contactForm' method='post' onSubmit={handleSubmit}>
                    <h1>Contact <span>Here</span></h1>
                        <div className=''>
                          <input type="text" name='name' id='' onChange={handleChange} value={data.name} placeholder='Please type your name'/>
                        </div>
                            <div className=''>
                            <input type="email" name='email' id='' onChange={handleChange} value={data.email}  placeholder='Please enter your email'/>
                        </div>
                                <div className=''>
                                  <input type="text" name='mobile' id='' onChange={handleChange} value={data.mobile}  placeholder='+44'/>
                                </div>
                                  <div className=''>                               
                                    <textarea name ='message' id='' cols={30} onChange={handleChange} value={data.message}  rows='10' placeholder='Please write your message here'></textarea>
                                  </div>
                    <Button variant='primary' size='lg' type='submit'>Send</Button>
                  </Form> 
              </Row>     
    </section>      
  )
}
 export default Contact