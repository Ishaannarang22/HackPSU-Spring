import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import datetime
import json

# Use the service account
cred = credentials.Certificate('findmyshit-8c408-firebase-adminsdk-rhphj-1274c070de.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

def fetch_all_documents(collection_name):
    collection_ref = db.collection(collection_name)
    docs = collection_ref.stream()

    docs_list = [{**doc.to_dict(), 'id': doc.id} for doc in docs]  # Convert documents to dictionaries
    json_data = json.dumps(docs_list, indent=2)  # Convert the list of dictionaries to a JSON string
    
    print(json_data)
    return json_data

# Example usage



# Data to be added
# data = {
#     'images': ['image1_url', 'image2_url'],  # List of image URLs
#     'location': 'Your Location',  # String
#     'datetime': datetime.datetime.now(),  # Current date and time
#     'description': 'Description of the entry',
#     'Gpt-description': 'hidvbs'  # String
# }

# # Add a new document
# db.collection('entries').add(data)


# from datetime import datetime, timedelta

# # Define start and end dates
# start_date = datetime.now() - timedelta(days=7)  # 7 days ago
# end_date = datetime.now()

# # Query documents within the date range
# query_results = db.collection('entries').where('datetime', '>=', start_date).where('datetime', '<=', end_date).stream()

# for doc in query_results:
#     print(f'{doc.id} => {doc.to_dict()}')

