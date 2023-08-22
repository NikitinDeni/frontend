# from envparse import Env
# from datetime import timedelta

# env = Env()

# USER_NAME = env.str("POSTGRES_USER", default="postgres")
# USER_PASSWORD = env.str("POSTGRES_PASSWORD", default="postgres")
# BD_NAME = env.str("POSTGRES_DB", default="db")
# PORT = "5432"
# HOST = "0.0.0.0"
USER_NAME = "postgres"
USER_PASSWORD = "postgres"
BD_NAME = "db"
PORT = "5432"
HOST = "0.0.0.0"

DATABASE_URL = f"postgresql+asyncpg://{USER_NAME}:{USER_PASSWORD}@{HOST}:{PORT}/{BD_NAME}"