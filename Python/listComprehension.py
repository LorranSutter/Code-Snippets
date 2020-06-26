print('Simple list')
l = [i for i in range(10)]
print(l)

print()

print('2 Dimensions list')
l = [[i for i in range(2)] for j in range(3)]
print(l)

print()

print('Conditional list - only even numbers')
l = [i for i in range(10) if i % 2 == 0]
print(l)
