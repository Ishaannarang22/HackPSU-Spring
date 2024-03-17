from database import fetch_all_documents
from get_similarity_score import check

a = fetch_all_documents('entries')


print(check(a, "black and silver watch"))


