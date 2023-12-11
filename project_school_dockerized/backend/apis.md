# W/ POSTMAN 

### Create Director: 

## POST
http://localhost:6868/api/directors?email=calinjovrea@gmail.com&rank=1&status=1

## GET
# Read (Director Where Id == 1 ):
http://localhost:6868/api/directors/1

## PUT
# Update ( Director Where Id == 2 ):
http://localhost:6868/api/directors/2?status=0

## DELETE
# Delete ( Director Where Id == 4 ):
http://localhost:6868/api/directors/4



### Create Teacher 

## POST
http://localhost:6868/api/teachers?email=calinjovrea@gmail.com&rank=1&status=1

## GET
# Read (Teacher Where Id == 1 ):
http://localhost:6868/api/teachers/1

## PUT
# Update ( Teacher Where Id == 2 ):
http://localhost:6868/api/teachers/2?status=0

## DELETE
# Delete ( Teacher Where Id == 4 ):

http://localhost:6868/api/teachers/4


### Create Student 

## POST
http://localhost:6868/api/students?email=calinjovrea@gmail.com&class=1&rank=1&status=1

## GET
# Read (Student Where Id == 1 ):
http://localhost:6868/api/students/1

## PUT
# Update ( Student Where Id == 2 ):
http://localhost:6868/api/students/2?status=0

## DELETE
# Delete ( Student Where Id == 4 ):

http://localhost:6868/api/students/4

### Create Classroom 

## POST
http://localhost:6868/api/classrooms?teacher=calinjovrea&name=biology&seats=30&status=1

## GET
# Read (Classroom Where Id == 1 ):
http://localhost:6868/api/classrooms/1

## PUT
# Update ( Classroom Where Id == 2 ):
http://localhost:6868/api/classrooms/2?status=0

## DELETE
# Delete ( Classroom Where Id == 4 ):

http://localhost:6868/api/classrooms/4


### Create User

## POST
http://localhost:6868/api/users?email=calinjovrea@gmail.com&password=password_1&status=1

## GET
# Read (Classroom Where Id == 1 ):
http://localhost:6868/api/users/1

## PUT
# Update ( Classroom Where Id == 2 ):
http://localhost:6868/api/users/2?status=0

## DELETE
# Delete ( Classroom Where Id == 4 ):

http://localhost:6868/api/users/4

