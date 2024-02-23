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
            # Testando todas as combinações possíveis de sal e senha
            if hashlib.sha1((salt + password).encode('utf-8')).hexdigest() == hash:
                return password
            if hashlib.sha1((password + salt).encode('utf-8')).hexdigest() == hash:
                return password
            if hashlib.sha1((salt + password + salt).encode('utf-8')).hexdigest() == hash:
                return password

    return "PASSWORD NOT IN DATABASE"

# Testando a função
print(crack_sha1_hash('b305921a3723cd5d70a375cd21a61e60aabb84ec'))  # Deve retornar 'sammy123'
print(crack_sha1_hash('c7ab388a5ebefbf4d550652f1eb4d833e5316e3e'))  # Deve retornar 'abacab'
print(crack_sha1_hash('5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8'))  # Deve retornar 'password'
print(crack_sha1_hash('53d8b3dc9d39f0184144674e310185e41a87ffd5', use_salts=True))  # Deve retornar 'superman'
print(crack_sha1_hash('da5a4e8cf89539e66097acd2f8af128acae2f8ae', use_salts=True))  # Deve retornar 'q1w2e3r4t5'
print(crack_sha1_hash('ea3f62d498e3b98557f9f9cd0d905028b3b019e1', use_salts=True))  # Deve retornar 'bubbles1'
