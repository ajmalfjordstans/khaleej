'use client'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

export default function Form() {
  return (
    <div>
      <form className="my-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="white" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-white w-full text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="white" className="-mb-3">
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-white w-full text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {/* <div className="flex gap-[20px]">
            <div>
              <Typography variant="h6" color="white" className="-mb-3">
                Date
              </Typography>
              <Input
                size="lmd"
                placeholder="name@mail.com"
                type="date"
                className=" !border-t-blue-gray-200 focus:!border-white w-full text-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" color="white" className="-mb-3">
                Time
              </Typography>
              <Input
                size="md"
                type="time"
                className=" !border-t-blue-gray-200 focus:!border-white w-full text-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div> */}
          <Typography variant="h6" color="white" className="-mb-3">
            No. of persons
          </Typography>
          <Input
            size="lg"
            placeholder="3"
            type="number"
            className=" !border-t-blue-gray-200 focus:!border-white w-full text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="white" className="-mb-3">
            Phone Number
          </Typography>
          <Input
            size="lg"
            placeholder=""
            type="number"
            className=" !border-t-blue-gray-200 focus:!border-white w-full text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="white" className="-mb-3">
            Message
          </Typography>
          <Textarea className=" !border-t-blue-gray-200 focus:!border-white w-full text-white" />
        </div>
        <Button className="mt-6 bg-secondary text-black" fullWidth>
          SEND
        </Button>
      </form>
    </div>
  );
}