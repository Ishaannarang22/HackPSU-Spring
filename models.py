from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

import uuid
from .database import Base

def generate_uuid():
        return str(uuid.uuid4())

class Register(Base):
    __tablename__ = "Details"

    uuid = Column(String, name="uuid", primary_key=True, default=generate_uuid)
    #id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    phone = Column(Integer)