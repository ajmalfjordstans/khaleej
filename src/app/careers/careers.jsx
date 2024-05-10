'use client'
import CareersForm from '@/components/forms/careers-form'
import { Button } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'

const vacancies = {
  tandoori: {
    title: "Tandoori Chef",
    duties: ["Prepare and cook Tandoori dishes with expertise and creativity.",
      " Marinate meats and vegetables and operate Tandoori ovens.",
      " Ensure quality and consistency of Tandoori dishes.",
      " Collaborate with kitchen team to develop new Tandoori recipes.",
      " Familiarity with Indian and Arabic culinary traditions preferred, especially in Tandoori cooking.",
    ],
    qualifications: [" Showcase mastery in Tandoori cooking, crafting dishes with skill and creativity.",
      " Marinate meats and vegetables expertly and operate Tandoori ovens proficiently.",
      " Maintain high standards of quality and consistency in Tandoori dishes.",
      " Previous experience of 5+ years in Tandoori cooking preferred.",
      " Familiarity with Indian and Arabic culinary traditions is advantageous."
    ]
  },
  mandi: {
    title: "Mandi Chef",
    duties: ["Prepare and cook traditional Mandi or Yemeni dishes according to established recipes and standards",
      " Assist in the overall operation of the kitchen, including food preparation, cooking, and plating",
      " Ensure all dishes are prepared and presented in a timely manner",
      " Follow proper food safety and sanitation procedures to maintain a clean and safe kitchen environment",
      " Collaborate with other kitchen staP to ensure smooth and efficient service",
      " Monitor inventory levels and communicate any shortages or needs to the appropriate personnel",
      " Maintain a high standard of quality in all food preparations",
      " Adhere to all company policies, procedures, and regulations",
    ],
    qualifications: [" Proven experience as a Mandi Chef or Yemeni Chef, or similar role in a restaurant or culinary setting",
      " Strong knowledge of Mandi or Yemeni cuisine and traditional cooking techniques",
      " Requires a minimum of 10 years of experience.",
      " Ability to work in a fast-paced environment while maintaining attention to detail",
      " Excellent communication and teamwork skills.",
      " Knowledge of food safety regulations and best practices",
      " Ability to multitask and prioritize tasks ePectively",
    ]
  },
  manager: {
    title: "Restaurant Manager",
    duties: ["Oversee all aspects of restaurant operations, including staff management, scheduling, and inventory control.",
      " Ensure exceptional customer service and satisfaction.",
      " Maintain high standards of cleanliness, hygiene, and safety.",
      " Manage finances, including budgeting, cost control, and profitability.",
      " Foster a positive work environment and team morale.",
      " Familiarity with Arabic culture and traditions beneficial to cater to our diverse clientele and uphold cultural authenticity.",
    ],
    qualifications: [" Take charge of all restaurant operations, ensuring seamless functioning and exceptional service.",
      " Uphold rigorous standards of cleanliness, hygiene, and safety throughout the establishment.",
      " Manage financial aspects including budgeting, cost control, and revenue optimization.",
      " Possess a degree in Hospitality Management or a related field.",
      " Requires a minimum of 5 years of managerial experience in the restaurant industry.",
      " Proficiency in both Arabic and English languages is essential for effective communication and customer service.",
    ]
  }
}

export default function Careers() {
  const [showRequirement, setShowRequirements] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [position, setPosition] = useState("")
  useEffect(() => {
    if (showRequirement) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showRequirement])

  const showRequirementHandler = (position) => {
    setPosition(vacancies[position])
    setShowRequirements(true)
  }
  const hideRequirementHandler = () => {
    setPosition("")
    setShowRequirements(false)
  }
  return (
    <>
      <div className='container mx-auto py-[60px] grid grid-cols-1 md:grid-cols-3 gap-10 p-[5%]'>
        <div className='shadow-lg h-[400px] w-full rounded-[10px] border-primary border-[1px] flex flex-col justify-center items-center gap-5'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1"
            viewBox="0 0 512 512" className='w-[80px] h-[80px]'
          >
            <path
              d="M2440 5109c-172-20-335-70-454-141-83-49-201-164-235-229-17-32-37-53-68-69-95-50-179-180-218-335-16-60-19-132-22-510l-5-439-28-33c-113-128-22-430 159-525 41-22 44-27 61-95 29-111 78-220 147-321l63-93v-417l-325-81c-178-44-355-92-392-106-103-39-198-100-286-184-122-116-193-232-244-398l-27-88-4-497-3-498 25-25c30-30 74-33 107-6l24 19 6 494c6 544 6 541 74 679 71 144 182 255 326 327 61 31 151 57 431 127l353 88 70-43c153-95 330-161 481-180 71-9 147-33 377-118l287-107V49l25-24c32-33 78-33 110 0l25 24v668c0 573-2 672-15 690-10 14-79 45-210 93l-195 73 81 33c71 29 184 88 255 134 19 12 63 3 370-74 388-97 461-124 574-218 81-68 140-146 190-251 66-140 70-176 70-692V49l25-24c32-33 78-33 111 0l25 25-3 498-4 497-27 88c-51 166-122 282-244 398-88 84-183 145-286 184-37 14-214 62-392 106l-325 81v425l33 44c80 105 152 256 178 372 12 55 15 60 59 82 25 13 65 44 89 70 42 46 101 155 101 188 0 13 8 17 34 17 19 0 69 7 111 15 203 38 339 168 400 380 62 217 39 469-66 703-75 168-257 389-434 527-374 292-879 437-1345 384zm517-178c695-129 1235-683 1199-1231-6-105-23-176-56-245-25-51-40-58-40-17 0 85-90 299-154 366-41 44-85 48-121 11-34-34-32-73 6-121 70-86 129-276 115-369-7-43-8-44-57-54-84-18-94-16-107 27-7 21-23 49-37 62l-25 23v356c0 341-1 358-21 395-11 21-19 39-17 41s26-1 53-5c79-14 94-12 120 15 32 31 33 78 2 109-30 30-165 51-276 43-73-4-78-3-136 31-33 19-95 49-139 67-83 34-83 45 0 45 85 0 125 80 68 137-25 25-29 26-108 19-99-7-216-36-290-71l-55-26-124 12c-68 6-178 10-245 8s-122-3-122-2c0 7 121 62 167 77 83 28 109 91 58 141-32 32-59 31-155-6-106-40-213-112-281-188-55-60-59-63-148-86-115-31-242-83-327-135-36-22-68-40-70-40-23 0 45 137 87 177 47 44 97 63 169 63 51 0 65 4 85 25 35 34 33 79-5 115l-30 28 52 47c93 84 268 152 451 175 116 14 386 4 514-19zm-47-560c257-45 493-156 584-275 26-34 26-36 26-216v-180l-39 20c-149 76-488 120-921 120s-772-44-921-120l-39-20v180c0 180 0 182 26 216 35 46 133 118 217 161 126 63 305 111 492 133 130 14 443 4 575-19zm-23-701c226-15 254-20 263-44 73-182 118-266 178-336l32-38v-175c0-267-34-399-149-574-169-256-457-436-671-421-279 21-627 316-734 624-37 104-46 179-46 371v172l50 66c58 76 90 136 135 250l31 80 52 7c172 25 623 35 859 18zm-1111-104c-15-37-79-140-103-167-12-14-19-15-44-6-27 10-29 15-29 60 0 39 5 53 28 74 29 28 116 71 145 72 16 1 16-2 3-33zm1636 10c83-37 108-66 108-123 0-45-2-50-29-60-25-9-32-8-44 6-24 27-88 130-103 167-18 43-7 44 68 10zm-1834-332c21-6 22-11 22-121 0-97-2-114-14-104-34 29-77 177-63 215 7 17 19 19 55 10zm2016-54c-1-56-34-149-60-171-12-10-14 7-14 104 0 124 2 128 55 124 18-2 20-9 19-57zM2085 2102c77-57 241-136 328-159l67-17v-238l-45 6c-91 14-264 83-376 151l-59 36v140c0 110 3 139 13 133 6-5 39-28 72-52zm1013-234c-80-60-314-159-411-173l-47-7v238l73 17c88 21 249 100 337 165l65 48 3-135c2-131 2-136-20-153z"
              transform="matrix(.1 0 0 -.1 0 512)"
            ></path>
            <path
              d="M2185 1175c-50-49-15-135 55-135 19 0 40 9 55 25 16 15 25 36 25 55s-9 40-25 55c-15 16-36 25-55 25s-40-9-55-25zM2825 1175c-50-49-15-135 55-135 41 0 80 39 80 80s-39 80-80 80c-19 0-40-9-55-25zM2185 695c-50-49-15-135 55-135 41 0 80 39 80 80 0 19-9 40-25 55-15 16-36 25-55 25s-40-9-55-25zM2825 695c-50-49-15-135 55-135 41 0 80 39 80 80s-39 80-80 80c-19 0-40-9-55-25zM1385 535l-25-24V49l25-24c32-33 78-33 110 0l25 24v462l-25 24c-15 16-36 25-55 25s-40-9-55-25zM3625 535l-25-24V49l25-24c32-33 78-33 110 0l25 24v462l-25 24c-15 16-36 25-55 25s-40-9-55-25zM2185 215c-50-49-15-135 55-135 41 0 80 39 80 80s-39 80-80 80c-19 0-40-9-55-25zM2825 215c-50-49-15-135 55-135 41 0 80 39 80 80s-39 80-80 80c-19 0-40-9-55-25z"
              transform="matrix(.1 0 0 -.1 0 512)"
            ></path>
          </svg>
          <p className='font-[700] text-[35px]'>Tandoori Chef</p>
          <p>£16/Hour</p>
          <Button className='bg-primary font-julius capitalize'
            onClick={() => showRequirementHandler("tandoori")}
          >View Requirements</Button>
        </div>
        <div className='shadow-lg h-[400px] w-full rounded-[10px] border-primary border-[1px] flex flex-col justify-center items-center gap-5'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1"
            viewBox="0 0 512 512" className='w-[80px] h-[80px]'
          >
            <path
              d="M1965 5069c-262-36-471-129-626-276-177-169-269-381-288-659-9-132 0-297 24-437l17-99-40-41c-72-76-79-149-31-345 35-142 67-235 106-302 35-61 110-138 148-150 28-9 34-19 59-98 33-100 81-208 119-269 27-42 27-43 27-241v-199l-497-193c-274-106-534-211-577-234-57-29-102-62-155-116-87-86-140-171-179-285l-27-80-3-477-3-478 25-25 25-25h4228l27 21 26 20v508l273 3c260 3 274 4 314 25 46 25 84 69 108 126 13 32 15 227 15 1683 0 1221-3 1657-12 1685-15 51-69 114-122 142l-41 22-763 5-763 5-23 66c-56 159-174 271-330 310-43 11-51 18-93 83-107 166-255 263-474 311-89 19-392 28-494 14zm479-169c167-42 327-163 395-297 33-66 38-69 146-88 59-10 108-39 153-91 124-140 133-427 25-786-33-112-27-145 32-168 59-22 65-28 65-63 0-66-70-316-112-402-31-62-67-95-104-95-52 0-72-26-98-125-83-312-256-555-469-658-188-91-371-90-567 5-71 34-100 56-180 137-132 134-213 282-279 510-16 57-36 108-43 112-7 5-27 9-44 9-43 0-59 16-93 90-33 73-107 311-117 377-8 52 14 93 50 93 31 0 79 56 73 84-51 234-67 349-67 488 0 474 240 770 705 868 132 27 422 28 529 0zm2473-793c17-17 18-98 21-1647 1-1091-1-1630-8-1630-5 0-10-9-10-20s-9-29-20-40c-19-19-33-20-274-20h-254l-4 153c-4 132-8 162-32 232-54 158-173 309-305 386-34 20-293 126-576 234l-515 198v389l59 122c33 66 71 158 86 203 22 68 31 83 53 91 70 24 150 128 201 261 41 106 91 317 91 383 0 62-36 147-74 172l-24 15 25 93c28 110 50 240 59 361l7 87 738-2c693-3 739-4 756-21zM1786 2020c134-87 260-124 424-124 200 0 379 71 528 208l43 39-3-109-3-108-280-243c-154-133-284-243-289-243-4 0-136 107-292 237l-284 238v227l41-37c22-20 74-58 115-85zm1194-251c36-15 64-32 63-36-2-13-203-486-207-491-6-5-438 118-449 128-5 4 103 105 239 224 197 171 253 215 269 210 11-4 49-19 85-35zm-1194-183c135-114 242-212 237-216-16-14-465-132-472-124-11 13-204 485-200 488 12 9 166 65 176 63 7-1 123-96 259-211zm1754-36c173-67 340-134 370-148 114-56 229-192 272-321 21-63 22-87 26-473l4-408H2693l-117 335c-66 190-114 341-109 348 16 27 175 227 185 233 6 4 62-6 125-22 104-26 116-27 140-14 22 12 47 63 135 275 141 339 135 328 156 322 9-2 159-59 332-127zm-2220-170c61-146 118-275 125-287 24-36 61-36 191 0l121 33 96-123c54-68 97-127 97-132 0-4-52-155-115-336s-115-330-115-332-342-3-760-3H200v393c0 430 2 453 60 566 35 71 122 168 188 210 70 44 745 303 754 288 3-7 56-131 118-277zm1036-167c74-20 134-39 134-43 0-15-68-108-121-165-31-33-61-70-67-81-14-27-1-79 58-244 23-63 71-197 106-297l63-183h-637l114 336c63 184 114 348 114 362 0 19-21 53-70 112-80 96-125 158-119 164 5 5 260 74 278 75 7 1 74-15 147-36z"
              transform="matrix(.1 0 0 -.1 0 512)"
            ></path>
            <path
              d="M3696 3739c-33-26-37-88-6-119 18-18 33-20 128-20 79 0 113 4 129 15 44 31 37 111-13 134-14 6-67 11-118 11-79 0-97-3-120-21zM4252 3744c-13-9-27-27-32-40-11-29 5-81 30-94 10-6 101-10 202-10 146 0 188 3 205 15 44 31 37 111-13 134-16 7-90 11-197 11-142 0-177-3-195-16zM3709 3119c-32-12-53-56-43-93 11-46 38-56 154-56 77 0 111 4 127 15 44 31 37 111-13 134-30 13-188 13-225 0zM4252 3114c-13-9-27-27-32-40-11-29 5-81 30-94 10-6 101-10 202-10 146 0 188 3 205 15 44 31 37 111-13 134-16 7-90 11-197 11-142 0-177-3-195-16zM3703 2488c-47-23-53-103-10-133 30-21 224-21 254 0 44 31 37 111-13 134-31 14-201 13-231-1zM4252 2484c-13-9-27-27-32-40-11-29 5-81 30-94 10-6 102-10 203-10 206 0 221 4 233 67 5 27 1 37-24 63l-30 30h-179c-148 0-183-3-201-16zM4235 1850c-26-29-23-89 5-112 20-16 45-18 210-18 169 0 190 2 211 19 29 23 31 81 4 111-17 19-29 20-215 20s-198-1-215-20z"
              transform="matrix(.1 0 0 -.1 0 512)"
            ></path>
          </svg>
          <p className='font-[700] text-[35px]'>Restaurant Manager</p>
          <p>£17.50/ Hour</p>
          <Button className='bg-primary font-julius capitalize'
            onClick={() => showRequirementHandler("manager")}
          >View Requirements</Button>
        </div>
        <div className='shadow-lg h-[400px] w-full rounded-[10px] border-primary border-[1px] flex flex-col justify-center items-center gap-5'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1"
            viewBox="0 0 512 512" className='w-[80px] h-[80px]'
          >
            <path
              d="M2440 5109c-172-20-335-70-454-141-83-49-201-164-235-229-17-32-37-53-68-69-95-50-179-180-218-335-16-60-19-132-22-510l-5-439-28-33c-113-128-22-430 159-525 41-22 44-27 61-95 29-111 78-220 147-321l63-93v-417l-325-81c-178-44-355-92-392-106-103-39-198-100-286-184-122-116-193-232-244-398l-27-88-4-497-3-498 25-25c30-30 74-33 107-6l24 19 6 494c6 544 6 541 74 679 71 144 182 255 326 327 61 31 151 57 431 127l353 88 70-43c153-95 330-161 481-180 71-9 147-33 377-118l287-107V49l25-24c32-33 78-33 110 0l25 24v668c0 573-2 672-15 690-10 14-79 45-210 93l-195 73 81 33c71 29 184 88 255 134 19 12 63 3 370-74 388-97 461-124 574-218 81-68 140-146 190-251 66-140 70-176 70-692V49l25-24c32-33 78-33 111 0l25 25-3 498-4 497-27 88c-51 166-122 282-244 398-88 84-183 145-286 184-37 14-214 62-392 106l-325 81v425l33 44c80 105 152 256 178 372 12 55 15 60 59 82 25 13 65 44 89 70 42 46 101 155 101 188 0 13 8 17 34 17 19 0 69 7 111 15 203 38 339 168 400 380 62 217 39 469-66 703-75 168-257 389-434 527-374 292-879 437-1345 384zm517-178c695-129 1235-683 1199-1231-6-105-23-176-56-245-25-51-40-58-40-17 0 85-90 299-154 366-41 44-85 48-121 11-34-34-32-73 6-121 70-86 129-276 115-369-7-43-8-44-57-54-84-18-94-16-107 27-7 21-23 49-37 62l-25 23v356c0 341-1 358-21 395-11 21-19 39-17 41s26-1 53-5c79-14 94-12 120 15 32 31 33 78 2 109-30 30-165 51-276 43-73-4-78-3-136 31-33 19-95 49-139 67-83 34-83 45 0 45 85 0 125 80 68 137-25 25-29 26-108 19-99-7-216-36-290-71l-55-26-124 12c-68 6-178 10-245 8s-122-3-122-2c0 7 121 62 167 77 83 28 109 91 58 141-32 32-59 31-155-6-106-40-213-112-281-188-55-60-59-63-148-86-115-31-242-83-327-135-36-22-68-40-70-40-23 0 45 137 87 177 47 44 97 63 169 63 51 0 65 4 85 25 35 34 33 79-5 115l-30 28 52 47c93 84 268 152 451 175 116 14 386 4 514-19zm-47-560c257-45 493-156 584-275 26-34 26-36 26-216v-180l-39 20c-149 76-488 120-921 120s-772-44-921-120l-39-20v180c0 180 0 182 26 216 35 46 133 118 217 161 126 63 305 111 492 133 130 14 443 4 575-19zm-23-701c226-15 254-20 263-44 73-182 118-266 178-336l32-38v-175c0-267-34-399-149-574-169-256-457-436-671-421-279 21-627 316-734 624-37 104-46 179-46 371v172l50 66c58 76 90 136 135 250l31 80 52 7c172 25 623 35 859 18zm-1111-104c-15-37-79-140-103-167-12-14-19-15-44-6-27 10-29 15-29 60 0 39 5 53 28 74 29 28 116 71 145 72 16 1 16-2 3-33zm1636 10c83-37 108-66 108-123 0-45-2-50-29-60-25-9-32-8-44 6-24 27-88 130-103 167-18 43-7 44 68 10zm-1834-332c21-6 22-11 22-121 0-97-2-114-14-104-34 29-77 177-63 215 7 17 19 19 55 10zm2016-54c-1-56-34-149-60-171-12-10-14 7-14 104 0 124 2 128 55 124 18-2 20-9 19-57zM2085 2102c77-57 241-136 328-159l67-17v-238l-45 6c-91 14-264 83-376 151l-59 36v140c0 110 3 139 13 133 6-5 39-28 72-52zm1013-234c-80-60-314-159-411-173l-47-7v238l73 17c88 21 249 100 337 165l65 48 3-135c2-131 2-136-20-153z"
              transform="matrix(.1 0 0 -.1 0 512)"
            ></path>
            <path
              d="M2185 1175c-50-49-15-135 55-135 19 0 40 9 55 25 16 15 25 36 25 55s-9 40-25 55c-15 16-36 25-55 25s-40-9-55-25zM2825 1175c-50-49-15-135 55-135 41 0 80 39 80 80s-39 80-80 80c-19 0-40-9-55-25zM2185 695c-50-49-15-135 55-135 41 0 80 39 80 80 0 19-9 40-25 55-15 16-36 25-55 25s-40-9-55-25zM2825 695c-50-49-15-135 55-135 41 0 80 39 80 80s-39 80-80 80c-19 0-40-9-55-25zM1385 535l-25-24V49l25-24c32-33 78-33 110 0l25 24v462l-25 24c-15 16-36 25-55 25s-40-9-55-25zM3625 535l-25-24V49l25-24c32-33 78-33 110 0l25 24v462l-25 24c-15 16-36 25-55 25s-40-9-55-25zM2185 215c-50-49-15-135 55-135 41 0 80 39 80 80s-39 80-80 80c-19 0-40-9-55-25zM2825 215c-50-49-15-135 55-135 41 0 80 39 80 80s-39 80-80 80c-19 0-40-9-55-25z"
              transform="matrix(.1 0 0 -.1 0 512)"
            ></path>
          </svg>
          <p className='font-[700] text-[35px]'>Mandi Chef</p>
          <p>£39k to £40k </p>
          <Button className='bg-primary font-julius capitalize'
            onClick={() => showRequirementHandler("mandi")}
          >View Requirements</Button>
        </div>
      </div>
      {showRequirement &&
        <div className='fixed z-[100] top-0 h-[100vh] w-[100vw] flex justify-center items-center backdrop-blur-sm p-[5%]'>
          <div className='max-h-[500px] w-[800px] bg-white rounded-[10px] p-[20px] border-primary border-[1px] overflow-y-scroll'>
            {showForm ? (
              <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer"
                  onClick={() => setShowForm(false)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <CareersForm position={position} />
              </div>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer"
                  onClick={() => hideRequirementHandler()}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <p className='text-[30px] font-[600] text-center'>{position.title}</p>
                <ul className='p-[15px] md:px-[40px]'>
                  <p className='font-[700]'>Duties</p>
                  {position?.duties.map((desc, id) => {
                    return (
                      <li className='list-disc' key={id}>{desc}</li>
                    )
                  })}
                  <p className='font-[700] mt-[10px]'>Qualifications</p>
                  {position?.qualifications.map((desc, id) => {
                    return (
                      <li className='list-disc' key={id}>{desc}</li>
                    )
                  })}
                </ul>
                <div className='flex justify-end'>
                  <Button className='bg-primary font-julius capitalize '
                    onClick={() => setShowForm(true)}
                  >Apply Now</Button>
                </div>
              </>
            )}
          </div>
        </div>
      }
    </>
  )
}
