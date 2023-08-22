python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

alembic upgrade heads
alembic revision --autogenerate -m "Коментарий"


docker compose build
docker compose up
docker compose down