# # Print the first row
print('X', end='')
for i in range(1, 13):
    print(f'{i:4}', end='')
print()
# Print the remaining rows
for i in range(1, 13):
    print(i, end='')
    for j in range(1, 13):
        print(f'{i*j:4}', end='')
    print()