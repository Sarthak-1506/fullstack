import re

text = "Hello Python"

x = re.search("Python", text)

if x:
    print("Word Found")
else:
    print("Word Not Found")