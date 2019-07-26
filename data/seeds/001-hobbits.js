exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('fruits')
    .truncate()
    .then(function() {
      return knex('fruits').insert([
        { name: 'apple' },
        { name: 'orange' },
        { name: 'lemon' },
        { name: 'lime' },
      ]);
    });
};
