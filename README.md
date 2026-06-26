# Product Browser Backend & Frontend

A full-stack product browsing application built as a backend-focused interview assignment. The project demonstrates efficient handling of a large dataset (~200,000 products) with cursor-based pagination, category filtering, and a responsive React frontend.

---

## Features

### Backend

- Node.js + Express REST API
- MongoDB with Mongoose
- Cursor-based pagination
- Category filtering
- Efficient seeding of 200,000 products using batch insertion
- Repository-Service-Controller architecture
- Environment-based configuration
- Error handling
- Indexed queries for improved performance

### Frontend

- React + Vite
- Tailwind CSS
- Axios API integration
- Responsive product grid
- Category filter
- Load More pagination
- Loading and empty states

---

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Frontend

- React
- Vite
- Tailwind CSS
- Axios

---

## Project Structure

```
product-browser/
│
├── backend/
│
└── frontend/
```

---

## Backend Setup

```
cd backend

npm install

npm run seed

npm run dev
```

---

## Frontend Setup

```
cd frontend

npm install

npm run dev
```

---

## Environment Variables

Backend `.env`

```
PORT=5000

MONGODB_URI=your_mongodb_connection_string

NODE_ENV=development
```

---

## Seed Database

Generate approximately **200,000** products.

```
npm run seed
```

The seed script creates products with:

- Unique ID
- Product Name
- Category
- Price
- Created Timestamp
- Updated Timestamp

Products are inserted in batches using `insertMany()` for better performance.

---

## API

### Get Products

```
GET /api/products
```

### Query Parameters

| Parameter | Description                       |
| --------- | --------------------------------- |
| limit     | Number of products per request    |
| category  | Filter by category                |
| cursor    | Cursor for fetching the next page |

Example

```
GET /api/products?limit=20

GET /api/products?category=Electronics

GET /api/products?cursor=<cursor>
```

---

## Pagination Strategy

This project uses **cursor-based pagination** instead of offset (`skip`) pagination.

Benefits include:

- Faster queries on large datasets
- Better scalability
- Stable ordering using:

```
updatedAt DESC

_id DESC
```

---

## Database Indexes

The following compound indexes are used:

```
updatedAt

_id
```

and

```
category

updatedAt

_id
```

These indexes improve filtering and pagination performance.

---

## Frontend

The frontend provides:

- Product listing
- Category selection
- Load More functionality
- Responsive layout
- Loading indicator
- Empty state

---

## Deployment

Backend

- Render

Frontend

- Vercel

Database

- MongoDB Atlas

---

## Future Improvements

- Snapshot-based pagination for fully consistent browsing while records are updated.
- Infinite scrolling.
- Search functionality.
- Product details page.
- Redis caching.
- API rate limiting.
- Automated testing.

---

## Author

Abhishek Negi
