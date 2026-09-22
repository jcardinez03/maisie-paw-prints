# Maisie Paw Prints - System Design

## Overview
Maisie Paw Prints is a website that allows customers to turn their pet photos into beautiful prints and keepsakes. Customers can browse products, place orders by uploading pet images, and leave reviews. Administrators can manage orders through an admin interface.

## Core Pages & Components

### 1. Home Page (`app/page.tsx`)
The main landing page that showcases all sections:
- **Navbar**: Navigation menu at the top
- **Banner**: Hero section with welcoming message
- **Product**: Showcase of available products
- **Story**: Brand story or company information
- **Gallery**: Sample work/products display
- **Review**: Customer testimonials section
- **Order**: Order form for customers to submit requests
- **Footer**: Bottom section with links and contact info

### 2. Order Form (`components/Order.tsx`)
Where customers place orders:
- Form fields for name, email, phone number
- Product selection dropdown (fetches available products)
- Text area for order details (quantity, size, special requests)
- Image upload section (multiple pet photos allowed)
- Preview of uploaded images
- Submit button that sends order to the API

### 3. Review System (`components/Review.tsx`)
Allows customers to leave feedback:
- Form for name, product reviewed, rating (1-5 stars), and comments
- Image upload for showing the product with their pet
- Star rating visualization using paw print icons
- Submit button (currently has commented-out API call)

### 4. Gallery (`components/Gallery.tsx`)
Displays sample products:
- Grid layout showing different product types
- Hover effects on product images
- Placeholder sections for "Coming Soon!" products
- Visual badges indicating interactivity

## Key Features & How They Work

### State Management (React Hooks)
The site uses custom React hooks to manage different aspects of state:

- **`useForm`**: Manages form input values and updates
- **`useProducts`**: Fetches available products from the API
- **`useImagePreview`**: Creates preview URLs for uploaded images before submission
- **`useMessage`**: Handles temporary success/error messages shown to users
- **`useLoading`**: Tracks loading states for async operations

### Image Handling
When users upload images:
1. Files are selected via `<input type="file">`
2. Preview URLs are created using `URL.createObjectURL()` for immediate viewing
3. Original File objects are stored in form data for submission
4. On form submission, images are sent to the API via FormData

### Form Submission Process
When submitting an order or review:
1. Form data is collected and validated
2. A `FormData` object is created (standard way to send files via HTTP)
3. Each field is appended to the FormData object
4. For images: each file is appended as `image[]` (allowing multiple files)
5. The data is sent via `fetch()` to the appropriate API endpoint
6. On success: form is reset, success message shown
7. On error: error is logged and re-thrown for handling

### Loading States
Loading states are managed through:
- The `useLoading` hook which returns `{isLoading, setIsLoading}`
- Components call `setIsLoading(true)` during async operations
- Components call `setIsLoading(false)` when operations complete
- UI typically shows spinners or disabled buttons during loading

### Client-Side Rendering
The `"use client";` directive at the top of components indicates:
- These components run in the browser (not on the server)
- They can use browser-specific APIs like `window`, `localStorage`, etc.
- They can use React hooks that require client-side execution
- This is necessary for features like file uploads, local previews, and interactive UI

## Data Flow

### Customer Order Flow:
1. User visits home page and navigates to Order section
2. User fills out form: personal info, selects product, adds details
3. User uploads one or more pet photos
4. User sees instant previews of uploaded images
5. User clicks "Send My Order" button
6. Form data (including images) is sent to `/api/orders` endpoint
7. API processes the order and returns confirmation
8. Success message is displayed, form is reset

### Review Submission Flow (similar to order):
1. User clicks "Add a Review" button
2. User fills out review form: name, product, rating, comments
3. User uploads image showing product with pet
4. User sees preview of uploaded image
5. User clicks "Submit Review" button
6. Form data is sent to `/api/reviews` endpoint
7. Success message displayed, form hidden

## Technical Architecture

### Frontend (What runs in the browser):
- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript (.tsx files)
- **Styling**: Tailwind CSS (evident from className usage)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Nunito, Pacifico, Dancing Script)
- **State Management**: Custom React hooks + Context API (LoadingContext)
- **Image Optimization**: Next.js Image component

### Backend (What runs on the server):
- **API Routes**: Not visible in current code, but referenced via `process.env.NEXT_PUBLIC_API_URL`
- **Endpoints**:
  - `POST /api/orders` - for submitting orders
  - `POST /api/reviews` - for submitting reviews
- **Data Handling**: 
  - Accepts FormData with text fields and file uploads
  - Returns JSON responses
  - Proper error handling with HTTP status codes

### Key Design Patterns Observed:

1. **Separation of Concerns**:
   - Components focused on UI rendering
   - Hooks focused on logic and state management
   - Functions focused on API communication
   - Types focused on data structure definitions

2. **Reusability**:
   - Custom hooks (`useForm`, `useImagePreview`, etc.) can be reused across components
   - Component props allow customization (e.g., passing font classes)
   - Consistent UI patterns (button styles, input styles, loading states)

3. **User Experience Focus**:
   - Immediate feedback (image previews)
   - Loading states during async operations
   - Clear success/error messages
   - Form reset after successful submission
   - Visual cues for interactive elements (hover effects)

## Environment Variables
The site relies on:
- `NEXT_PUBLIC_API_URL`: Base URL for API endpoints

## Security Considerations
- File type validation happens implicitly through `accept="image/*"` on file inputs
- Form data is sent via standard POST requests
- Error handling prevents exposing internal details to users
- No sensitive data appears to be stored client-side

## Potential Improvements
1. Add proper validation for form inputs (email format, required fields)
2. Implement actual review submission (currently commented out)
3. Add admin order management UI
4. Implement order history for customers
5. Add product management for admins
6. Include better error UI states
7. Add analytics or tracking
8. Implement proper routing for individual product pages

## Summary
Maisie Paw Prints is a well-structured Next.js application that follows React best practices. It uses custom hooks for state management, provides excellent user experience with immediate feedback, and has a clean separation between UI components, logic, and data handling. The system is designed to be scalable and maintainable, with clear patterns that can be extended for additional features.