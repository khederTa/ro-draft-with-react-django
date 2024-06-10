#### 1. Setting Up a Virtual Environment

1. **Install `virtualenv` if you don't have it:**

   ```bash
   pip install virtualenv
   ```

2. **Create a virtual environment:**
   Navigate to your project directory and create a virtual environment:

   ```bash
   virtualenv venv
   ```

3. **Activate the virtual environment:**
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

#### 2. Install the Requirements

**Install the dependencies:**

```bash
pip install -r requirements.txt
```

#### 3. Configure Your OpenAI API Key

**In the `.env` file type your actual OpenAI API key**:

sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`

#### 4. Data Processing

**Run `data_processing.py` to process your PDF files:**

```bash
python data_processing.py
```

Follow the prompt to enter the directory containing your PDF files.

#### 5. Make a Query

**Run `rag_query.py` to make queries:**

   ```bash
   python rag_query.py
   ```
Follow the prompt to enter your questions.