const { Jokes } = require("../model");

const findJokes = async (req, res) => {
  const find = await Jokes.findJoke();
  return res.json(find);
};

module.exports = {
  findJokes,
};
