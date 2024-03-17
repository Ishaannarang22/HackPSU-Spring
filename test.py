import requests
import datetime
from pydantic import BaseModel


descriptions = [
    "airpods 3 with a black cover",
    "Jangly, metal, has a bottle opener keychain.",
    "Frayed cable, still works, white, for phone.",
    "Heavy, lifesaver, black, kinda bulky.",
    "Picture's terrible, student discount pass, hangs on lanyard.",
    "Leather, overstuffed, barely closes, old receipts inside.",
    "Shiny, heirloom, ticks loud, shows off wealth.",
    "Red, zip's broken, carries essentials.",
    "Faded blue, zipper sticks, coffee stain, carries books."
]

# URL to which the POST request will be made
url = "http://127.0.0.1:8000/update-data/"

# Iterate over each description and make the POST request
for description in descriptions:
    # Create an instance of the UpdateDataModel with an empty image, location, and the current description
    # For datetime, use the current time
    data = {
        "image": "",
        "location": "",
        "datetime": datetime.datetime.now().isoformat(),
        "description": description
    }
    
    # Send the POST request with the JSON data
    response = requests.post(url, json=data)
    
    # Check if the POST request was successful
    if response.status_code == 200:
        print(f"Successfully posted: {description}")
    else:
        print(f"Failed to post: {description} with status code: {response.status_code}")


return_format = "{id:[similarity_scores, location]}"
print(return_format)


