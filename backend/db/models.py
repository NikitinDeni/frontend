from sqlalchemy.orm import declarative_base
from sqlalchemy import Column, UUID, String, Boolean, LargeBinary
import uuid

BaseModel =  declarative_base()

class User(BaseModel):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    hashed_password = Column(LargeBinary, nullable=False)
    is_active = Column(Boolean, nullable=False, default=True)
