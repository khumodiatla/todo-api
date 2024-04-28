**TODO-API**

**Project Description**: Todo API with Authentication

**Overview**:
This project aims to create a robust Todo API with authentication using JavaScript, Node.js, MongoDB, Mongoose, Express, and Jest. The API will allow users to perform CRUD (Create, Read, Update, Delete) operations on their todos securely through authentication mechanisms.

**Features**:

**User Authentication**: Users can register, login, and manage their accounts securely. Authentication will be implemented using JWT (JSON Web Tokens) for secure communication between client and server.
Todo CRUD Operations: Authenticated users can create, read, update, and delete their todos. Each todo will have fields such as title, description, due date, priority, and status.
**Authorization**: Users can only access and manipulate todos associated with their accounts. Unauthorized access to other users' todos will be prohibited.
**Validation**: Input data will be validated to ensure data integrity and prevent malicious activities.
**Testing**: Comprehensive integration tests will be written using Jest to ensure the reliability and correctness of the API endpoints.

**Tech Stack**:

**JavaScript**: Primary programming language for backend development.
**Node.js**: Server-side runtime environment for executing JavaScript code.
**MongoDB**: NoSQL database for storing user accounts and todo data.
**Mongoose**: ODM (Object Data Modeling) library for MongoDB, facilitating interactions with the database.
**Express**: Web application framework for Node.js, simplifying API development.
**Jest**: JavaScript testing framework for writing unit tests.

**Project Structure**:

**User Module**: Responsible for user registration, login, and token generation/validation.
**Task Module**: Handles CRUD operations for todos, ensuring authentication and authorization.
**Middleware**: Includes middleware functions for authentication.
**Tests**: Contains integration tests for each API endpoint and functionality using Jest.