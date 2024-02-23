import hashlib

# Function to read the password file
def read_passwords_file(file_path):
    with open(file_path, 'r') as file:
        passwords = [line.strip() for line in file]
    return passwords

# Test
passwords = read_passwords_file('top-10000-passwords.txt')
print("\n Test Reading Passwods DB file \n", passwords[:15], "\n")

# Function to read the salt file
def read_salt_file(file_path):
    with open(file_path, 'r') as file:
        salts = [line.strip() for line in file]
    return salts

# Test
salts = read_salt_file('known-salts.txt')
print(" Test Reading known-salts file \n", salts[:5], "\n")

def crack1(hash_to_crack, passwords):
    for password in passwords:
        hashes_password = hashlib.sha1(password.encode()).hexdigest()
        if hashed_password == hash_to_crack:
            return password
    return "PASSWORD NOT IN DATABASE"

#Test
hashed_password = '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8'
password = crack1(hashed_password, passwords)
print("Password cracked: ", password)

