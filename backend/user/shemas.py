from pydantic import BaseModel
from pydantic import EmailStr
from uuid import UUID


class UserShema(BaseModel):
    user_id: UUID
    name: str
    email: EmailStr
    is_active: bool

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
