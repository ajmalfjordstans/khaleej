'use client'
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
import { useFormik } from "formik";
import { Button } from "@material-tailwind/react";
import { basicSchema } from "@/schemas";
import Lottie from 'react-lottie';
import animationData from '../json/booking-animation.json'

const BLOCKED_DATES = ['2026-05-28']

const isDateBlocked = (dayjsDate) =>
  BLOCKED_DATES.some((d) => dayjsDate.isSame(dayjs(d), 'day'))

export default function Form() {
  const [date, setDate] = useState(new Date())
  const [submitted, setSubmitted] = useState(false)
  const onSubmit = async (values, action) => {
    // e.preventDefault();
    const timestamp = new Date(date);
    values.date = timestamp.toLocaleDateString()
    values.time = timestamp.toLocaleTimeString();
    try {
      const response = await fetch('/api/majlis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setSubmitted(true)
        // Form submitted successfully
        console.log('Form submitted successfully.');
        action.resetForm()
        setTimeout(() => {
          setSubmitted(false)
        }, 2500);
      } else {
        // Handle error
        console.error('Error submitting form.');
      }
    } catch (error) {
      console.error('Error:', error);
    }

  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched, isSubmitting } = useFormik({
    initialValues: {
      name: '',
      email: '',
      date: '',
      time: '',
      seatingPreference: '',
      numberOfPersons: '',
      phoneNumber: '',
      message: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  })

  return (
    <div className="p-[20px]">
      {submitted ?
        <div className="h-[350px] text-black text-center text-[18px] font-[500] flex flex-col justify-center items-center gap-3">
          <Lottie
            options={defaultOptions}
            height={150}
            width={200}
          />
          <p className="">We&apos;ve received your details.</p>
          <p className="">You&apos;ll receive an order confirmation shortly.</p>
          <p className="">We look forward to hosting you!</p>
        </div>
        :
        <form autoCapitalize="off" className="grid grid-cols-1 gap-2 text-black" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[2px]">
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
          <div className="flex flex-col gap-[2px]">
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
            <div className="flex flex-col gap-[2px]">
              <label htmlFor="date">Date</label>
              <DatePicker
                type="date"
                name="date"
                value={dayjs(date)}
                onChange={(newValue) => setDate(newValue)}
                className="bg-inherit w-full !text-white border-[1px] border-primary rounded-[3px] "
                format='D MMMM YYYY'
                minDate={dayjs(new Date())}
                shouldDisableDate={isDateBlocked}
              />
              {isDateBlocked(dayjs(date)) && (
                <p className="text-[red] text-sm mt-1">Sorry, we are not available on the selected date.</p>
              )}
            </div>
            <div className="flex flex-col gap-[2px]">
              <label htmlFor="time">Time</label>
              <TimePicker
                type="time"
                name="time"
                value={dayjs(date)}
                onChange={(newValue) => setDate(newValue)}
                className=" !border-primary focus:!border-primary text-white w-full"
                minTime={dayjs(date).isSame(dayjs(), 'day') ? dayjs(new Date()) : dayjs().startOf('day').add(12, 'hours')}
                maxTime={dayjs().endOf('day').subtract(1, 'hour')}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[2px]">
            <label htmlFor="seatingPreference">Seating Preference</label>
            <select
              value={values.seatingPreference}
              onChange={handleChange}
              onBlur={handleBlur}
              id="seatingPreference" name="seatingPreference"
              className={`bg-inherit w-full text-black border-[1px] border-primary rounded-[3px] p-3 ${errors.seatingPreference && touched.seatingPreference ? "border-[red]" : ""}`}
            >
              <option value="" disabled>Select Seating Preference</option>
              <option value="Table" className="text-black">Table</option>
              <option value="Floor" className="text-black">Floor</option>
            </select>
            {errors.seatingPreference && touched.seatingPreference && <p className="text-[red]">{errors.seatingPreference}</p>}
          </div>
          <div className="grid grid-cols-2 gap-3 ">
            <div className="flex flex-col gap-[2px]">
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
            <div className="flex flex-col gap-[2px]">
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
          </div>
          <div className="flex flex-col gap-[2px]">
            <label htmlFor="message">Message</label>
            <textarea
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              id="message" type="text" rows="3"
              className="bg-inherit w-full text-black border-[1px] border-primary rounded-[3px] p-3"
            />
          </div>
          <Button type="submit" disabled={isSubmitting || isDateBlocked(dayjs(date))} className="bg-primary ">
            Book
          </Button>
        </form>
      }
    </div>
  );
}
