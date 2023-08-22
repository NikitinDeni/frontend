from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from typing import Generator
from sqlalchemy.orm import sessionmaker
from .settings import DATABASE_URL


engine = create_async_engine(DATABASE_URL, future=True, echo=True)
async_session_maker = sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)

async def get_db_session() -> Generator:
    try:
        session: AsyncSession = async_session_maker()
        yield session
    finally:
        await session.close()