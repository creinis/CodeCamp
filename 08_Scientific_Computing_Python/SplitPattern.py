line = 'From fidelidade.olival@gmail.com 14. Dec 2023 at 10:38 wrote:'
    
words = line.split()
email = words[1]
pieces = email.split('@')
print(pieces[1])
