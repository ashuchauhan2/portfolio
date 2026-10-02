from typing import TypedDict

class Movie(TypedDict):
    name : str
    year : int

movie = Movie(name="Avengers", year=2019)

movie2 = {"name": "Avengers", "year": 2019}

print(movie2["name"])
