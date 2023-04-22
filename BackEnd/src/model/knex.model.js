module.exports = ({
  knex = {},
  name = "name",
  tableName = "tablename",
  selectableProps = [],
  timeout = 2000,
}) => {
  const create = async (props) => {
    delete props.id;
    return await knex.insert(props).into(tableName).timeout(timeout);
  };

  const find = (filters) =>
    knex
      .select(selectableProps)
      .from(tableName)
      .where(filters)
      .timeout(timeout);

  const findOne = (filters) =>
    find(filters).then((results) => {
      if (!Array.isArray(results)) return results;
      return results[0];
    });

  const destroyToken = (id) =>
    knex.del().from(tableName).where({ userId: id }).timeout(timeout);

  return {
    name,
    tableName,
    selectableProps,
    timeout,
    create,
    find,
    findOne,
    destroyToken,
  };
};
