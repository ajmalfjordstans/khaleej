'use client'

import React, { useState } from 'react'
import { useFormik } from "formik";
import { Button } from "@material-tailwind/react";
import { contactFormSchema } from "@/schemas";

export default function ContactForm() {
  const [successful, setSuccessful] = useState(false)
  const onSubmit = async (values, action) => {
    try {
      // const response = await fetch('http://localhost:3005/contact', {
        const response = await fetch('https://khaleej-backend.onrender.com/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        // Form submitted successfully
        console.log('Form submitted successfully.');
        setSuccessful(true)
        setTimeout(() => {
          setSuccessful(false)
        }, 2000);
        action.resetForm()
      } else {
        // Handle error
        console.error('Error submitting form.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched, isSubmitting } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
    validationSchema: contactFormSchema,
    onSubmit,
  })
  return (
    <div className="p-[20px]">
      {successful ?
        <div className='flex justify-center items-center h-full'>
          <p>Message sent successfully</p>
        </div>
        :
        <form autoCapitalize="off" className="grid grid-cols-1 gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              id="name" type="text"
              className={`bg-inherit w-full text-black border-[1px] border-primary rounded-[3px] p-3 ${errors.name && touched.name ? "border-[red]" : ""}`}
            />
            {errors.name && touched.name && <p className="text-[red]">{errors.name}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email" type="email"
              className={`bg-inherit w-full text-black border-[1px] border-primary rounded-[3px] p-3 ${errors.email && touched.email ? "border-[red]" : ""}`}
            />
            {errors.email && touched.email && <p className="text-[red]">{errors.email}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              id="phoneNumber" type="number"
              className={`bg-inherit w-full text-black border-[1px] border-primary rounded-[3px] p-3 ${errors.phoneNumber && touched.phoneNumber ? "border-[red]" : ""}`}
            />
            {errors.phoneNumber && touched.phoneNumber && <p className="text-[red]">{errors.phoneNumber}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              id="message" type="text" rows="3"
              className="bg-inherit w-full text-black border-[1px] border-primary rounded-[3px] p-3"
            />
          </div>
          {errors.message && touched.message && <p className="text-[red]">{errors.message}</p>}
          <Button type="submit" disabled={isSubmitting} className="bg-primary ">
            Submit
          </Button>
        </form>
      }
    </div >
  )
}
