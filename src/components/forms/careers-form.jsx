'use client'
import React, { useState } from 'react';
import { useFormik } from "formik";
import { Button } from "@material-tailwind/react";
import { careersFormSchema } from "@/schemas";

export default function CareersForm({ position }) {
  const [successful, setSuccessful] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    position: position.title,
    resume: null,
  })

  const onSubmit = async (values, action) => {
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phoneNumber', values.phoneNumber);
      formData.append('position', values.position);
      formData.append('resume', values.resume);
      console.log(values.resume, 'Form submitted successfully.');
      // const response = await fetch('https://khaleej-backend.onrender.com/careers', {
      const response = await fetch('http://localhost:3005/careers', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Form submitted successfully
        console.log(values.resume, 'Form submitted successfully.');
        setSuccessful(true);
        setTimeout(() => {
          setSuccessful(false);
        }, 2000);
        action.resetForm();
      } else {
        // Handle error
        console.error('Error submitting form.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched, isSubmitting, setFieldValue } = useFormik({
    initialValues: formData,
    validationSchema: careersFormSchema,
    onSubmit,
  });

  const handleFileChange = (event) => {
    setFieldValue('resume', event.currentTarget.files[0]);
  };

  return (
    <div className="p-[20px]">
      {successful ? (
        <div className='flex justify-center items-center h-full'>
          <p>Application submitted successfully</p>
        </div>
      ) : (
        <form autoCapitalize="off" className="" onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
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
              <label htmlFor="position">Position</label>
              <input
                value={values.position}
                onChange={handleChange}
                onBlur={handleBlur}
                id="position" type="text"
                className={`bg-inherit w-full text-black border-[1px] border-primary rounded-[3px] p-3 ${errors.position && touched.position ? "border-[red]" : ""}`}
              />
              {errors.position && touched.position && <p className="text-[red]">{errors.position}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="resume">Resume (PDF)</label>
              <input
                onChange={handleFileChange}
                onBlur={handleBlur}
                id="resume" type="file" accept=".pdf"
                className={`bg-inherit w-full text-black border-[1px] border-primary rounded-[3px] p-3 ${errors.resume && touched.resume ? "border-[red]" : ""}`}
              />
              {errors.resume && touched.resume && <p className="text-[red]">{errors.resume}</p>}
            </div>
          </div>
          <div className='flex justify-end mt-[15px]'>
            <Button type="submit" disabled={isSubmitting} className="bg-primary">
              Submit
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
