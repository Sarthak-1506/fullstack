scores = {'p1': 40, 'p2': 70, 'p3': 90}
bonus = {}

for i in scores:
    if scores[i] >= 80:
        bonus[i] = scores[i] + 20
    else:
        bonus[i] = scores[i] + 10

print("Without Bonus Points : ",scores)
print("With Bonus Points : ",bonus)
