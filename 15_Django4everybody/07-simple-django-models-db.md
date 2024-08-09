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
















