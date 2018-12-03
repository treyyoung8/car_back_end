
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', (car) => {
        car.increments('id')
        car.string('make')
        car.string('model')
        car.string('nationality')
        car.integer('horsepower')
        car.integer('torque')
        car.decimal('top_speed')
        car.string('years_made')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cars')
};
