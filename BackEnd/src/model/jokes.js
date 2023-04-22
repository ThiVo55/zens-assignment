const bcrypt = require("bcrypt");
const createGuts = require("./knex.model");

const name = "Jokes";
const tableName = "Jokes";

const selectableProps = ["id", "title", "summary", "content"];

module.exports = (knex) => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps,
  });
  const findJoke = () =>
  knex
    .select(selectableProps)
    .from(tableName);

  return {
    ...guts,
    findJoke
  };
};
