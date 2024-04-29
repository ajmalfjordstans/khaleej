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
      "id": "18165027559307142",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/437477179_17874547311078660_793951788206527742_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=d-pEobGbn10Q7kNvgHobEtb&_nc_oc=AdhclirAjZwqxJNA44br7ZMra6U0V1sxUyR_RnsaTsStxsUmLPEpGRhs8W7Q26s1pbA&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfC2yIWDz1jcQpe3teFv6gOpSeSaVCJIujBV9oi7PrtYiQ&oe=6635843F",
      "permalink": "https://www.instagram.com/p/C6EU5YfImUJ/"
    },
    {
      "id": "17932479560830384",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/F54CC65DDF8E18FED4C1DF2D7B11D884_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&vs=793433182256638_1776834320&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9GNTRDQzY1RERGOEUxOEZFRDRDMURGMkQ3QjExRDg4NF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dJaWhBeHJKYlAwY3RWOERBSFVzbmdscGZLRVlicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJpTFq4DmvtE%2FFQIoAkMzLBdANIhysCDEnBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfAQS_Y37-rEynqltK7p00a-V5gAlt6_ELLuWhcHbdrJnA&oe=66319AC6&_nc_sid=1d576d&_nc_rid=0d3f300ae0",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/436447280_1884400568658899_6360678858075838791_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=zUtjrFttnGkQ7kNvgH8S-M_&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfDjHQ3QlvU-3C5QBLbiRK-tp8RlzYc5WRhy75pkWhzVSA&oe=66357F9C",
      "permalink": "https://www.instagram.com/reel/C5tUMelISqA/"
    },
    {
      "id": "17893043828932104",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/434451902_17873017386078660_6891697622806888888_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=au23ya16tpUQ7kNvgESJ5JS&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfAPGd_U3kq5SAwzruyvcjtRdwJj-H6Yz_iN5ZC-jyZMGA&oe=66358A21",
      "permalink": "https://www.instagram.com/p/C5kazQYIKQq/"
    },
    {
      "id": "18130654414336828",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/E74D9D8A79F0520952923F186B0E2DA5_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&vs=1098177261514399_3274648295&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9FNzREOUQ4QTc5RjA1MjA5NTI5MjNGMTg2QjBFMkRBNV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dMRko1aGs1aUpmcHJvY0dBT19iWl83LWFGSlpicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJpDr%2BrrDwc8%2FFQIoAkMzLBdALwAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfCcOG2nRxPEozh1s0poarRcg5h_t963qQ6UymSv-ZxtbA&oe=663194A4&_nc_sid=1d576d&_nc_rid=4fb9140dd8",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/435676296_341381332255563_7074061453772759779_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=KALh572HgyEQ7kNvgGcra3w&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfAGnWtxLZoLWV00P7n3H-fkE_aFSgP0oyICoqDn6Abevg&oe=66356A0D",
      "permalink": "https://www.instagram.com/reel/C5bg0MKInpe/"
    },
    {
      "id": "18422184091047593",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/784204AE89E0E9081157D82CBB94ECB2_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&vs=963995498584488_1186703340&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC83ODQyMDRBRTg5RTBFOTA4MTE1N0Q4MkNCQjk0RUNCMl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dKYWg1aG1Dcl9adHlwUUJBUFItSGppNzREZ3FicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJv7HmY2%2F2rk%2FFQIoAkMzLBdAQR7ZFocrAhgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfABb-cGEIwqF0cDvzB8iWOHT5W5lwRVvAQJuACVDP2ppA&oe=66317F14&_nc_sid=1d576d&_nc_rid=14f5a6c842",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/433842304_384447131180143_3976479135596544719_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=JzxFkLHcXnUQ7kNvgGauzSM&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfBPPRVBYg_jb_Ppp5gE6E3B2Qb7ZM2ACYV4pemQFZmloA&oe=66358141",
      "permalink": "https://www.instagram.com/reel/C5EWaM6I69o/"
    },
    {
      "id": "18085225108429777",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/431495545_17870391477078660_3832918002679351912_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=XSHOCew0Yh4Q7kNvgFrrYCc&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfC2ft6nHnE4Z5x-WGaSvLiS4QiEt65eGMOr_IqqcYUiRA&oe=66358DE3",
      "permalink": "https://www.instagram.com/p/C4tLitoIvfi/"
    },
    {
      "id": "18423738391017840",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/433140607_17870043294078660_415042715148213728_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=g0ocWLC5RpAQ7kNvgFd3D4u&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfBIHmUozOzs_q-GZkGElGzJRawr9C5X4f9BIyKlLYZfJw&oe=663573FD",
      "permalink": "https://www.instagram.com/p/C4loM3wv37J/"
    },
    {
      "id": "18032608585731128",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/431490004_17869798422078660_7332607284138985933_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=Y6qojXNWgVsQ7kNvgGWi1pX&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfCT3IZCgfPF50qBszI0EhOk6qP1mmFHpQ22peTy_eE0hA&oe=66357D19",
      "permalink": "https://www.instagram.com/p/C4gfa_AI7L9/"
    },
    {
      "id": "18017039233983943",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/0C43E757496C00F913134A45C006A289_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&vs=1119664219161165_3150549249&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8wQzQzRTc1NzQ5NkMwMEY5MTMxMzRBNDVDMDA2QTI4OV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dCYUN1eGxmZ1p2ZVNfUVlBREt6aXlKekJHd29icV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJu7Qz6q0gLpBFQIoAkMzLBdARR4UeuFHrhgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfBH4uLIt3Ng8K_JBtVfW9yDHmx8p1RUqjl3ep3INn2Fiw&oe=663187B9&_nc_sid=1d576d&_nc_rid=e055b7c9c9",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/432680730_1274843039901721_7868136877061667796_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=Q4fCQPy3eswQ7kNvgHCV2il&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfCoPsj_Easf1CRX_HP707iOAQmij7sDPmCGwzABPcE0aA&oe=6635847B",
      "permalink": "https://www.instagram.com/reel/C4WEMIto5Yk/"
    },
    {
      "id": "18021169319040989",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/431262209_17868807372078660_5309328762861482543_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=BqGMsE5FkbIQ7kNvgFX0S0R&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfDC0Mxaha2VXXcobkYZ7yH7wdQGgaUA3snnh1RCZrhvpQ&oe=663577F2",
      "permalink": "https://www.instagram.com/p/C4MCKdJozVM/"
    },
    {
      "id": "18332977816105565",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/428502302_17868063768078660_8085527373076555685_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=aq17sOCCihcQ7kNvgGsrkM1&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfAFZJhh1kquY4X8980-RXcJv9PGHyLJTzbY0BWjErOeSQ&oe=663590AB",
      "permalink": "https://www.instagram.com/p/C38JTHQIgTW/"
    },
    {
      "id": "18075077911454512",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/484FE5BD49CE3082C3ED0099F3C17997_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&vs=1118725089330464_3414098536&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC80ODRGRTVCRDQ5Q0UzMDgyQzNFRDAwOTlGM0MxNzk5N192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dEQWVZeGxsdjF2VDFrNEJBSkd5TnZjRFpyeFBicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJoT%2BvL7Wntk%2FFQIoAkMzLBdAJDMzMzMzMxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfCZmBirxtT3Kzwnmq8JQlmi9tkHDC3AotQIp1rv-5s-AA&oe=66317C24&_nc_sid=1d576d&_nc_rid=e32d65395c",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/428172020_725823382987256_6744587189981242379_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=V0aUD2ENTlsQ7kNvgGb1TdE&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfCSesOKQpz4BP17lSfccbVHQoKl-zofNFCL-CtftVkW4w&oe=663573C3",
      "permalink": "https://www.instagram.com/reel/C3fxMm0oal2/"
    },
    {
      "id": "18013851653507612",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/424974990_17866055931078660_20288214325201006_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=y8zgl7q6FRkQ7kNvgEemern&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfDaytVvHHgNnQnRctyg6NlM86F_GYi-vrDKOtht0kFCmA&oe=6635941F",
      "permalink": "https://www.instagram.com/p/C3QzuBTIRUr/"
    },
    {
      "id": "17905803191923345",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/7F41444105B07C206C1A2B65CB354294_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&vs=366127799702623_2609659645&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC83RjQxNDQ0MTA1QjA3QzIwNkMxQTJCNjVDQjM1NDI5NF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBeDZXUm0zSEE1THlrb0JBSzNKa29wRko5SVlicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJviKrePp84JAFQIoAkMzLBdAOo2RaHKwIRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfAV1yw4IaNYKynaufXLwE28S6V0vupWYgWgrFKR9xHr9g&oe=66317B27&_nc_sid=1d576d&_nc_rid=fd956e6707",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/425684631_918617609709297_1903100486529689681_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=Zl0EwANczeYQ7kNvgGt0tkU&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfAX47uQZI2I8TYOz4r8SBivwDzEzugfpq1H8_f_5-Ij_g&oe=663582BF",
      "permalink": "https://www.instagram.com/reel/C3GHDC9oVl2/"
    },
    {
      "id": "18019257155074759",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/422026469_17865191406078660_4148375813374243754_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=74i4y9lgtwsQ7kNvgEEtGK0&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfDkMvvQ_EMFnwi0UVSYvCRqTJscHuTK1Vmqtcsj0JnZhA&oe=66356CF0",
      "permalink": "https://www.instagram.com/p/C2-mO6kInuv/"
    },
    {
      "id": "18008883914331936",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/8948E297D3C4A379B06A09A299C0A993_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&vs=704597588175888_3613844169&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC84OTQ4RTI5N0QzQzRBMzc5QjA2QTA5QTI5OUMwQTk5M192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBRjFXaGxjM01qNVo4b0RBSnRtX2E3WUVuTWNicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvahucyOtvQ%2FFQIoAkMzLBdAKd2yLQ5WBBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfD6JTE2_gJkftiVPtg2IdNJIk_4qjRxwWXeeFyRVhiCbg&oe=6631874C&_nc_sid=1d576d&_nc_rid=8dab3f4990",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/425209524_1462356441380340_2912529424802985426_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=zKOJ5gsK0MsQ7kNvgGfwyIl&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfBMmR8MGTfvlceo545b0aE67vXqtpzrRGMVnW6M8YieYA&oe=66356B5E",
      "permalink": "https://www.instagram.com/reel/C25IWXUI_sv/"
    },
    {
      "id": "17938846820792390",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/444B3973E71B1D5312CBBFBCBFA2829E_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&vs=3378096949116735_2710712892&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC80NDRCMzk3M0U3MUIxRDUzMTJDQkJGQkNCRkEyODI5RV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dJNlFUaG1zRW1nQVMtSURBQ1prU0lXTGl5VUZicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJrTd%2BYm%2F%2Bv4%2FFQIoAkMzLBdAOsQYk3S8ahgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfC9oXhU0aCCEMnAkLu1Wq1lj6rO9CAKZWwZYLvKU997Gw&oe=6631A33B&_nc_sid=1d576d&_nc_rid=f945e48db9",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/424561271_758169525811184_8867940451439727300_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=LGL7JHL54IYQ7kNvgFWr2hb&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfCAqFUmIU6DOi2ar-T3cAFwGJGB3PD7g0MRqvlobzMXWQ&oe=6635680A",
      "permalink": "https://www.instagram.com/reel/C2ztqP0Ilez/"
    },
    {
      "id": "17976847973648032",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/3D4A5869F4CAEA08DB677AD5B2C0ACB9_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&vs=940960880199228_1580552068&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8zRDRBNTg2OUY0Q0FFQTA4REI2NzdBRDVCMkMwQUNCOV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dHXzNEeG5YNFRvdV8xVURBQWZEOEsxenVQMDNicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJt6Pq9S%2Fz7U%2FFQIoAkMzLBdAIhDlYEGJNxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfBxCsaQS0OBhHrEnk738tGd1rGUeNeLxPntAPsoUYYY9Q&oe=66319302&_nc_sid=1d576d&_nc_rid=07c494f467",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/422783181_414595014471826_1964129801023743160_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=mYVEHkgaezoQ7kNvgHx8a25&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfCWkyj5TJYvDg76i7HXvqF7nYZBzrnysIZw2WGmYVLMUw&oe=66359B41",
      "permalink": "https://www.instagram.com/reel/C2sk6hGIV-n/"
    },
    {
      "id": "17933318708803020",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/421842056_17864172057078660_5416682036163863021_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=Sreg_f3rnXoQ7kNvgH_Tfsa&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfBHnvN98ns6hSHcggDurNmtMbDnKtfjH9L3-E17mH3kUw&oe=66358B32",
      "permalink": "https://www.instagram.com/p/C2p7kGYoM58/"
    },
    {
      "id": "17999590814192394",
      "media_type": "IMAGE",
      "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/420053188_17862994428078660_150975365778798428_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=_2BaCvMQqnEQ7kNvgF7NQDp&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfA9F62xk2qHfNvAFj_rgaCzrXIu378FZkqaszHq4mJQKQ&oe=66358461",
      "permalink": "https://www.instagram.com/p/C2S5hXho5VH/"
    },
    {
      "id": "17918661647841893",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/BC4FD231623391296A9B41D7D662C486_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&vs=1127480808622112_1502151565&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9CQzRGRDIzMTYyMzM5MTI5NkE5QjQxRDdENjYyQzQ4Nl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dGWFI0UmdiYll5NnZlTUFBTDRnX2lxRlo1WV9icV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvqq4Jnr2ZFAFQIoAkMzLBdAJmZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfB3HMDROpHs7299TMuepPYdZVNijI3_GoVZ6OsmxU_Ilw&oe=663195DA&_nc_sid=1d576d&_nc_rid=5ed44edc2b",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/418767603_390036703684305_1821358160580421016_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=Aw3lrmzw_4EQ7kNvgFrG1x9&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfACWjIWSjVuaa-0iZjvHnv64IFCLuTvCDXyyBL3PNcuww&oe=663577DE",
      "permalink": "https://www.instagram.com/reel/C2F5lRmIt68/"
    },
    {
      "id": "18070358725459262",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/164AF36EED6E6775C6F716232AF40299_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&vs=1119449676159494_4286020742&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8xNjRBRjM2RUVENkU2Nzc1QzZGNzE2MjMyQUY0MDI5OV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dEY0gzaGpVcVFNSDRiNENBUHZHMkhvcVZvZ1NicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvqEqcbLn91AFQIoAkMzLBdAKCJN0vGp%2FBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfBncCsxXC4yHf5mD53PIY9ksgf7b509hRKmn4GY8V9XCQ&oe=66318BE3&_nc_sid=1d576d&_nc_rid=f8abcc58fd",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/416959389_748346350676562_8785123124532733226_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=Z8co8ERTkwYQ7kNvgE2QUtz&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfCSZnAco1b9BkQ-3-dWxjZLlLKj5FHr-Lo90rufd9_TXA&oe=66356552",
      "permalink": "https://www.instagram.com/reel/C1ztRv5ohQy/"
    },
    {
      "id": "18043295815608178",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/B442ACB6F2925829814DAE69FA4A4E8D_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&vs=1761374601005507_4020464405&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9CNDQyQUNCNkYyOTI1ODI5ODE0REFFNjlGQTRBNEU4RF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dFdDF2aGlwT2h6anhpb0RBTXB4VmNzZkRzTlJicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJrSPmPWIm4VAFQIoAkMzLBdAI3dLxqfvnhgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfB-396g9Zm02egjwmz7cbe_eKGMjCk4tcUalfEt2nJLuw&oe=6631A2DE&_nc_sid=1d576d&_nc_rid=f83aaa382e",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/414231306_318851551124970_7261565011280111387_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=lfs1ln5N6oMQ7kNvgGoh9xj&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfDlhjJwDmKkANVN0ghoYOFYk6n3zEmLFtuZjdf3x-F-Pg&oe=663580E0",
      "permalink": "https://www.instagram.com/reel/C1ex0QvNnfK/"
    },
    {
      "id": "18004182590197041",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/1D4E4DEFB722377D9C7EA1565FDF2599_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&vs=711005837794454_1304510780&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8xRDRFNERFRkI3MjIzNzdEOUM3RUExNTY1RkRGMjU5OV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dOZDd1QmdSTHFUNks3VURBSHpPcTlPbnFQWWVicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJqDD05fdmLw%2FFQIoAkMzLBdAKUQYk3S8ahgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfAuMvlpNSf2p2yddJ5xEiawp3IadJe39ZOd9qMDIg51Lg&oe=66318F63&_nc_sid=1d576d&_nc_rid=994e81f6f0",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/412651447_343492098395835_3299011829003894269_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=1Eeauvz-VpgQ7kNvgEFlCGS&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfAEpubyYkkgGsL41VB9oHhNEYd_6AGHut1WHuOt57rYDA&oe=663597AA",
      "permalink": "https://www.instagram.com/reel/C1Zxy3GIA0s/"
    },
    {
      "id": "18039070585620474",
      "media_type": "VIDEO",
      "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/B043DB387232B44F4970CB7E00295084_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&vs=903378450914622_1873713764&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9CMDQzREIzODcyMzJCNDRGNDk3MENCN0UwMDI5NTA4NF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dKekpreGdtTzJPeVdoWUJBSUNIUXdKazkzRmFicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJryw8u7EvL1AFQIoAkMzLBdAJjrhR64UexgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfAexT6yzfqkoR15bDb6qklF6y8RVhsAD8H_v1YwSnnZZw&oe=6631872D&_nc_sid=1d576d&_nc_rid=b587cd393f",
      "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/412503746_906875921019087_177929473832614520_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=8bOmEce36vUQ7kNvgGrfD57&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AfDo69gElJddKa-_NMTA956yWY_7jXZEcTjyS8UQufN6ZQ&oe=66357CFF",
      "permalink": "https://www.instagram.com/reel/C1SAkGrqW0R/"
    }
  ])
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
