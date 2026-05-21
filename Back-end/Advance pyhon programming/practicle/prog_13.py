import re

text = "Hello Python"

x = re.match("Hello", text)

if x:
    print("Match Found")
else:
    print("Match Not Found")