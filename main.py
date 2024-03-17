from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

from database import fetch_all_documents
from get_similarity_score import check


from database import db

app = FastAPI()

class UpdateDataModel(BaseModel):
    image: str
    location: str
    datetime: str
    description: str

class UpdateDataModelDesc(BaseModel):
    description: str

allowed_origins = [
    "http://localhost:8000",  # Adjust the port if your frontend is on a different one
    "http://127.0.0.1:8000", 
     "https://0.0.0.0:8000",
      "http://localhost:3000",  # Adjust the port if your frontend is on a different one
    "http://127.0.0.1:3000", 
     "https://0.0.0.0:3000",

       # You can add more origins as needed
]

# Add CORSMiddleware to the application
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,  # List of allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


@app.post("/update-data/")
async def update_data(update_data_model: UpdateDataModel):
    try:
        print(update_data_model)
        ref = db.collection("entries")

        data_dict = {"image": update_data_model.image, 
                     "location": update_data_model.location,
                     'datatime': update_data_model.datetime,
                     "description":update_data_model.description}
        
        ref.add(data_dict)
        
        return {"success": True, "message": "Data updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@app.get("/get-data/")
async def send_data(query:str):
    try:
        
        a = fetch_all_documents('entries')


        results = check(a, query)
        
        return results
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

def prettify(json_file):
    if json_file:
        pass
