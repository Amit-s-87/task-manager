# Task Manager API

This is a simple Task Manager API built using Express.js. It provides endpoints to manage tasks including creating, updating, fetching, and deleting tasks.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

To start the server, run:

    
    npm run dev
    

## Endpoints

1. **Get All Tasks**
   
    - URL: /task-manager/v1/tasks
    - Method: GET
    - Description: Get all tasks.
    - Response: List of tasks.

2. **Get Task by ID**
   
    - URL: /task-manager/v1/tasks/:id
    - Method: GET
    - Description: Get a task by its ID.
    - Parameters: id (Task ID)
    - Response: Task object if found, otherwise a 404 error.

3. **Create Task**
   
    - URL: /task-manager/v1/tasks
    - Method: POST
    - Description: Create a new task.
    - Request Body: JSON object with title, description, and completed fields.
    - Response: Newly created task object if successful, otherwise a 400 error.

4. **Update Task**
   
    - URL: /task-manager/v1/tasks/:id
    - Method: PUT
    - Description: Update an existing task.
    - Parameters: id (Task ID)
    - Request Body: JSON object with title, description, and completed fields to update.
    - Response: Updated task object if successful, otherwise a 404 or 400 error.

5. **Delete Task**
   
    - URL: /task-manager/v1/tasks/:id
    - Method: DELETE
    - Description: Delete a task by its ID.
    - Parameters: id (Task ID)
    - Response: Deleted task object if successful, otherwise a 404 error.
