const User = require('./User');
const Project = require('./Project');
const Hoodie = require('./hoodie');
const Pants = require('./pants');
const Sweater = require('./sweater');
const Tshirt = require('./tshirt');

// Creates a relationship between User and Project model, with the User having a "has many" relationship with Project model.
User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Creates a relationship between User and Project model, with a "belongs to" relationship of the Project to the User.
Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Hoodie.hasMany(User, {
  foreignKey: 'user_id'
});

Pants.hasMany(User, {
  foreignKey: 'user_id'
});

Sweater.hasMany(User, {
  foreignKey: 'user_id'
});

Tshirt.hasMany(User, {
  foreignKey: 'user_id'
});











module.exports = { User, Project };
