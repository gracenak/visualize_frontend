<h1>Visualize</h1>

A virtual vision board for everyone to utilize. You can create a vision by entering a catchy title, description/quote, selecting a theme, and uploading an image to visually motivate you. You can also delete your visions that you've already accomplished or have simply decided that you don't want to see anymore. This is a collaborative vision board. Enjoy!

This rails application was created as a project requirement for the <a href="https://flatironschool.com/career-courses/coding-bootcamp/online">Flatiron Online Software Engineering Program</a>.

For more information, check out <a href="https://gracenak.medium.com/jingle-bell-rails-associations-and-nested-forms-all-the-way-31ce77e4e4f8">my blog</a> and a <a href="https://www.youtube.com/watch?v=NdAa5LUz7Ns&t=14s">walkthrough demonstration</a> of this project.

An MVP JS Frontend application with a Rails API backend that demonstrate Client-Server Communication and use:
<h4>JavaScript</h4>
<ul>
    <li> OOJS classes and functions to encapsulate related data and behavior
    <li> ES6 Features such as 'let' & 'const'
    <li> ES6 class and constructor function syntax to translate JSON responses into JS model objects
    <li> 3 AJAX calls
    <li> Fetch with the appropriate HTTP verb
</ul>
<h4>Rails</h4>
<ul>
    <li> Rails Models/Controllers and RESTful conventions 
    <li> Serializers
    <li> Postgresql
    <li> ActiveRecord
    <li> ORM - Object Relational Mapping between Models
        <ol> 
            <li>belongs_to
            <li>has_many
        </ol>
    <li> The following CRUD functionality:
        <ol>
            <li>Create
            <li>Read
            <li>Delete
        </ol>
    <li> One class level Active Record Scope methods
</ul>

<h2>Install Instructions</h2>
<h4>Rails Backend:</h4>
<ul>
    <li> Here is a link to my <a href="https://github.com/gracenak/visualize_backend.git">Rails API Backend</a>. 
    <li> Clone <a href="https://github.com/gracenak/visualize_backend.git">this repo</a>.
    <li> Run 'bundle install'
    <li> Run 'rake db:migrate' # migrates the tables into the database
    <li> Run 'rake db:seed'    # migrates seed file containing initial data to test the application with
    <li> Run the server with 'rails s' and click <a href="https://http://localhost:3000/api/v1/visions">here</a> if you would like to see JSON view of the objects.
</ul>

<h4>JavaScript Frontend: </h4>
<ul> 
    <li> Clone <a href="https://github.com/gracenak/visualize_frontend.git">this repo</a>.
    <li> Right click on 'index.html' and 'run server' or 'Copy path' and paste into browser URL bar.
    <li> Make sure your Rails backend server is running. Enjoy!
</ul>


<h2>Contributor's Guide </h2>
Visualize is dedicated to bringing a welcoming, harrassment free, working environment. Please see the <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct/">Contributer Covenant Conduct of Code</a>.

<h2>License</h2>
This application is available as open source under the terms of the <a href="https://opensource.org/licenses/MIT">MIT License</a>.