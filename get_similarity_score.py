
import os
from dotenv import load_dotenv
load_dotenv()


from openai import OpenAI
import re
openai_api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=openai_api_key)
def check(json, description):
    completion = client.chat.completions.create(
    model="gpt-3.5-turbo-0125",
    messages=[
        {"role": "system", "content": '''Task: You are tasked with finding similarity of a given description of the object with the list of objects in a JSON and then give a similarity score along with the id of the object found.

Instructions:
1.Read the description carefully and give a similarity score based on the descriptions matching the given description more closely.
2.the response should be strictly in JSON following the given format. [Description, Similarity Score]
3.If the similarity score is below 60 DO NOT include it in the response.
4.If none of them are similar at all return ["Nothing Matching with the description"]'''}, 
        {"role": "user", "content": json}, 
        {"role": "user", "content": description}
    ]
    )

    json_response = completion.choices[0].message.content
    #print(json_response)
    return json_response

