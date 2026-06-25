# GFG Shopping Project

GFG Shopping is a MERN e-commerce project with a React/Vite frontend, an Express API, MongoDB models, authentication, cart, checkout, orders, and admin pages.

## Tech Stack

- React, Vite, Redux Toolkit, Tailwind CSS
- Node.js, Express, MongoDB, Mongoose
- JWT authentication
- Cloudinary for image uploads
- Razorpay integration hooks for payment flow
- Optional Redis cache for products

## Local Setup

1. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Create `backend/env/.env` from `backend/env/.env.example` and fill your own credentials.

3. Install frontend dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

4. Start the backend:

   ```bash
   cd ../backend
   npm start
   ```

5. Start the frontend:

   ```bash
   cd ../frontend
   npm run dev
   ```

Frontend runs at `http://localhost:5173`.
Backend runs at `http://localhost:3000`.

## Useful Commands

Seed sample products:

```bash
cd backend
npm run seed
```

Build frontend:

```bash
cd frontend
npm run build
```

## Notes

- Do not commit real `.env` files or private API keys.
- `backend/env/.env.example` is only a template.
- Redis is optional. Leave `REDIS_URL` empty if you do not use Redis locally.
- New signups are always created as normal users. Admin users should be created manually in the database or through a protected admin-only flow.
