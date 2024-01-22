'use client'

import Loading from '@/components/loading';
import applyScrollAnimation from '@/components/scroll-animation'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
const axios = require('axios');

export default function Gallery() {
  const [data, setData] = useState([
    {
        "id": "17999590814192394",
        "media_type": "IMAGE",
        "media_url": "https://scontent-iad3-2.cdninstagram.com/v/t39.30808-6/420053188_17862994428078660_150975365778798428_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=384e48&_nc_ohc=RDzKtADw8JYAX-U5Clw&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfCvo-9S7bYNFD1NWrEx1TbT1HIGk_ZZc4lwFWiojLeXbQ&oe=65B28F61",
        "permalink": "https://www.instagram.com/p/C2S5hXho5VH/"
    },
    {
        "id": "17918661647841893",
        "media_type": "VIDEO",
        "media_url": "https://scontent-iad3-2.cdninstagram.com/o1/v/t16/f1/m82/BC4FD231623391296A9B41D7D662C486_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=105&vs=1127480808622112_1502151565&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9CQzRGRDIzMTYyMzM5MTI5NkE5QjQxRDdENjYyQzQ4Nl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dGWFI0UmdiYll5NnZlTUFBTDRnX2lxRlo1WV9icV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvqq4Jnr2ZFAFQIoAkMzLBdAJmZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfCDgI2r_AmItIVpzGEUZrNtipBOQvLxttFbBa2xsaO4HQ&oe=65B02A9A&_nc_sid=1d576d&_nc_rid=0669cfc2f0",
        "thumbnail_url": "https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/418767603_390036703684305_1821358160580421016_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=384e48&_nc_ohc=uiq9F8cdicMAX-TqipQ&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfDHbtCbijDCP9hMlPT8zbyiwHSaUs8AYBd97fsmA_funQ&oe=65B2F35E",
        "permalink": "https://www.instagram.com/reel/C2F5lRmIt68/"
    },
    {
        "id": "18070358725459262",
        "media_type": "VIDEO",
        "media_url": "https://scontent-iad3-2.cdninstagram.com/o1/v/t16/f1/m82/164AF36EED6E6775C6F716232AF40299_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=102&vs=1119449676159494_4286020742&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8xNjRBRjM2RUVENkU2Nzc1QzZGNzE2MjMyQUY0MDI5OV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dEY0gzaGpVcVFNSDRiNENBUHZHMkhvcVZvZ1NicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvqEqcbLn91AFQIoAkMzLBdAKCJN0vGp%2FBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfAzv4PXbeNBMgVkjj7ulDREhTf9wcxnFtSJIKmKM4y9uQ&oe=65AFB023&_nc_sid=1d576d&_nc_rid=26c1cb28aa",
        "thumbnail_url": "https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/416959389_748346350676562_8785123124532733226_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=384e48&_nc_ohc=DsjxPk-55e0AX9hF1HA&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfDe1NhgkHg2Qk6WGkFWz87yW0W6UWpR1WTWXCdeThiXLg&oe=65B3FA12",
        "permalink": "https://www.instagram.com/reel/C1ztRv5ohQy/"
    },
    {
        "id": "18043295815608178",
        "media_type": "VIDEO",
        "media_url": "https://scontent-iad3-2.cdninstagram.com/o1/v/t16/f1/m82/B442ACB6F2925829814DAE69FA4A4E8D_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=109&vs=1761374601005507_4020464405&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9CNDQyQUNCNkYyOTI1ODI5ODE0REFFNjlGQTRBNEU4RF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dFdDF2aGlwT2h6anhpb0RBTXB4VmNzZkRzTlJicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJrSPmPWIm4VAFQIoAkMzLBdAI3dLxqfvnhgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfBRh6QwvPBPCZeNeJZhx7wC7SPPRJ8pvoLmlCVrrmQIkA&oe=65B0379E&_nc_sid=1d576d&_nc_rid=0b1e2e2963",
        "thumbnail_url": "https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/414231306_318851551124970_7261565011280111387_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=384e48&_nc_ohc=gWaj6qXveFEAX857h2U&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfC0g0Hr4KG9ccZVBjrCzORIx-g-49mMvba6UTUIxAWywA&oe=65B334A0",
        "permalink": "https://www.instagram.com/reel/C1ex0QvNnfK/"
    },
    {
        "id": "18004182590197041",
        "media_type": "VIDEO",
        "media_url": "https://scontent-iad3-2.cdninstagram.com/o1/v/t16/f1/m82/1D4E4DEFB722377D9C7EA1565FDF2599_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=111&vs=711005837794454_1304510780&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8xRDRFNERFRkI3MjIzNzdEOUM3RUExNTY1RkRGMjU5OV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dOZDd1QmdSTHFUNks3VURBSHpPcTlPbnFQWWVicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJqDD05fdmLw%2FFQIoAkMzLBdAKUQYk3S8ahgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfBz47bod4_FzIVN8GHic3-XNM5cnI8T1Aj8o2G8lFhMHg&oe=65AFEBE3&_nc_sid=1d576d&_nc_rid=2532841074",
        "thumbnail_url": "https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/412651447_343492098395835_3299011829003894269_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=384e48&_nc_ohc=O-CWpc8qE10AX_R5zO1&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfCdQ_geXpgVIQlHXBQcKd1aKcVlmC5ibY03wJCXPUqOJA&oe=65B3132A",
        "permalink": "https://www.instagram.com/reel/C1Zxy3GIA0s/"
    },
    {
        "id": "18039070585620474",
        "media_type": "VIDEO",
        "media_url": "https://scontent-iad3-2.cdninstagram.com/o1/v/t16/f1/m82/B043DB387232B44F4970CB7E00295084_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=108&vs=903378450914622_1873713764&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9CMDQzREIzODcyMzJCNDRGNDk3MENCN0UwMDI5NTA4NF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dKekpreGdtTzJPeVdoWUJBSUNIUXdKazkzRmFicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJryw8u7EvL1AFQIoAkMzLBdAJjrhR64UexgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfA5NakqujSIqJHoe8Z8iKQMVJjj2iWPCG8qJ1aSR6-oEQ&oe=65B01BED&_nc_sid=1d576d&_nc_rid=8f212e736a",
        "thumbnail_url": "https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/412503746_906875921019087_177929473832614520_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=384e48&_nc_ohc=BiZzZD6lcJIAX905tkn&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfCn-wjMk-CmbOZpOnRJzxJ0jxiHX7l2LjsQTVNscZMp6A&oe=65B287FF",
        "permalink": "https://www.instagram.com/reel/C1SAkGrqW0R/"
    },
    {
        "id": "17940661637767583",
        "media_type": "VIDEO",
        "media_url": "https://scontent-iad3-2.cdninstagram.com/o1/v/t16/f1/m82/0643C6635D1620EA71E7E63C03BE28A8_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=106&vs=380622081207638_874102820&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8wNjQzQzY2MzVEMTYyMEVBNzFFN0U2M0MwM0JFMjhBOF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dOYlNyaGhybmpBUjFMc0FBTTUzRThTSE9EUjJicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJpj1%2FoHqrIBAFQIoAkMzLBdAMBDlYEGJNxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfCOq9If9h9t0maHJgkKwWWhIGNDTi4vr6p8GWW19nbZyQ&oe=65B0050D&_nc_sid=1d576d&_nc_rid=6178887978",
        "thumbnail_url": "https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/412409911_749163593724565_2592214953921380483_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=384e48&_nc_ohc=9dpU2c0LJWEAX_-Y0sG&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfAnOva3K0jWkGOHO2Z44sQhQPm5mqBVlYLr0kJZoRJeLg&oe=65B40423",
        "permalink": "https://www.instagram.com/reel/C1NUi1MLU1K/"
    },
    {
        "id": "17999460011515182",
        "media_type": "VIDEO",
        "media_url": "https://scontent-iad3-2.cdninstagram.com/o1/v/t16/f1/m82/B84D1E14F1F9F32A08670A6830BB9092_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=110&vs=373902945145944_426478814&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9CODREMUUxNEYxRjlGMzJBMDg2NzBBNjgzMEJCOTA5Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dJaXJraGpYandPRU9UY0RBR0p5OGVtQ21ya0ticV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJoKT8OWE1KBBFQIoAkMzLBdAJwAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfDnoVP6j7mYfaPFmBxzEw2APds5uOjEQDjegJpN-WOmHg&oe=65AFCA47&_nc_sid=1d576d&_nc_rid=33fc257c38",
        "thumbnail_url": "https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/412405180_2100162187001322_1672980343346052380_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=384e48&_nc_ohc=40YJPPc1HesAX--J-my&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfDAVg8op3GqJdo0QWJc6dGuWhHJ_pD665TtCzMDFvnoxQ&oe=65B27B1F",
        "permalink": "https://www.instagram.com/reel/C1H42DrqN45/"
    },
    {
        "id": "17961133988572534",
        "media_type": "VIDEO",
        "media_url": "https://scontent-iad3-2.cdninstagram.com/o1/v/t16/f1/m82/A643E0D1660E311492305EDB018D7886_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=101&vs=1353770235512989_1680033841&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9BNjQzRTBEMTY2MEUzMTE0OTIzMDVFREIwMThENzg4Nl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dDWVlsUmg0NGE1R0NROEZBRTVaVnF4U2RnRjBicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJobThLfto%2Fw%2FFQIoAkMzLBdASkzMzMzMzRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfAKhPWk3egv0wo-KdGeHT4a5IAk12THpsapho-b3NWvVg&oe=65B01354&_nc_sid=1d576d&_nc_rid=19da9ee7e2",
        "thumbnail_url": "https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/418786966_905153821185540_1387385520727848305_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=384e48&_nc_ohc=NzUJS65IxHsAX8jBjBL&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfCa9rErZPYRap62kbGiwTKkueCKX8bZxE0JQTkhmFZQlQ&oe=65B25726",
        "permalink": "https://www.instagram.com/reel/C1C6cLhKjje/"
    },
    {
        "id": "18015860089965548",
        "media_type": "IMAGE",
        "media_url": "https://scontent-iad3-2.cdninstagram.com/v/t39.30808-6/411494752_17857974039078660_4223485063779654171_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=384e48&_nc_ohc=PP4ofZAbQekAX8fybN6&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfAyFCo702Ckeun-n6IJWNokqihC8JaLIA5fkMu9ZTR7ww&oe=65B3A9DF",
        "permalink": "https://www.instagram.com/p/C04juc0K9rB/"
    },
    {
        "id": "18166604626289362",
        "media_type": "VIDEO",
        "media_url": "https://scontent-iad3-2.cdninstagram.com/o1/v/t16/f1/m82/4D4B1CF4C5E908FAF35AD03A3095DF8F_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=105&vs=613999110784202_1246756997&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC80RDRCMUNGNEM1RTkwOEZBRjM1QUQwM0EzMDk1REY4Rl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dHU0ZEaGhLN0R4MGtuc0NBTGIwUzlLVGk5eGlicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJpDz5e3hlck%2FFQIoAkMzLBdAHmZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfDsD_tMt0-41RcmoZBv5Vyg9XQlpCjxJZPsJopQv46LvQ&oe=65AFC516&_nc_sid=1d576d&_nc_rid=758304a40c",
        "thumbnail_url": "https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/403993475_876092363920075_7856725603902821773_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=384e48&_nc_ohc=FsBeStcT5yQAX9kWeEF&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfDEM7cKrGkeNeAVG0S1JX3NqazFU65e_ouHaH2eZiqWQA&oe=65B2AFAD",
        "permalink": "https://www.instagram.com/reel/C0EykzYK1sl/"
    }
])
  useEffect(() => {
    applyScrollAnimation('.scrollElement4', '.triggerElement4')
    // const apiEndpoint = 'https://v1.nocodeapi.com/mohammedajmal/instagram/cHdBEvCuLNKJBCxr';
    // const apiEndpoint = `https://bright-button-dove.cyclic.app/instagram-media`;
    // const apiEndpoint = `https://pitch-capable-tornado.glitch.me/instagram-media`;

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

            {data?.map((post, id) => {
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
        </section >
      }
    </>
  )
}
