#  React Routing (Setup)

##  What is Routing in React?  
Routing in React allows us to navigate between multiple pages (views) in a single-page application (SPA) without reloading the browser. Instead of fetching new HTML pages, React dynamically updates the displayed component based on the URL.  

---

## Why Routing is Needed  
- React apps by default render a single page.  
- Real-world apps require multiple views (Home, About, Contact, Dashboard, etc.).  
- Routing provides:  
  - Seamless navigation without page reloads  
  - Clean URLs for each view  
  - Browser history support   

---

## Library Required  
To use routing in React, we need the **React Router DOM** library.  

Install it using:  
- `npm install react-router-dom`  
 

This library provides all the components needed for routing (BrowserRouter, Routes, Route, Link, NavLink, etc.).  

---

## 🔹 Steps to Install and Setup React Router  

### **1. Install React Router DOM**  
Run the command in your project folder:  
- `npm i react-router-dom`  

---

### **2. Wrap Application with Router**  
Use **BrowserRouter** to wrap your application.  
This enables routing functionality across the app.  

---

### **3. Define Routes**  
Use a **Routes** container to hold multiple **Route** definitions.  
Each route specifies a path (URL) and the component that should render.  

---

### **4. Create Page Components**  
Make separate components for each page (like Home, About, Contact).  
Each component will render based on the active route.  

---

### **5. Add Navigation**  
Use **Link** or **NavLink** for navigation instead of `<a>` tags.  
These allow smooth navigation without reloading the page.  

---

### **6. Handle 404 (Not Found) Routes**  
Add a catch-all route (`*`) to show a **Page Not Found** message for invalid URLs.  

---

### **7. Run the Application**  
- Start the app using: `npm run dev`  
- Open the browser and navigate between different routes to test.  

---

## 🔹 Core Concepts in React Router  
- **BrowserRouter** → Provides routing context to the app.  
- **Routes & Route** → Map URLs to components.  
- **Link & NavLink** → Navigate between routes without reloads.  
- **404 Route** → Fallback when no URL matches.  

---

## 🔹 Advantages of React Router  
- Enables single-page applications with multiple views.  
- Provides fast and seamless navigation.  
- Supports dynamic, nested, and protected routes.  
- Helps build scalable, real-world applications.  

---

