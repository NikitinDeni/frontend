from fastapi.routing import APIRouter
from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession
from db.sessions import get_db_session
from user.shemas import UserShema, UserCreate
from user.actions import _create


router = APIRouter()

@router.post("/", response_model=UserShema)
async def create(body: UserCreate, session:AsyncSession=Depends(get_db_session)) -> UserShema:
    return await _create(body, session=session)
