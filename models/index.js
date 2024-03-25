const Location = require('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');

Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false
  },
  as: 'location_travellers'
});

Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false
  },
  as: 'planned_trips'
});

module.exports = { Traveller, Trip, Location };
