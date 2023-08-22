from db.models import User
from db.dals import UserDAL
from user.shemas import UserShema, UserCreate
from sqlalchemy.ext.asyncio import AsyncSession
from uuid import UUID
from fastapi import HTTPException


async def _create(body: UserCreate, session: AsyncSession) -> UserShema:
    user: User = await UserDAL(session).create(name=body.name, email=body.email, password=body.password)
    return UserShema(user_id=user.id, name=user.name, email=user.email, is_active=user.is_active)
