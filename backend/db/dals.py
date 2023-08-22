from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError
from db.models import User
from pydantic import EmailStr
from uuid import UUID
from auth.hashing import hash_password

class UserDAL():
    def __init__(self, db_session: AsyncSession) -> None:
        self.db_session = db_session


    async def create(self, name: str, email:EmailStr, password:str) -> User:
        async with self.db_session.begin():
            new_user = User(name=name, email=email, hashed_password=hash_password(password.encode("utf-8")))
            self.db_session.add(new_user)
            try:
                await self.db_session.flush()
            except IntegrityError as e:
                raise e
            return new_user
