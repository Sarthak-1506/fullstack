users = {'sarthak': '1234', 'rahul': 'pass123', 'amit': 'abcd'}

for i in users:
    if len(users[i]) < 5:
        print(i, "has weak password")
    else:
        print(i, "has strong password")
