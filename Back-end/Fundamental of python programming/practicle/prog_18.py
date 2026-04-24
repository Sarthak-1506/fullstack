class MyIterator:
    def __init__(self, data):
        self.data = data
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index < len(self.data):
            value = self.data[self.index]
            self.index += 1
            return value
        else:
            raise StopIteration


# List of integers
numbers = [10, 20, 30, 40]

# Creating iterator object
it = MyIterator(numbers)

# Iterating using custom iterator
for num in it:
    print(num)
