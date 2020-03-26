# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: animal_id, it is part of the Sightings model

  Researched answer:



2. Which routes must always be passed params and why?

  Your answer: Show, update and delete must be passed params. Becasue these methods need to know which id to be manipulated.

  Researched answer:



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:
  get '/game/:guess' => 'main#game'



4. Name three rails generator commands. What is created by each?

  Your answer: rails generate model #generate a model 
               ralis generate migration  #generate a migration file to modify model
               rails generate controller #generate a controller

  Researched answer:



5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"      #display all users

/users/1      method="GET"      #display user with id 1

/users/new    method="GET"      #display a form to create a new user

/users/       method="POST"     #create a new user   

/users/1      method="PUT"      #update the user with id 1 

/users/1      method="DELETE"   #delete the user with id 1
