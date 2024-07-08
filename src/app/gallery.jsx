'use client'

import Loading from '@/components/loading';
import applyScrollAnimation from '@/components/scroll-animation'
import { Button } from '@material-tailwind/react';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
const axios = require('axios');

export default function Gallery() {
  const [data, setData] = useState([
    {
      "id": "18069878185536944",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/449736725_17883549987078660_3675227142094602914_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=iox1yoDJr38Q7kNvgGTmjlO&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYAP8gETwglV7KmXrbwe27qSOcrQuu7s3xMCVb2OgHwzkg&oe=6691E7E8",
      "permalink": "https://www.instagram.com/p/C89akD9Ir50/"
    },
    {
      "id": "18130677667354145",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/0A4212C4B448941BD34AD415E7DB9884_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&vs=1676869979728708_1032010250&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8wQTQyMTJDNEI0NDg5NDFCRDM0QUQ0MTVFN0RCOTg4NF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dKRGh2QnEtZWNIT1hpUUJBSUh6c1NWRkVQcERicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJsTAkZSV5IFAFQIoAkMzLBdAEOFHrhR64RgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYANvnVzyI9_R28xxT3NTeVJBe4b1p5vVGFNp_3GF8SuYg&oe=668DE7AC&_nc_sid=1d576d",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/448777042_444961095114685_3742035107532440825_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=8-yYHnPdLTcQ7kNvgHC8MmS&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYD8Oyx_8Y5E76GmtuszAA5iMjq2Zv6p_-X5-s1cuNTb_A&oe=6691DF6D",
      "permalink": "https://www.instagram.com/reel/C8etHhYoLx0/"
    },
    {
      "id": "17866822719090910",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/CE4C44E6A96AE94DE54A7E76CA77A582_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&vs=927771392455785_1137025588&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9DRTRDNDRFNkE5NkFFOTRERTU0QTdFNzZDQTc3QTU4Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dEZEN2UnJLVWhxdkF4UURBREM2V3ByNDNvWXhicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJqiW7JmA%2FO1AFQIoAkMzLBdAN6p%2B%2Bdsi0RgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYC2SeUS4-ZztrYOf85zN8aZxgSifVHSs2kCaQCRbZ9Vqg&oe=668DF742&_nc_sid=1d576d",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/448468021_758319326374277_1142945488583430713_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=cb4kDUQdeaMQ7kNvgFrsx-9&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYDcJCgEttFyqIBry1i6Pwf7aEmKLWXJMJWmaLRapR5N4w&oe=6691CF4E",
      "permalink": "https://www.instagram.com/reel/C8cF2a1ozUA/"
    },
    {
      "id": "18267248278208197",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/448245067_2130228160687191_6717479585799428833_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=aLjrbfkvjskQ7kNvgHMgvHm&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYBGS1Tmh5ktxlbHfHT96WBEt9XKMIvZcSUWEIqau43ayA&oe=6691D709",
      "permalink": "https://www.instagram.com/p/C8QjElwItFc/"
    },
    {
      "id": "17949870734797834",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/448270360_818787559829363_7939045869612975329_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=6dmQt-2uLl4Q7kNvgFxLO2V&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYCulbonUXE2CqpuCFAEIAqpT3hCZiSKBJOMEPZZUqrXxA&oe=6691E7F0",
      "permalink": "https://www.instagram.com/p/C8Mq2ytowPc/"
    },
    {
      "id": "18045763714769003",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/B146EDDA12FD255B89FA58A772DED281_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&vs=811449327302549_175485641&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9CMTQ2RUREQTEyRkQyNTVCODlGQTU4QTc3MkRFRDI4MV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dMeE5zeG9LalZFWGEyRUdBRjkzdFhQcDVUWlRicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvzO3JWyroFBFQIoAkMzLBdANAFHrhR64RgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYCgiauQ11sTvI1tgAtbNzXFjzEIvPM1N04lHVPQU8clSw&oe=668DFDFC&_nc_sid=1d576d",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/447923207_1855351274892877_229608405055337237_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=v0EuLUqlt9wQ7kNvgGXSGFy&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYCYCeUwgzVzKieMhSfPjjMTGbf7NE8faEDGsid_leCv6g&oe=6691FF74",
      "permalink": "https://www.instagram.com/reel/C77h9wqIauv/"
    },
    {
      "id": "18052288039712852",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/447770429_827027435534534_1983124393769129133_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=D50ULfiLBJAQ7kNvgEz2Y3J&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYDX6jEpu_FhtZ8TV4cvzt-CTF6HmBEoR0RT-0XY24W5Qw&oe=6691ED7E",
      "permalink": "https://www.instagram.com/p/C76n17HIrpO/"
    },
    {
      "id": "18084527032456990",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/441602377_17877918174078660_5007787454039930176_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=rfMaVK6hwZEQ7kNvgGXpCMx&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYCoKLMrPI0RmoxsEcBr_DLn3z0KYm6LDGLrPQHev9LSdA&oe=6691DCC7",
      "permalink": "https://www.instagram.com/p/C7KHhryoAE_/"
    },
    {
      "id": "18051329851674203",
      "media_type": "CAROUSEL_ALBUM",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/443711867_17877668292078660_2491602210373234338_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=vyVMCR5c1S0Q7kNvgG2fVxG&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYA5wAemUIg0R7OTXKvKSPcVunAtaK2gPaSNqVr4u3VCeg&oe=6691D7EE",
      "permalink": "https://www.instagram.com/p/C7E0Mqdo269/"
    },
    {
      "id": "18081051013462331",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/5E41D3AB682C56DE0368533A0D3A33A5_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&vs=966338898827428_334945417&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC81RTQxRDNBQjY4MkM1NkRFMDM2ODUzM0EwRDNBMzNBNV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dFWkVUUnF5a183MlZzVUNBSWZtTVUybnZLMGVicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJoy1ltaxyeNAFQIoAkMzLBdAK0zMzMzMzRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYC8U4g6j9h3J_Y0NFKUZAk7piRVN1JWWYEoE5lZuJ5RJw&oe=668DE389&_nc_sid=1d576d",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/443554309_322869497343884_2101003756882127072_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=z0OHNBKSkJIQ7kNvgG0hCZS&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYBdRT75lemT3IP00kXNitebcnvoS95WElwiKx041Hl6VA&oe=6691F537",
      "permalink": "https://www.instagram.com/reel/C61sPJXIeCa/"
    },
    {
      "id": "17884667990984199",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/438145974_17876480763078660_8467586953024868407_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=jIDAjhW24j8Q7kNvgEsnGT_&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYBfUKCQUYMPLmwKm63sdDl6xn_hNtXOgmZ5T_NKMiQL7Q&oe=6691F3BC",
      "permalink": "https://www.instagram.com/p/C6tz4g7IEgW/"
    },
    {
      "id": "18165027559307142",
      "media_type": "CAROUSEL_ALBUM",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/437477179_17874547311078660_793951788206527742_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=DW1EwPtv_vgQ7kNvgHRC11x&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYDUJVSJ1MPRHCdg81nAwftH_bqRn8Qpa8ha-OTHiAy4MQ&oe=6691CD3F",
      "permalink": "https://www.instagram.com/p/C6EU5YfImUJ/"
    },
    {
      "id": "17932479560830384",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/F54CC65DDF8E18FED4C1DF2D7B11D884_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&vs=793433182256638_1776834320&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9GNTRDQzY1RERGOEUxOEZFRDRDMURGMkQ3QjExRDg4NF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dJaWhBeHJKYlAwY3RWOERBSFVzbmdscGZLRVlicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJpTFq4DmvtE%2FFQIoAkMzLBdANIhysCDEnBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYAGMWcrtCZ-7Qfr3sGmProUDgI6d2Ctr2Lz6kAG71dERg&oe=668DE3C6&_nc_sid=1d576d",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/436447280_1884400568658899_6360678858075838791_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=QK8nY0eCI34Q7kNvgEiguQb&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYDJliwzVTF0i7gAnBl1jAtJkuNhZNPxCvEneLBB9uTMfQ&oe=669200DC",
      "permalink": "https://www.instagram.com/reel/C5tUMelISqA/"
    },
    {
      "id": "17893043828932104",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/434451902_17873017386078660_6891697622806888888_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=msP3iXg_bM4Q7kNvgEALxmX&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYAOR0sYfI5alg3cbsQzn3uz4CEHPfik34nNL_T1o0l4XQ&oe=6691D321",
      "permalink": "https://www.instagram.com/p/C5kazQYIKQq/"
    },
    {
      "id": "18130654414336828",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/E74D9D8A79F0520952923F186B0E2DA5_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&vs=1098177261514399_3274648295&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9FNzREOUQ4QTc5RjA1MjA5NTI5MjNGMTg2QjBFMkRBNV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dMRko1aGs1aUpmcHJvY0dBT19iWl83LWFGSlpicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJpDr%2BrrDwc8%2FFQIoAkMzLBdALwAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYAzpzgT21tEvWIUhnT7cbETWZAYwljGUNekd5N9GLhk1w&oe=668DDDA4&_nc_sid=1d576d",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/435676296_341381332255563_7074061453772759779_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=jIwqMxJRgO4Q7kNvgFZ8_IB&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYB1LVLaxeLMWo4K04oAhrYRDgsRWDfXU0yU4R75ZJEXew&oe=6691EB4D",
      "permalink": "https://www.instagram.com/reel/C5bg0MKInpe/"
    },
    {
      "id": "18422184091047593",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/784204AE89E0E9081157D82CBB94ECB2_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&vs=963995498584488_1186703340&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC83ODQyMDRBRTg5RTBFOTA4MTE1N0Q4MkNCQjk0RUNCMl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dKYWg1aG1Dcl9adHlwUUJBUFItSGppNzREZ3FicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJv7HmY2%2F2rk%2FFQIoAkMzLBdAQR7ZFocrAhgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYC52VkY0xNYC8S3RIDVUYiBIoZuDjtIeis1ryeipxeDOg&oe=668E0054&_nc_sid=1d576d",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/433842304_384447131180143_3976479135596544719_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=Msajd6u8yL0Q7kNvgHizX2Y&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYDrLoCe3pZLHeajprT0_q0ExJgYOe61Krsm6PbVTwPOew&oe=6691CA41",
      "permalink": "https://www.instagram.com/reel/C5EWaM6I69o/"
    },
    {
      "id": "18085225108429777",
      "media_type": "CAROUSEL_ALBUM",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/431495545_17870391477078660_3832918002679351912_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=7SZqT5s9ZTIQ7kNvgFCbhR_&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYDCFU1VbCUpHO-7ZP1T9bkxuvpQrhFeChthNevFKAKnqA&oe=6691D6E3",
      "permalink": "https://www.instagram.com/p/C4tLitoIvfi/"
    },
    {
      "id": "18423738391017840",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/433140607_17870043294078660_415042715148213728_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=O2Xd6eYdDwcQ7kNvgHoWe6n&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYDpMhYQin34_RgNzLpdsaaxSFisM1Flcxng-My7SQrGoA&oe=6691F53D",
      "permalink": "https://www.instagram.com/p/C4loM3wv37J/"
    },
    {
      "id": "18032608585731128",
      "media_type": "CAROUSEL_ALBUM",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/431490004_17869798422078660_7332607284138985933_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=jtQ9IJPc7X8Q7kNvgHNkFNJ&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYBoV3v_ujHzkfylnhAdObwchmgvbEnsNTDCTTmJ-XEWJw&oe=6691FE59",
      "permalink": "https://www.instagram.com/p/C4gfa_AI7L9/"
    },
    {
      "id": "18017039233983943",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/0C43E757496C00F913134A45C006A289_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&vs=1119664219161165_3150549249&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8wQzQzRTc1NzQ5NkMwMEY5MTMxMzRBNDVDMDA2QTI4OV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dCYUN1eGxmZ1p2ZVNfUVlBREt6aXlKekJHd29icV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJu7Qz6q0gLpBFQIoAkMzLBdARR4UeuFHrhgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYA8R5ave6e4anIFK8yVe0RylVBKi0RURuiHNgRA1FDGRQ&oe=668E08F9&_nc_sid=1d576d",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/432680730_1274843039901721_7868136877061667796_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=VOr0gbFt75sQ7kNvgHwNe_h&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYAqh6RU3tCNcuWmxYqWj0_pdPcR0W9hYQfvCrxdcXInxw&oe=6691CD7B",
      "permalink": "https://www.instagram.com/reel/C4WEMIto5Yk/"
    },
    {
      "id": "18021169319040989",
      "media_type": "CAROUSEL_ALBUM",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/431262209_17868807372078660_5309328762861482543_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=iZsJriKDBsAQ7kNvgEyrB9q&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYAYUAwxUzYcc7wE20JGO_f63_cd2-NexaVFLMssjlpiuw&oe=6691F932",
      "permalink": "https://www.instagram.com/p/C4MCKdJozVM/"
    },
    {
      "id": "18332977816105565",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/428502302_17868063768078660_8085527373076555685_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=q-HBp0Td4pMQ7kNvgFVyc6M&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYC7l-RKFuNmr5h5kanEckupgDbO8qDcAW26SUNjE_11NA&oe=6691D9AB",
      "permalink": "https://www.instagram.com/p/C38JTHQIgTW/"
    },
    {
      "id": "18075077911454512",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/484FE5BD49CE3082C3ED0099F3C17997_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&vs=1118725089330464_3414098536&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC80ODRGRTVCRDQ5Q0UzMDgyQzNFRDAwOTlGM0MxNzk5N192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dEQWVZeGxsdjF2VDFrNEJBSkd5TnZjRFpyeFBicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJoT%2BvL7Wntk%2FFQIoAkMzLBdAJDMzMzMzMxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYBXzgxUdFsl9_xNmDNfYvvTdKxgbKwsdIjUF4TtdHo95Q&oe=668DFD64&_nc_sid=1d576d",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/428172020_725823382987256_6744587189981242379_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=D2xdzzC0ElcQ7kNvgELLFCi&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYC-KWyeVkD1cufedPJqiV8TBmjSfgj4pKHfidVkryBDDA&oe=6691F503",
      "permalink": "https://www.instagram.com/reel/C3fxMm0oal2/"
    },
    {
      "id": "18013851653507612",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/424974990_17866055931078660_20288214325201006_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=nLQfXhfDLdoQ7kNvgHSnI_f&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYCJcPophzNbFqgG4_Cq6D_1oAO_B8aro-XWa0rCASPPYw&oe=6691DD1F",
      "permalink": "https://www.instagram.com/p/C3QzuBTIRUr/"
    },
    {
      "id": "17905803191923345",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/7F41444105B07C206C1A2B65CB354294_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&vs=366127799702623_2609659645&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC83RjQxNDQ0MTA1QjA3QzIwNkMxQTJCNjVDQjM1NDI5NF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBeDZXUm0zSEE1THlrb0JBSzNKa29wRko5SVlicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJviKrePp84JAFQIoAkMzLBdAOo2RaHKwIRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYCxx-vPu_QFqSTlQaLBa4Sm8BRth0G9pVNt_YXjtgf87A&oe=668DFC67&_nc_sid=1d576d",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/425684631_918617609709297_1903100486529689681_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=pL36IHMPMKwQ7kNvgFKozE_&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYD6KgGbWK9hdGQFCHWXUExWpnF9E7IXTFJmAdhqmY1dTw&oe=6691CBBF",
      "permalink": "https://www.instagram.com/reel/C3GHDC9oVl2/"
    }
  ])
  const [showAll, setShowAll] = useState(false);
  const visiblePosts = showAll ? data : data.slice(0, 8);
  useEffect(() => {
    applyScrollAnimation('.scrollElement4', '.triggerElement4')
    // const apiEndpoint = 'https://v1.nocodeapi.com/mohammedajmal/instagram/cHdBEvCuLNKJBCxr';
    // const apiEndpoint = `https://bright-button-dove.cyclic.app/instagram-media`;
    // const apiEndpoint = `https://khaleej-backend.onrender.com/instagram-media`;

    // axios.get(apiEndpoint)
    //   .then(response => {
    //     // Handle the response data
    //     setData(response?.data)
    //     // console.log(response?.data);
    //   })
    //   .catch(error => {
    //     // Handle errors
    //     console.error('Error:', error.message);
    // });
  }, [])
  return (
    <>
      {
        data &&
        <section className='container mx-auto px-[5%] lg:px-0 py-20 ' id='gallery'>
          < p className='text-[42px] md:text-[64px] font-[600] leading-normal pb-[40px] text-left font-source scrollElement' > Khaleej Gallery</p >
          <div className='w-full max-w-[310px] h-[3px] bg-[#F3F25B]'></div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 triggerElement4 ">

            {visiblePosts?.map((post, id) => {
              return (
                <Link
                  href={post?.permalink}
                  target="_blank"
                  key={id}
                >
                  <div className='relative'>
                    <Image
                      height={300}
                      width={300}
                      className="h-[270px] max-w-[100%] rounded-lg object-cover mx-auto"
                      src={post?.media_type == 'IMAGE' ? post?.media_url : post?.thumbnail_url}
                      alt="gallery-photo"
                    />
                    {post?.media_type === 'VIDEO' && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" className='absolute top-5 right-8 h-[26px] w-[26px]'>
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                      </svg>
                    )}

                  </div>
                </Link>
              )
            })}
          </div>
          <div className='w-full flex justify-center mt-[40px]'>
            <Button onClick={() => setShowAll(!showAll)} className='bg-secondary mx-auto text-black'>View {showAll ? "Less" : "More"}</Button>
          </div>
        </section >
      }
    </>
  )
}
