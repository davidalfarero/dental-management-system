# 🦷 Dental Management System

A full-stack web application built for dental clinics to streamline appointment bookings, showcase clinic information, and improve the overall user experience for both staff and patients.

## 📋 Overview

The Dental Management System allows clinics to display essential information about their dentists and staff, list available services, and collect patient testimonials. It provides patients with a seamless way to send inquiries and book appointments online.

### 👥 Target Users

- Dentists
- Clinic Staff
- Patients

### 💡 Problems Solved

- Patients can conveniently book appointments online without calling the clinic.
- Visitors can view detailed clinic, dentist, and staff profiles.
- Patients can browse all the services offered by the clinic.
- Testimonials from previous patients are publicly displayed to build trust.

## ✨ Features

- 📌 Display of clinic, dentist, and staff information
- ⭐ Patient testimonials section
- 🧾 Complete service listings
- 📅 Online appointment booking and general inquiries
  - ✅ Automated email to the admin
  - ✅ Confirmation email to the patient
- 🌓 Light and Dark mode toggle (DaisyUI theme-based)

## ⚙️ Tech Stack

### Frontend

- React
- TailwindCSS
- DaisyUI

### Backend

- Node.js
- Express

### 3rd-Party Tools & Packages

- Brevo (Email service)
- CORS
- dotenv
- dayjs
- react-datepicker
- date-fns

## 🛠 Installation & Setup

### 🔧 Frontend (Client)

```bash
# Navigate to client folder and install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint the codebase
npm run lint
```

### 🔧 Backend (Server)

```bash
# Navigate to server folder and install dependencies
npm install

# Start development server with Nodemon
npm run dev

# Start production server
npm start
```

## 🌐 Live Demo

- **Live App**: [https://dental-clinic-8503.onrender.com/](https://dental-clinic-8503.onrender.com/)
- **GitHub Repo**: [https://github.com/davidalfarero/dental-management-system](https://github.com/davidalfarero/dental-management-system)

## 🚧 Known Issues / Under Development

- Admin dashboard not yet implemented
- No login or authentication system
- No database integration (for storing appointments or inquiries)

## 📄 License

This project is licensed under the **MIT License**.

## 👨‍💻 Author

**David Alfarero**

- GitHub: [@davidalfarero](https://github.com/davidalfarero/dental-management-system)
