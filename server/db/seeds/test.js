/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('test').del()
  await knex('test').insert([
    { id: 1, name: 'rowValue1' },
    { id: 2, name: 'rowValue2' },
    { id: 3, name: 'rowValue3' },
  ])
}
