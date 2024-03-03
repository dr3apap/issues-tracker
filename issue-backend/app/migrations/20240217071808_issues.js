/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
  // tbl.integer("id").notNullable().unique().primary();

  await knex.schema.createTable("apps", (tbl) => {
    tbl.increments("app_id");
    tbl.text("appName").notNull().unique();
    tbl.text("version").notNull();
    tbl.text("repolink").unique();
  });

  await knex.schema.createTable("registerUsers", (tbl) => {
    tbl.increments("registerUser_id");
    tbl.text("userName").notNullable().unique();
    tbl.text("password").notNullable().unique();
  });

  await knex.schema.createTable("issueReporters", (tbl) => {
    tbl.increments("reporter_id");
    tbl.text("firstName").notNull();
    tbl.text("lastName").notNull();
    tbl.text("email").notNull().unique();
    tbl
      .integer("registerReporter_id")
      .unsigned()
      .references("registerUser_id")
      .inTable("registerUsers")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("issues", (tbl) => {
    tbl.increments("issue_id");
    tbl.text("issueType").notNull();
    tbl.text("description").notNull();
    tbl.text("priority").notNull().defaultTo("High");
    tbl.text("issueState").default("Open");
    tbl
      .integer("issueReporter_id")
      .unsigned()
      .notNull()
      .references("reporter_id")
      .inTable("issueReporters")
      .onDelete("RESTRICT")
      .onDelete("CASCADE")
      .unique();
  });

  await knex.schema.createTable("apps_reporters", (tbl) => {
    tbl.primary(["reporterApp_id", "appReporter_id"]);
    tbl
      .integer("reporterApp_id")
      .unsigned()
      .notNull()
      .references("app_id")
      .inTable("apps")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    tbl
      .integer("appReporter_id")
      .unsigned()
      .notNull()
      .references("reporter_id")
      .inTable("issueReporters")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    tbl.date("whenReported").notNull().defaultTo(knex.raw("current_timestamp"));
  });

  await knex.schema.createTable("apps_issues", (tbl) => {
    tbl.primary(["appId", "issueId"]);
    tbl
      .integer("appId")
      .unsigned()
      .notNullable()
      .references("app_id")
      .inTable("apps")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
      .unique();
    tbl
      .integer("issueId")
      .unsigned()
      .notNullable()
      .references("issue_id")
      .inTable("issues")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
      .unique();
    tbl.date("dateReported").notNull().defaultTo(knex.raw("current_timestamp"));
  });
};
/**
 * @param { import("knex").Knex } knet* @returns { Promise<void> }
 */
export const down = async function (knex) {
  await knex.schema.dropTableIfExists("apps_reporters");
  await knex.schema.dropTableIfExists("apps_issues");
  await knex.schema.dropTableIfExists("issues");
  await knex.schema.dropTableIfExists("issueReporters");
  await knex.schema.dropTableIfExists("registerUsers");
  await knex.schema.dropTableIfExists("apps");
};
