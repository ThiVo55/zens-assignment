"# zens_test_be" 
//BE run nodejs and use Knex connection to DB MySQL
// run migrate to create table with data in file 20230421075347_joke.js
knex migrate:latest
// run seed create fake data
knex seed:run"# zens_test_be" 
