import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function ContactUs() {

  const [disabled, setDisabled] = useState(false)
  const [result, setResult] = useState('')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setDisabled(true)
    emailjs.sendForm('service_uu1i4xr', 'template_tcqbu84', form.current, 'm1D4NG-CkUupo6bdJ')
      .then(() => {
        setDisabled(false)
        setResult('Email sent successfully!')
      }, (error) => {
        setDisabled(false)
        setResult('Oops! Something went wrong. Please try again later.')
        console.log(error.text);
      });
  };

  return (
    <div className='min-h-screen grow flex flex-nowrap flex-col justify-center items-center p-4 relative snap-start bg-gradient-to-b from-slate-900  via-gray-900 to-[#030e0d]' id='contact'>

      <form
        className='w-full max-w-[50rem] font-IBM-Plex-Mono border-[1px] text-green-500 border-green-900 shadow-lg bg-black/20 shadow-green-900 rounded-xl py-2 px-4 flex flex-col lg:flex-row gap-x-8'
        ref={form}
        onSubmit={sendEmail}
      >
        <div className='flex flex-col grow gap-4'>
          <div className='flex flex-col'>
            <label>Name</label>
            <input required className='bg-slate-100 text-gray-900' type="name" name="user_name" onChange={() => { setResult('') }} />
          </div>
          <div className='flex flex-col'>
            <label>Email</label>
            <input required className='bg-slate-100 text-gray-900' type="email" name="user_email" onChange={() => { setResult('') }} />
          </div>
        </div>
        <div className='flex flex-col grow-[3]'>
          <label>Message</label>
          <textarea required className='bg-slate-100 text-gray-900 font-sans' name="message" onChange={() => { setResult('') }} />
          <div className='flex'>
            <div className={`btn w-fit shadow-lg my-4 mb-2 ${disabled ? 'shadow-gray-900' : 'shadow-green-900'}`}>
              <input type="submit" disabled={disabled} value="Send message" className='noselect font-IBM-Plex-Mono font-bold  text-green-200 disabled:text-gray-600 text-xl bg-black' />
            </div>
            <label className='text-sm text-white w-full text-center' >{result}</label>
          </div>
        </div>
      </form>
    </div>
  );
};