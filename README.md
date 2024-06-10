# Refugee Ontology Web Application

This is a **Draft** of the Refugee Ontology Web Application built with React.js, Django, and AllegroGraph. The main goal is to provide a simple user interface for non-technical people and decision-makers in NGOs and related organizations to study refugee situations using a knowledge graph (ontology) and derive insights from the data. The application supports a QA system built with Retrieval Augmented Generation (RAG), relying on significant resources (books and scientific papers) related to social science.

## Project Structure

The repository contains two main folders:

1. **backend**: Handles the backend operations. It contains all the API endpoints and types/schemas needed.
2. **frontend**: Contains the React frontend built with Vite and styled with Bootstrap.

## Getting Started

### Prerequisites

- Python (Django)
- NPM (or Yarn)
- AllegroGraph

### Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/khederTa/ro-draft-with-react-django.git
   cd ro-draft-with-react-django
   ```

2. **Backend Setup**: After installing AllegroGraph on your local machine and running the server ([Download AllegroGraph](https://franz.com/agraph/downloads/)), follow these steps:

   - **Install `virtualenv` if you don't have it:**

     ```bash
     pip install virtualenv
     ```

   - **Create a virtual environment:**
     Navigate to your project directory and create a virtual environment:

     ```bash
     virtualenv venv
     ```

   - **Activate the virtual environment:**

     - On Windows:
       ```bash
       venv\Scripts\activate
       ```
     - On macOS/Linux:
       ```bash
       source venv/bin/activate
       ```

   - **Install the dependencies:**

     ```bash
     pip install -r requirements.txt
     ```

   - **Configure Your OpenAI API Key**:

     Add your actual OpenAI API key in the `.env` file:

     ```plaintext
     OPENAI_API_KEY=sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
     ```

   - **Start the backend server:**
     - On Windows:
       ```bash
       python manage.py runserver
       ```
     - On macOS/Linux:
       ```bash
       python3 manage.py runserver
       ```

3. **Frontend Setup**:
   - **Install dependencies**:
     ```bash
     cd frontend
     npm install
     ```
   - **Start the frontend server**:
     ```bash
     npm run dev
     ```

### Folder Structure

#### Frontend

- **utils**: Configuration and utilities related to authentication.
- **views**: Contains all the UI components.

#### Backend

- **api**: Handles APIs in the Django app.
- **backend**: Main configuration for the backend.
- **rag**: Contains the RAG implementation using the OpenAI API key (not yet integrated with the backend).
- **userauth**: Handles user authentication.

### Core Features

1. Each user has their own sub-graph in the AllegroGrpah Database(The knowledge Graph) with a randomly generated name, allowing access and manipulation of their data and analysis in an isolated manner.
2. A QA system built with RAG (not yet completed) will enable users to use their data(files) to answer questions from the RAG.
