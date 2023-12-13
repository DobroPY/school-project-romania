# W/ POSTMAN
<br/><br/>

# Create Director: 

### POST
http://localhost:6868/api/directors?firstName=Calin&middleName=Ioan&lastName=Popescu&email=calinjovrea@gmail.com&rank=1&status=1

### GET
# Read (Director Where Id == 1 ):
http://localhost:6868/api/directors/1

### PUT
# Update ( Director Where Id == 2 ):
http://localhost:6868/api/directors/2?status=0

### DELETE
# Delete ( Director Where Id == 4 ):
http://localhost:6868/api/directors/4

<br/><br/>

# Create Teacher 

### POST
http://localhost:6868/api/teachers?firstName=Calinescu&middleName=Ionescu&lastName=Popescu&email=calinpopescu@gmail.com&rank=1&status=1

### GET
# Read (Teacher Where Id == 1 ):
http://localhost:6868/api/teachers/1

### PUT
# Update ( Teacher Where Id == 2 ):
http://localhost:6868/api/teachers/2?status=0

### DELETE
# Delete ( Teacher Where Id == 4 ):

http://localhost:6868/api/teachers/4


<br/><br/>

# Create Student 

### POST
http://localhost:6868/api/students?firstName=Calin&middleName=Ionescu&lastName=Popescu&email=calinjovrea@gmail.com&class=1&rank=1&status=1

### GET
# Read (Student Where Id == 1 ):
http://localhost:6868/api/students/1

### PUT
# Update ( Student Where Id == 2 ):
http://localhost:6868/api/students/2?status=0

### DELETE
# Delete ( Student Where Id == 4 ):

http://localhost:6868/api/students/4

<br/><br/>

# Create Classroom 

### POST
http://localhost:6868/api/classrooms?teacher=1&name=biology&seats=30&status=1

### GET
# Read (Classroom Where Id == 1 ):
http://localhost:6868/api/classrooms/1

### PUT
# Update ( Classroom Where Id == 2 ):
http://localhost:6868/api/classrooms/2?status=0

### DELETE
# Delete ( Classroom Where Id == 4 ):

http://localhost:6868/api/classrooms/4


<br/><br/>


# Create User

### POST
http://localhost:6868/api/users?firstName=Calin&middleName=Ioan&lastName=Jovrea&email=calinjovrea@gmail.com&password=password_1&status=1

### GET
# Read (User Where Id == 1 ):
http://localhost:6868/api/users/1

### PUT
# Update ( User Where Id == 2 ):
http://localhost:6868/api/users/2?status=0

### DELETE
# Delete ( User Where Id == 4 ):

http://localhost:6868/api/users/4


<br/><br/>


# Create Calendar

### POST
http://localhost:6868/api/calendars?month=12&year=2023&classrooms="{'classrooms': '1,2,3,4,5,6,7,8'}"

### GET
# Read (Calendar Where Id == 1 ):
http://localhost:6868/api/calendars/1

### PUT
# Update ( Calendar Where Id == 2 ):
http://localhost:6868/api/calendars/2?year=2024

### DELETE
# Delete ( Calendar Where Id == 4 ):

http://localhost:6868/api/calendars/4


<br/><br/>


# Create Modules

### POST
http://localhost:6868/api/modules?teacher=1&name='Biology'

### GET
# Read (Module Where Id == 1 ):
http://localhost:6868/api/modules/1

### PUT
# Update ( Module Where Id == 2 ):
http://localhost:6868/api/modules/2?name='Maths'

### DELETE
# Delete ( Module Where Id == 4 ):

http://localhost:6868/api/modules/4


<br/><br/>

# Create Absences

### POST
http://localhost:6868/api/absences?day=1&month=12&year=2023&email=calinjovrea@gmail.com&classrooms="{'classrooms': '1,2,3,4,5,6,7,8'}"&modules="1,2,3,4,5,6,7"

### GET
# Read (Module Where Id == 1 ):
http://localhost:6868/api/absences/1

### PUT
# Update ( Module Where Id == 2 ):
http://localhost:6868/api/absences/2?email='calinpopescu@gmail.com'

### DELETE
# Delete ( Module Where Id == 4 ):

http://localhost:6868/api/absences/4


<br/><br/>

# Create Grades

### POST
http://localhost:6868/api/grades?day=1&month=12&year=2023&email=calinjovrea@gmail.com&classrooms="{'classrooms': '1,2,3,4,5,6,7,8'}"&modules="1,2,3,4,5,6,7"&grades='{"grades": "10,2,8,7,5"}'&rewards='{"rewards": "-1,+2,+3,-4,+1"}'

### GET
# Read (Module Where Id == 1 ):
http://localhost:6868/api/grades/1

### PUT
# Update ( Module Where Id == 2 ):
http://localhost:6868/api/grades/2?email='calinpopescu@gmail.com'

### DELETE
# Delete ( Module Where Id == 4 ):

http://localhost:6868/api/grades/4

<br/><br/>

# Create Review

### POST
http://localhost:6868/api/reviews?day=1&month=12&year=2023&email=calinjovrea@gmail.com&classrooms="{'classrooms': '1,2,3,4,5,6,7,8'}"&modules="1,2,3,4,5,6,7"&teacher_email=calinpopescu@gmail.com&review='Great Teacher !'

### GET
# Read (Module Where Id == 1 ):
http://localhost:6868/api/reviews/1

### PUT
# Update ( Module Where Id == 2 ):
http://localhost:6868/api/reviews/2?email='calinpopescu@gmail.com'

### DELETE
# Delete ( Module Where Id == 4 ):

http://localhost:6868/api/reviews/4