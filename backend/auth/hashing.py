from bcrypt import hashpw, checkpw, gensalt

def hash_password(bytes_to_hash: bytes) -> bytes:
    return hashpw(bytes_to_hash, gensalt())

def verify_password(hashed_password:bytes, password:str) -> bool:
    return checkpw(password, hashed_password)
