# W/ POSTMAN
<br/><br/>

# Create Director: 

## BODY 

{"email": "calinjovrea@gmail.com", "first_name": "first_name_1", "middle_name": "middle_name_2", "middle_name": "middle_name_2"}

### POST
http://localhost:6868/api/directors?first_name=Calin&middle_name=Ioan&middle_name=Popescu&email=calinjovrea@gmail.com&rank=1&status=1

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

## BODY 

{"email": "teacher@gmail.com", "first_name": "first_name_1", "middle_name": "middle_name_2", "middle_name": "middle_name_2"}


### POST
http://localhost:6868/api/teachers?first_name=Calinescu&middle_name=Ionescu&middle_name=Popescu&email=calinpopescu@gmail.com&rank=1&status=1

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

## BODY

{"email": "student@gmail.com", "first_name": "first_name_1", "middle_name": "middle_name_2", "middle_name": "middle_name_2"}

### POST
http://localhost:6868/api/students?first_name=Calin&middle_name=Ionescu&middle_name=Popescu&email=calinjovrea@gmail.com&class=1&rank=1&status=1

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

## BODY

{"teacher": 1,
"name": "biology",
"seats": 30,
"status": 1}

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

## BODY

{"email": "calinjovrea321@gmail.com", "password": "123123123", "first_name": "first_name_1", "middle_name": "middle_name_2", "middle_name": "middle_name_2"}

### POST
http://localhost:6868/api/users?first_name=Calin&middle_name=Ioan&middle_name=Jovrea&email=calinjovrea@gmail.com&password=password1&status=1

http://localhost:6868/api/users?first_name=Calinescu&middle_name=Ionescu&middle_name=Jovrescu&email=calinjovrea12354@gmail.com&password=password1&status=1

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

## BODY

{
    "month": 12,
    "year": 2023,
    "classrooms":"{'classrooms': '1,2,3,4,5,6,7,8'}"
}

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

## BODY
{
  "name": "Biology",
  "teacher_email": "calinjovrea@gmail.com"
}


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

## BODY 

{"teacher": 1, "student": 1, "day": 1, "month": 12, "year": 2021, "classroom": 4, "module": 7, "email": "student@gmail.com","teacher_email": "teacher@gmail.com", "review": "REview"}


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

## BODY
{
  "day": 1,
  "month": 12,
  "year": 2023,
  "email": "calinjovrea@gmail.com",
  "classroom": "{classrooms: 1,2,3,4,5,6,7,8 }",
  "module": "1,2,3,4,5,6,7",
  "grade": "{grades: 10,2,8,7,5}",
  "reward": 1
}

### POST
http://localhost:6868/api/grades?day=1&month=12&year=2023&email=calinjovrea@gmail.com&classrooms="{'classrooms': '1,2,3,4,5,6,7,8'}"&modules="1,2,3,4,5,6,7"&grades='{"grades": "10,2,8,7,5"}'&reward='{"rewards": "-1,+2,+3,-4,+1"}'

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

# Create Reviews

## BODY
{"teacher": 1, "student": 1, "day": 1, "month": 12, "year": 2021, "classroom": 4, "module": 7, "email": "student@gmail.com","teacher_email": "teacher@gmail.com", "review": "REview"}


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



