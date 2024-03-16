import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kz4j9oe', 'template_wxhzg0s', form.current, {
        publicKey: '_JeCwATc5Kec3I3dv',
      })
      .then(
        () => {
          toast("Message sent successfully !!");

        },
        (error) => {
          toast("Message not sent !!");
        },
      );
  };

  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-gray-200 p-9'>
      <div className=''>
          <img src="https://www.moglix.com/assets/img/contact-img.png" alt="" className='mt-14 ml-auto mb-5' style={{width:"500px"}}/>
      </div>
      <div className='grid lg:grid-cols-1 sm:grid-cols-3 ml-auto mr-auto'>
      <form onSubmit={sendEmail} ref={form} className='grid lg:grid-cols-1 sm:grid-cols-3 ml-auto mr-auto'>
        <input name="from_name" placeholder='Enter your name' type="text" className='w-auto h-12 rounded-lg mb-5 mt-0 p-4 border-2 border-black'/>
        <input name="from_email" placeholder='Enter email address' type="email" className='w-auto h-12 rounded-lg mb-5 mt-1 p-4 border-2 border-black'/>
        <textarea name="message" placeholder='Write message' id="" cols="38" rows="9" onResize="none" className='rounded-xl mb-5 p-4 border-2 border-black'></textarea>
        <button type='submit' value="Send" className='bg-green-700 p-2 rounded-lg text-white mb-6'>Send Message</button>
      </form>
      <ToastContainer />
      </div>
    </div>
  )
}

export default Contact




// export const ContactUs = () => {
  

  

//   return (
//     <form  onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };