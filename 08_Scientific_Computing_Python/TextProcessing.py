
'ord() showns the numeric representation os ASCII characteres'

'ASCII'
print('H ins ASCII is represented by the number:', ord('H'))
print('A ins ASCII is represented by the number:', ord('A'))
print('a ins ASCII is represented by the number:', ord('a'))
print('NewLine in ASCII is represented by the number:', ord('\n'))

'Converter'
while True:
    inp = input('Enter a Character: ')
    if inp == 'done' : break
    if inp == 'exit' : break
    value = ord(inp)
    print(inp, 'in ASCII is represented by the number:', value)
