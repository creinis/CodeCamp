d = dict()
d['quincy'] = 1
d['beau'] = 5
d['kris'] = 9

print('unsorted:')
for (k,i) in d.items():
    print(k, i)

print('sorted:')
for k,i in sorted(d.items()) :
    print(k,i)
    
print('Sorted by values insted of keys')
tmp = list()
for k,v in d.items() :
    tmp.append( {v,k} )

print(sorted(tmp))

'Shorter Version'
c = { 'quincy':1, 'beau':5, 'kris':9 }
print(sorted( [ (v,k) for k,v in c.items() ] ))


'Exemple of shotten code version'
lst = []

counts = dict()
for key, val in counts.items():
    newtup = (val, key)
    lst.append(newtup)
lst = sorted(lst, reverse=True)
print('Long Code Result:', lst)

'Shorted Version of the same code'
print('Short Code Result:')
print( sorted( [ (v,k) for k,v in counts.items() ], reverse=True ) )
