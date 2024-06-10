import os
from franz.openrdf.sail.allegrographserver import AllegroGraphServer
from franz.openrdf.repository.repository import Repository
from franz.openrdf.query.query import QueryLanguage
from dotenv import load_dotenv

load_dotenv()

def connect_agraph_server():
    AGRAPH_HOST = os.getenv('AGRAPH_HOST')
    AGRAPH_PORT = os.getenv('AGRAPH_PORT')
    AGRAPH_USER = os.getenv('AGRAPH_USER')
    AGRAPH_PASSWORD = os.getenv('AGRAPH_PASSWORD')

    server = AllegroGraphServer(AGRAPH_HOST, AGRAPH_PORT, AGRAPH_USER, AGRAPH_PASSWORD)
    return server

def connect_to_repo():
    server = connect_agraph_server()
    catalog = server.openCatalog('')
    repository = catalog.getRepository('refugee_ontology', Repository.ACCESS)
    repository.initialize()
    return repository

def create_user_graph(user_id):
    repository = connect_to_repo()
    conn = repository.getConnection()

    try:
        user_graph_uri = f"http://www.semanticweb.org/ssharani/ontologies/2022/RefugeeHomeReturnOntology/{user_id}"
        conn.setNamespace('user', user_graph_uri)
        conn.addStatement(user_graph_uri, "rdf:type", "owl:Ontology")
        conn.commit()
    except Exception as e:
        print(f"Error creating user graph: {e}")
    finally:
        conn.close()



def add_data_to_user_graph(user_graph, payload):
    query = f"""
                PREFIX owl: <http://www.w3.org/2002/07/owl#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                PREFIX ref: <http://www.semanticweb.org/ssharani/ontologies/2022/RefugeeHomeReturnOntology#>
                INSERT DATA {'{'}
                GRAPH <{user_graph}> {'{'}
                """
    options = ''
    if 'refugee' in payload:
        options += f'"{payload['refugee']}" rdf:type ref:Refugee .\n'
    if 'hostBelonging' in payload:
        options += f'"{payload['refugee']}" ref:belongTo "{payload['hostBelonging']}" .\n'
    if 'homeBelonging' in payload:
        options += f'"{payload['refugee']}" ref:belongTo "{payload['homeBelonging']}" .\n'
    if 'hostAttachment' in payload:
        options += f'"{payload['refugee']}" ref:isAttachedTo "{payload['hostAttachment']}" .\n'
    if 'homeAttachment' in payload:
        options += f'"{payload['refugee']}" ref:isAttachedTo "{payload['homeAttachment']}" .\n'
    if 'highAgency' in payload:
        options += f'"{payload['refugee']}" ref:hasAgency "{payload['highAgency']}" .\n'
    if 'lowAgency' in payload:
        options += f'"{payload['refugee']}" ref:hasAgency "{payload['lowAgency']}" .\n'
    if 'economicWellbeing' in payload:
        options += f'"{payload['refugee']}" ref:hasExpectedLevelOfReintegration "{payload['economicWellbeing']}" .\n'
    if 'politicalProcess' in payload:
        options += f'"{payload['refugee']}" ref:hasExpectedLevelOfReintegration "{payload['politicalProcess']}" .\n'
    if 'socialCapital' in payload:
        options += f'"{payload['refugee']}" ref:hasExpectedLevelOfReintegration "{payload['socialCapital']}" .\n'
    if 'culturalIntegration' in payload:
        options += f'"{payload['refugee']}" ref:hasLevelOfIntegration "{payload['culturalIntegration']}" .\n'
    if 'economicIntegration' in payload:
        options += f'"{payload['refugee']}" ref:hasLevelOfIntegration "{payload['economicIntegration']}" .\n'
    if 'socialIntegration' in payload:
        options += f'"{payload['refugee']}" ref:hasLevelOfIntegration "{payload['socialIntegration']}" .\n'
    if 'transnationalism' in payload:
        options += f'"{payload['refugee']}" ref:practiceTransnationalism "{payload['transnationalism']}" .\n'

    sparql_query = query + options + "}}"
    print(sparql_query)
    try:
        repository = connect_to_repo()
        conn = repository.getConnection()
        conn.prepareUpdate(QueryLanguage.SPARQL, sparql_query).evaluate()
        conn.commit()
    except Exception as e:
        print(f"Error querying data: {e}")
    finally:
        conn.close()


def wouldBeReturnee(user_graph):
    repository = connect_to_repo()
    conn = repository.getConnection()
    
    try:
        user_graph_uri = f"http://www.semanticweb.org/ssharani/ontologies/2022/RefugeeHomeReturnOntology/{user_graph}"
        
        sparql_query = f"""
            PREFIX owl: <http://www.w3.org/2002/07/owl#>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX ref: <http://www.semanticweb.org/ssharani/ontologies/2022/RefugeeHomeReturnOntology#>
            SELECT DISTINCT ?refugee
            WHERE {{
                GRAPH <{user_graph}> {{{{
                    ?refugee ref:hasAgency ?refAgency .
                    ?refAgency rdf:type ref:HighAgency .
                    ?refugee ref:practiceTransnationalism ?trans .
                }} UNION {{
                    ?refugee ref:hasAgency ?refAgency .
                    ?refAgency rdf:type ref:HighAgency .
                    ?refugee ref:hasExpectedLevelOfReintegration ?reintegrationSocialCapital .
                    ?reintegrationSocialCapital rdf:type ref:SocialCapital .
                }} UNION {{
                    ?refugee ref:hasAgency ?refAgency .
                    ?refAgency rdf:type ref:HighAgency .
                    ?refugee ref:hasExpectedLevelOfReintegration ?reintegrationEconomicWellbeing .
                    ?reintegrationEconomicWellbeing rdf:type ref:EconomicWellbeing .
                }} UNION {{
                    ?refugee ref:hasAgency ?refAgency .
                    ?refAgency rdf:type ref:HighAgency .
                    ?refugee ref:hasExpectedLevelOfReintegration ?reintegrationPoliticalProcess .
                    ?reintegrationPoliticalProcess rdf:type ref:PoliticalProcess .
                }} UNION {{
                    ?refugee ref:belongTo ?homeBelonging .
                    ?homeBelonging rdf:type ref:HomeBelonging .
                }} UNION {{
                    ?refugee ref:isAttachedTo ?homeAttachment .
                    ?homeAttachment rdf:type ref:HomeAttachment .
                }} UNION {{
                    ?refugee ref:makePlaceOf ?homeMaking .
                    ?homeMaking rdf:type ref:HomeMaking .
                }}
                }}
            }}
        """
        
        tuple_query = conn.prepareTupleQuery(QueryLanguage.SPARQL, sparql_query)
        result = tuple_query.evaluate()

        result_list = []
        for binding_set in result:
            refugee = binding_set.getValue("refugee")
            result_list.append(refugee)

        result.close()
        return result_list
    except Exception as e:
        print(f"Error querying data: {e}")
    finally:
        conn.close()
