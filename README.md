# DailyGenie

DailyGenie is an AI-powered personal assistant app designed to help users manage their tasks and reminders efficiently. This app features a smart reminder system, real-time notifications, and task analysis.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [License](#license)

## Features

- **Task Management**: Create, view, and manage tasks.
- **Smart Reminders**: Set reminders for tasks and receive notifications.
- **Task Analysis**: Analyze tasks using AI for better insights.
- **Real-Time Notifications**: Receive notifications using Firebase Cloud Messaging (FCM).

## Tech Stack

- **Backend**: Python, Django, Django REST Framework, Celery, Redis
- **Frontend**: React, Axios
- **Notifications**: Firebase Cloud Messaging (FCM)

## Installation

### Backend Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/DailyGenie.git
    cd DailyGenie
    ```

2. **Set Up Virtual Environment**

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. **Install Dependencies**

    ```bash
    pip install -r requirements.txt
    ```

4. **Run Migrations**

    ```bash
    python manage.py migrate
    ```

5. **Start Redis Server**

    Make sure Redis is installed and running. You can start Redis with:

    ```bash
    redis-server
    ```

6. **Start Celery Worker and Beat**

    ```bash
    celery -A dailygenie worker --loglevel=info
    celery -A dailygenie beat --loglevel=info
    ```

7. **Run the Development Server**

    ```bash
    python manage.py runserver
    ```

### Frontend Setup

1. **Navigate to Frontend Directory**

    ```bash
    cd frontend
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Start the Development Server**

    ```bash
    npm start
    ```

## Usage

1. **Access the App**

    Open your browser and navigate to `http://localhost:3000` to access the frontend. The backend API will be running on `http://localhost:8000`.

2. **Create Tasks**

    Use the UI to create new tasks and set reminders.

3. **Receive Notifications**

    Ensure your browser allows notifications to receive reminders.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
