/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("jokes", function (t) {
        t.increments("id").primary();
        t.string("title").notNullable();
        t.string("summary",).notNullable();
        t.text("content").notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
