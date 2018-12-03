const db = require('./database-connection');

module.exports = {
    getAll() {
        return db('cars')
    },
    getById(id){
        return db('cars').where('id', id)
    },
    createCar(newCar){
        return db('cars').insert(newCar).returning('*')
    },
    deleteCar(id){
        return db('cars').where('id', id).delete()
    },
    updateCar(id, car) {
        return db('cars').where('id', id).update(car).returning('*')
    }
}