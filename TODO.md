Phase 1 – Prepare Next.js app for backend logic

1. Add server-side dependencies to Next.js app [DONE]
   
   - In khaleej/package.json add (if not already present):
     - firebase-admin
     - nodemailer
     - axios (already there in frontend, just confirm)
   - Run npm install in khaleej .
2. Define environment variables for Firebase and email providers [DONE]
   
   - Create/update khaleej/.env.local with (no secrets in code):
     - Firebase service account fields (replacing key.json )
       - FIREBASE_PROJECT_ID
       - FIREBASE_CLIENT_EMAIL
       - FIREBASE_PRIVATE_KEY (properly escaped)
     - Email provider vars
       - EMAIL_PROVIDER ( sendgrid / resend / smtp )
       - SENDGRID_API_KEY (if used)
       - RESEND_API_KEY (if used)
       - SMTP host/user/pass for Zoho if you still want that fallback
     - Google Places & Instagram
       - PLACE_ID , PLACES_KEY
       - IG_USER_ID , IG_ACCESS_TOKEN (or similar names)
3. Create Firebase Admin helper in Next.js app [DONE]
   
   - Add src/lib/firebase-admin.js that:
     - Imports firebase-admin
     - Initializes admin.apps[0] || admin.initializeApp(...) using env vars
     - Exports a Firestore instance (e.g. export const db = admin.firestore() )
4. Create email service helper in Next.js app [DONE]
   - Add src/lib/email-service.js that:
     - Reimplements sendWithProvider , sendEmailToAdmin , sendConfirmationEmail , sendUpdateEmail from backend’s services/emailService.js
     - Uses env vars instead of hard-coded credentials
     - Uses Node APIs only (safe in Next API routes)
     
Phase 2 – Implement API routes for contact & enquiries

5. Create /api/contact POST route for contact form [DONE]
   
   - File: src/app/api/contact/route.js
   - Implement equivalent of contactController from controller/contactController.js :
     - Parse request body
     - Write to Firestore collection enquiries (using db from firebase-admin.js )
     - Call sendEmailToAdmin(formData, "enquiry", "New Enquiry")
     - Return JSON response with status 201 or error.
6. Create /api/contact/getEnquiries GET route for admin list [DONE]
   
   - File: src/app/api/contact/getEnquiries/route.js
   - Implement equivalent of getContactsController :
     - Read all docs from enquiries collection
     - Return array of data.
7. Create /api/contact/updateEnquiries/[id] POST route [DONE]
   
   - Directory: src/app/api/contact/updateEnquiries/[id]/route.js
   - Implement equivalent of updateContactsController :
     - Read id from URL params
     - Update status in the doc.
8. Create /api/contact/deleteEnquiries/[id] DELETE route [DONE]
   
   - Directory: src/app/api/contact/deleteEnquiries/[id]/route.js
   - Implement equivalent of deleteContactsController :
     - Delete the doc from enquiries .

Phase 3 – Implement API routes for majlis reservations

9. Create /api/majlis POST route for new booking [DONE]
   
   - File: src/app/api/majlis/route.js
   - Implement equivalent of createMajlisBooking :
     - Generate booking number
     - Save reservation in Firestore collection reservation
     - Call sendEmailToAdmin(formData, id, "New Majlis Booking")
     - Call sendConfirmationEmail(formData, id)
     - Return booking data.
10. Create /api/majlis/getReservations GET route for admin list [DONE]
    
    - File: src/app/api/majlis/getReservations/route.js
    - Implement equivalent of getMajlisReservations :
      - Query reservation ordered by createddatetime desc
      - Return array of data.
11. Create /api/majlis/findReservation/[id] GET route [DONE]
    
    - Directory: src/app/api/majlis/findReservation/[id]/route.js
    - Implement equivalent of findMajlisReservation .
12. Create /api/majlis/cancelReservation/[id] POST route [DONE]
    
    - Directory: src/app/api/majlis/cancelReservation/[id]/route.js
    - Implement equivalent of cancelMajlisReservation :
      - Update status to "cancelled"
      - Fetch doc and call sendUpdateEmail(data, "cancelled", id) .
13. Create /api/majlis/updateReservation/[id] POST route [DONE]
    
    - Directory: src/app/api/majlis/updateReservation/[id]/route.js
    - Implement equivalent of updateMajlisReservation :
      - Update status from body
      - Send update email if status !== "completed" .
14. Create /api/majlis/delete/[id] DELETE route [DONE]
    
    - Directory: src/app/api/majlis/delete/[id]/route.js
    - Implement equivalent of deleteMajlisReservation .

Phase 4 – Implement API routes for Google testimonials & Instagram

15. Create /api/testimonial GET route [DONE]
    
    - File: src/app/api/testimonial/route.js
    - Implement equivalent of routes/testimonials.js :
      - Build Places API URL from PLACE_ID , PLACES_KEY
      - axios.get(...) and return result.reviews .
16. Create /api/instagram GET route
    
    - File: src/app/api/instagram/route.js
    - Implement equivalent of routes/instagram.js :
      - Build Instagram Graph API URL from IG_USER_ID , IG_ACCESS_TOKEN
      - Return media.data array.
      
Phase 5 – Wire frontend to new Next.js API routes

17. Update contact form to call /api/contact [DONE]
    
    - File: src/components/forms/contact-form.jsx
    - Replace https://khaleej-backend.onrender.com/contact with relative /api/contact .
18. Update majlis booking form to call /api/majlis [DONE]
    
    - File: src/components/majlis-booking-form.jsx
    - Replace https://khaleej-backend.onrender.com/majlis with /api/majlis .
19. Update cancel booking form to call new majlis cancel API [DONE]
    
    - File: src/components/forms/cancel-booking.jsx
    - Replace https://khaleej-backend.onrender.com/majlis/cancelReservation/${email} with /api/majlis/cancelReservation/${email} .
20. Update admin enquiries page to use /api/contact endpoints [DONE]
    
    - File: src/app/admin/enquiries.jsx
    - Replace backend URLs with:
      - /api/contact/getEnquiries
      - /api/contact/updateEnquiries/${id}
      - /api/contact/deleteEnquiries/${id} .
21. Update admin bookings page to use /api/majlis endpoints [DONE]
    
    - File: src/app/admin/booking.jsx
    - Replace backend URLs with:
      - /api/majlis/getReservations
      - And any other majlis endpoints used here.
22. Update testimonials component to use /api/testimonial [DONE]
    
    - File: src/app/testimonial.jsx
    - Replace https://khaleej-backend.onrender.com/testimonial with /api/testimonial .
23. (Optional) Update gallery to use /api/instagram instead of static or old URL
    
    - File: src/app/gallery.jsx
    - Uncomment/adjust logic to fetch from /api/instagram , or keep static fallback as desired.

Phase 6 – Testing, deployment, and backend removal

24. Test all API routes locally (Next dev server)
    
    - Run npm run dev in khaleej
    - Manually submit:
      - Contact form
      - Majlis booking & cancel
      - Admin enquiries page actions
      - Admin bookings page actions
      - Testimonials & Instagram components
    - Confirm Firestore and emails behave as expected.
25. Configure environment variables in production (e.g., Vercel)
    
    - Add all vars from .env.local into the project’s environment settings
    - Trigger a redeploy of the Next.js app.
26. Verify production behavior end-to-end
    
    - Repeat key flows against production URL (website)
    - Confirm Firestore writes, email delivery, and external API calls.
27. Decommission standalone Express backend
    
    - Stop traffic to khaleej-backend.onrender.com
    - Remove references to khaleejbackend deployment in your infra
    - Optionally delete or archive code/khaleejbackend from the repo after a safe period.
