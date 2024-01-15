'use client'
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
import { useFormik } from "formik";
import { Button } from "@material-tailwind/react";
import { basicSchema } from "@/schemas";

export default function Form() {
  const [date, setDate] = useState(new Date())
  const onSubmit = async (values, action) => {
    // e.preventDefault();
    const timestamp = new Date(date);
    values.date = timestamp.toLocaleDateString()
    values.time = timestamp.toLocaleTimeString();
    // console.log('Form data:', values);
    try {
      const response = await fetch('http://localhost:3005/majlis-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        // Form submitted successfully
        console.log('Form submitted successfully.');
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
      date: '',
      time: '',
      numberOfPersons: '',
      phoneNumber: '',
      message: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  })

  return (
    <div className="p-[20px]">
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
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="date">Date</label>
            <DatePicker
              type="date"
              name="date"
              value={dayjs(date)}
              onChange={(newValue) => setDate(newValue)}
              className="bg-inherit w-full text-black border-[1px] border-primary rounded-[3px] "
              format='D MMMM YYYY'
              minDate={dayjs(new Date())}
              />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="time">Time</label>
            <TimePicker
              type="time"
              name="time"
              value={dayjs(date)}
              onChange={(newValue) => setDate(newValue)}
              className=" !border-primary focus:!border-primary text-white w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="numberOfPersons">No. of persons</label>
          <input
            value={values.numberOfPersons}
            onChange={handleChange}
            onBlur={handleBlur}
            id="numberOfPersons" type="number"
            className={`bg-inherit w-full text-black border-[1px] border-primary rounded-[3px] p-3 ${errors.numberOfPersons && touched.numberOfPersons ? "border-[red]" : ""}`}
          />
          {errors.numberOfPersons && touched.numberOfPersons && <p className="text-[red]">{errors.numberOfPersons}</p>}
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
        <Button type="submit" disabled={isSubmitting} className="bg-primary ">
          Submit
        </Button>
      </form>
    </div>
  );
}