/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  // table.integer("id").notNullable().unique().primary();
  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.text("firstName").notNull();
    table.text("lastName").notNull();
    table.text("userName").notNull().unique();
    table.text("password").notNull();
  });
  await knex.schema.createTable("issues", (table) => {
    table.increments("id");
    table.text("issueType").notNull();
    table.text("description").notNull();
    table.text("priority").notNull().defaultTo("High");
    table
      .date("timeReported")
      .notNull()
      .defaulto(knex.raw("current_timestamp"));
    table.text("priority").defaultTo("High");
    table.text("issueState").default("Open");
    table.integer("user_id").unique().notNull();
  });

  await knex.schema.createTable("app", (table) => {
    table.increments("id");
    table.text("appName").notNull().unique();
    table.text("version").notNull();
    table.text("repolink").unique();
  });

  await knex.schema.createTable("app_issue", (table) => {
    table.primary(["app_id", "issue_id"]);
    table
      .integer("app_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("app");
    table
      .integer("issue_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("issues");
  });

  await knex.schema.createTable("app_user", (table) => {
    table.primary(["app_id", "user_id"]);
    table.integer("app_id").references("id").inTable("app");
    table.integer("user_id").references("id").inTable("users");
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("app_user");
  await knex.schema.dropTableIfExists("app_issue");
  await knex.schema.dropTableIfExists("issues");
  await knex.schema.dropTableIfExists("app");
  await knex.schema.dropTableIfExists("users");
};
