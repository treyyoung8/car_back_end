
exports.seed = function(knex, Promise) {
  return knex('cars').del()
    .then(function () {
      return knex('cars').insert([
        {
          make: "Ford",
          model: "Shelby GT500",
          nationality: "American",
          horsepower: 662,
          torque: 631,
          top_speed: 200,
          years_made: "2013-2014"
        },
        {
          make: "BMW",
          model: "M3",
          nationality: "German",
          horsepower: 425,
          torque: 406,
          top_speed: 155,
          years_made: "2014-2019"
        },
        {
          make: "Chevrolet",
          model: "Corvette ZR1",
          nationality: "American",
          horsepower: 638,
          torque: 604,
          top_speed: 205,
          years_made: "2009-2013"
        },
        {
          make: "Jeep",
          model:"Grand Cherokee Trackhawk",
          nationality: "American",
          horsepower: 707,
          torque: 645,
          top_speed: 180,
          years_made: "2018-2019"
        },
        {
          make: "Saleen",
          model: "S7 Twin Turbo",
          nationality: "American",
          horsepower: 750,
          torque: 700,
          top_speed: 248,
          years_made: "2005-2007"
        },
        {
          make: "Dodge",
          model: "Viper ACR",
          nationality: "American",
          horsepower: 645,
          torque: 600,
          top_speed: 177,
          years_made: "2016-2017"
        },
        {
          make: "Mercedes",
          model: "SLS AMG Black Series",
          nationality: "German",
          horsepower: 622,
          torque: 468,
          top_speed: 196,
          years_made: "2014"
        },
        {
          make: "Ferrari",
          model: "FXX-K",
          nationality: "Italian",
          horsepower: 1036,
          torque: 664,
          top_speed: 214,
          years_made: "2015-2017"
        },
        {
          make: "Lamborghini",
          model: "Veneno",
          nationality: "Italian",
          horsepower: 750,
          torque: 507,
          top_speed: 221,
          years_made: "2013"
        },
        {
          make: "Porsche",
          model: "959S",
          nationality: "German",
          horsepower: 510,
          torque: 414,
          top_speed: 211,
          years_made: "1988"
        },
        {
          make: "Mclaren",
          model: "F1",
          nationality: "British",
          horsepower: 627,
          torque: 480,
          top_speed: 240.1,
          years_made: "1993-1998"
        },
        {
          make: "Ford",
          model: "GT",
          nationality: "American",
          horsepower: 647,
          torque: 550,
          top_speed: 216,
          years_made: "2017-2019"
        },
        {
          make: "Bugatti",
          model: "Chiron",
          nationality: "French",
          horsepower: 1479,
          torque: 1180,
          top_speed: 249,
          years_made: "2016-2019"
        },
        {
          make: "Noble",
          model: "M600",
          nationality: "British",
          horsepower: 650,
          torque: 604,
          top_speed: 225,
          years_made: "2010-2019"
        },
        {
          make: "Toyota",
          model: "Prius First Gen",
          nationality: "Japanese",
          horsepower: 72,
          torque: 85,
          top_speed: 99.4,
          years_made: "1997-2001"
        }
      ]);
    });
};
