# Courses API

A RESTful API for managing courses built with NestJS and MongoDB.

## Features

- Complete CRUD operations for courses
- Data validation using class-validator
- Swagger API documentation
- MongoDB integration
- TypeScript support

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd api-courses
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/courses
```

## Running the Application

1. Start the development server:
```bash
npm run start:dev
```

2. The API will be available at `http://localhost:3000`
3. Swagger documentation will be available at `http://localhost:3000/api`

## API Endpoints

- `GET /cursos` - Get all courses
- `GET /cursos/:id` - Get a course by ID
- `POST /cursos` - Create a new course
- `PUT /cursos/:id` - Update a course
- `DELETE /cursos/:id` - Delete a course

## Course Schema

```typescript
{
  id: string;          // MongoDB ObjectID
  codigo: string;      // Required, unique
  nombre: string;      // Required
  descripcion: string; // Required
}
```

## Validation Rules

- `codigo`: Required, minimum length of 3 characters
- `nombre`: Required, minimum length of 3 characters
- `descripcion`: Required, minimum length of 10 characters

## Testing

Run the test suite:
```bash
npm test
```

## License

This project is licensed under the MIT License. 