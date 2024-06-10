import pandas as pd
import numpy as np
from dotenv import load_dotenv
from franz.openrdf.connect import ag_connect
from franz.openrdf.vocabulary import RDF
from franz.openrdf.query.query import QueryLanguage
import os
# Load environment variables from .env file
load_dotenv()

# Connect to AllegroGraph
conn = ag_connect('test-repo', host='localhost', port='10035', user='test', password='xyzzy')

def do_query(user_question):
    if user_question is None or user_question.strip() == "":
        return ""
    else:
        query_string = build_query(user_question)
        try:
            tuple_query = conn.prepareTupleQuery(QueryLanguage.SPARQL, query_string)
            result = tuple_query.evaluate()
            response = None
            with result:
                for binding_set in result:
                    response = binding_set.getValue("response")
            return response
        except Exception as e:
            print(f"Error executing query: {e}")
            return ""

def build_query(user_question):
    sparql_query = f"""
        PREFIX franzOption_openaiApiKey: <franz:{os.getenv('OPENAI_API_KEY')}>
        PREFIX llm: <http://franz.com/ns/allegrograph/8.0.0/llm/>  
        PREFIX inegration: <http://www.semanticweb.org/ssharani/ontologies/2022/RefugeeOntology/integration>
        SELECT ?response ?citation ?score ?content WHERE {{
            BIND("{user_question}" AS ?query)
            (?response ?score ?citation ?content) llm:askMyDocuments(?query "integration" 4 0.75).
            ?citation drmo:hasAuthor ?author.
        }}
    """
    return sparql_query

user_question = input('Hey, Enter You Question: ')
res = do_query(user_question=user_question)
print(res)

# Close the connection
conn.close()
