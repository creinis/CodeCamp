import hashlib

def crack_sha1_hash(hash, use_salts=False):
    with open('top-10000-passwords.txt', 'r') as f:
        passwords = f.read().splitlines()

    if use_salts:
        with open('known-salts.txt', 'r') as f:
            salts = f.read().splitlines()
    else:
        salts = ['']

    for password in passwords:
        for salt in salts:
            if hashlib.sha1((salt + password).encode('utf-8')).hexdigest() == hash:
                return password
            if hashlib.sha1((password + salt).encode('utf-8')).hexdigest() == hash:
                return password
            if hashlib.sha1((salt + password + salt).encode('utf-8')).hexdigest() == hash:
                return password

    return "PASSWORD NOT IN DATABASE"
