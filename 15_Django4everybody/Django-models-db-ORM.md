## Simple Django Data Models db

### SQL Sumary 
```bash
sqlite3 zip.sqlite3

.mode column

CREATE TABLE "Users" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, 
    "name" TEXT,
    "email" TEXT
);

.tables

.schema Users

INSERT INTO Users (name, email) VALUES ('Carlos', 'carlos@email')
INSERT INTO Users (name, email) VALUES ('Kristen', 'kf@umich.edu');
INSERT INTO Users (name, email) VALUES ('Chuck', 'csev@umich.edu');
INSERT INTO Users (name, email) VALUES ('Colleen', 'cvl@umich.edu');
INSERT INTO Users (name, email) VALUES ('Ted', 'ted@umich.edu');
INSERT INTO Users (name, email) VALUES ('Sally', 'a1@umich.edu');

DELETE FROM Users WHERE email='carlos@email'
DELETE FROM Users WHERE email='ted@umich.edu';

UPDATE Users SET name="Carlos" WHERE email='carlos@email'

SELECT * FROM Users

SELECT * FROM Users WHERE email='carlos@email'

SELECT * FROM Users ORDER BY email;

SELECT * FROM Users ORDER BY name DESC;

DROP TABLE Users; 

.quit
```

## Object Relational Mapping - ORM

Allow to map tables to objects and columns
Use those objects to store and retrieve data from the db
improve portability across dbs dialects (SQLite, MySQL, Postgres, Oracle)
Django create a model in top of the dbs dialects

Python Model Library 
    models.py           < == >      dbs / dialects

#### Defining a Table:
 ```SQL
 CREATE TABLE Users(name VARCHAR(128), email VARCHAR(128));
 ```
 ```python
 //models.py

 from django.db import models

 class User(models.Model):
    name = models.CharField(max_length=128)
    email = models.CharField(max_length=128)
```
This is a migration explanation / implementation

In practice we do:
```python
python3 manage.py makemigrations

python3 manage.py migrate
```

## CRUD in the ORM

```python
u = User(name='Sally', email='sally@email')
u.save()

User.objects.values()
User.objects.filter(email='sally@email').values()

User.objects.filter(email='sally@email').delete()
User.objects.values()

User.objects.filter(email='sally@email').update(name='saly')
User.objects.values()

User.objects.values().order_by('email')
User.objects.values().order_by('-name')
```

### Model Field Types in ORM
- AutoField
- BigAutoField
- BigIntegerField
- BinaryField
- BooleanField
- CharField
- DateField
- DateTimeField
- DecimalField
- DurationField
- EmailField
- FileField
- FilePathField
- FloatField
- ImageField
- IntegerField
- GenericIPAddressField
- NullBooleanField
- PositiveIntegerField
- PositiveSmallIntegerField
- SlugField
- SmallIntegerField
- TextField
- TimeField
- URLField
- ForeignKey
- ManyToManyField
- OneToOneField

### Django for Everybody - Single Table Models

https://www.dj4e.com/lectures/DJ-02-Model-Single.txt

You can check out the Django code for this project at:

https://github.com/csev/dj4e-samples

Start the command line in a Linux/Bash shell and go into your project folder.
Activate a virtual environment if needed.
```bash
cd dj4e-samples
git pull                          # incase there are updates
pip install -r requirements4.txt  # to make sure that all the utilities are there

python manage.py check           # Make sure things are set up
python manage.py makemigrations  # Probably won't find any changes
rm db.sqlite3                     # In case you have done this before
python manage.py migrate         # Create the database and table(s)

#Start the django shell:

python manage.py shell

# (In the shell at the prompt) 

from users.models import User

u = User(name='Kristen', email='kf@umich.edu')
u.save()
u = User(name='Chuck', email='csev@umich.edu')
u.save()
u = User(name='Colleen', email='cvl@umich.edu')
u.save()
u = User(name='Ted', email='ted@umich.edu')
u.save()
u = User(name='Sally', email='a2@umich.edu')
u.save()

User.objects.values()
<QuerySet [{'id': 1, 'name': 'Kristen', 'email': 'kf@umich.edu'}, {'id': 2, 'name': 'Charles', 'email': 'csev@umich.edu'}, {'id': 3, 'name': 'Colleen', 'email': 'cvl@umich.edu'
}, {'id': 5, 'name': 'Sally', 'email': 'a2@umich.edu'}, {'id': 6, 'name': 'Kristen', 'email': 'kf@umich.edu'}, {'id': 7, 'name': 'Chuck', 'email': 'csev@umich.edu'}, {'id': 8, 
'name': 'Colleen', 'email': 'cvl@umich.edu'}, {'id': 9, 'name': 'Ted', 'email': 'ted@umich.edu'}, {'id': 10, 'name': 'Sally', 'email': 'a2@umich.edu'}]>

User.objects.filter(email='csev@umich.edu').values()
<QuerySet [{'id': 2, 'name': 'Charles', 'email': 'csev@umich.edu'}, {'id': 7, 'name': 'Chuck', 'email': 'csev@umich.edu'}]>

User.objects.filter(email='ted@umich.edu').delete()
User.objects.values()

User.objects.filter(email='csev@umich.edu').update(name='Charles')
User.objects.values()

User.objects.values().order_by('email')
User.objects.values().order_by('-name')

quit()
```

## Sumary of ORM

The Django Models feature implements an Object Relational Mapper
Benefits of it:
- can write only Python code, no need for explicit SQL codes;
- gain in db portability
- migrations both create and evolve the db schema
- a sweet administration interface
- automatic form generation and validation


# Migrations from Model to DB

- The `makemigrations` command reads all the models.py files in all the applications, end creates / evolves the migration files
- Guided by the applications listed in settings.py
- Migrations are portable across dbs
- The `migrate` command reads all the migrations folder in the application folders and creates / evolves the tables in the db.

The sumary is: `makemigrations` runs all models.py files and transforme it in a file that can actualy use explicit dbs languages. Than run `migrate` command to to run these new files created by the previous `makemigration` and finally combine models and / or data to the db.














