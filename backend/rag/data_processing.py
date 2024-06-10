import fitz  # PyMuPDF
import os
from dotenv import load_dotenv
from franz.openrdf.connect import ag_connect
from franz.openrdf.vocabulary import RDF
from franz.openrdf.repository.repository import RepositoryConnection
from transformers import AutoTokenizer, AutoModel
import torch

# Load environment variables from .env file
load_dotenv()

# Define Dublin Core namespace
DC_NAMESPACE = "http://purl.org/dc/elements/1.1/"
DC_DESCRIPTION = DC_NAMESPACE + "description"

# Initialize model and tokenizer
tokenizer = AutoTokenizer.from_pretrained("gpt-3.5-turbo")
model = AutoModel.from_pretrained("gpt-3.5-turbo")

# Function to extract and split text from PDFs into chunks
def extract_text_from_pdfs(directory, chunk_size=2500):
    pdf_contents = {}
    for filename in os.listdir(directory):
        if filename.endswith(".pdf"):
            filepath = os.path.join(directory, filename)
            try:
                document = fitz.open(filepath)
            except Exception as e:
                print(f"Error opening {filepath}: {e}")
                continue
            text = ""
            for page_num in range(len(document)):
                page = document.load_page(page_num)
                text += page.get_text()
            # Split text into chunks
            chunks = [text[i:i + chunk_size] for i in range(0, len(text), chunk_size)]
            pdf_contents[filename] = chunks
    return pdf_contents

# Function to get text embedding using the model
def get_embedding(text):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    with torch.no_grad():
        outputs = model(**inputs)
    return outputs.last_hidden_state.mean(dim=1).detach().cpu().numpy()

# Function to store PDF chunks and embeddings in AllegroGraph
def store_pdf_chunks_with_embeddings(pdf_contents, conn: RepositoryConnection):
    for filename, chunks in pdf_contents.items():
        for i, content in enumerate(chunks):
            graph_uri = conn.createURI(f"http://www.semanticweb.org/ssharani/ontologies/2022/RefugeeOntology/integration/graph/{filename}_chunk_{i}")
            chunk_uri = conn.createURI(f"http://www.semanticweb.org/ssharani/ontologies/2022/RefugeeOntology/integration/{filename}_chunk_{i}")
            content_literal = conn.createLiteral(content)
            conn.addTriple(chunk_uri, conn.createURI(DC_DESCRIPTION), content_literal, graph_uri)
            
            # Store embedding
            embedding = get_embedding(content).tolist()
            embedding_literal = conn.createLiteral(str(embedding))
            conn.addTriple(chunk_uri, conn.createURI("http://www.semanticweb.org/ssharani/ontologies/2022/RefugeeOntology/integration/embedding"), embedding_literal, graph_uri)

# Connect to AllegroGraph
conn = ag_connect('test-repo', host='localhost', port='10035', user='test', password='xyzzy')

# Directory containing PDF files
pdf_directory = input('Enter Your Data Directory: ')
if not os.path.isdir(pdf_directory):
    raise ValueError("The provided path is not a directory or does not exist.")

# Extract and store PDF content with embeddings
print('Extracting Data...')
pdf_contents = extract_text_from_pdfs(pdf_directory)

print('Storing Data...')
store_pdf_chunks_with_embeddings(pdf_contents, conn)

# Close the connection
conn.close()

print('Well Done :-)')
