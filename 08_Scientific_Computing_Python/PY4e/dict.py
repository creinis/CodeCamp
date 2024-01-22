'Dictionanies A'
dict = {"Fri": 20, "Thu": 6, "Sat": 1}
dict["Thu"] = 13
dict["Sat"] = 2
dict["Sun"] = 9

print('Dictionanies A:', dict)

'Dictionanies B'
counts = { 'quincy' : 1 , 'mrugesh' : 42, 'beau': 100, '0': 10}
print('Dictionanies B:', counts.get('kris', 0))

'Dictionanies and Loops'
counts = { 'chuck' : 1, 'fred' : 42, 'jan' : 100 }
print('Dictionanies and Loops:')
print('List Method', list(counts))
print('Keys Method', counts.keys())
print('Items Method', counts.items())
for key in counts:
    print(key, counts[key])
    
'Two Iterations Variables'
jjj = { 'chuck' : 1, 'fred' : 42, 'jan' : 100 }
print('Two Iterations Variables')
for aaa,bbb in jjj.items() :
    print(aaa, bbb)
    
'Real World Application of Dictionaies'
 
name = input('Enter file:')
handle = open(name)

counts = dict()
for line in handle:
    words = line.split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1

bigcount = None
bigword = None
for word,count in counts.items():
    if bigcount is None or count > bigcount:
        bigword = word
        bigcount = count

print(bigword, bigcount)
