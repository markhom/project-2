const User = require('./User');
const Project = require('./Project');
const Hoodie = require('./hoodie');
const Pants = require('./pants');
const Sweater = require('./sweater');
const Tshirt = require('./tshirt');
const TeeShirt = require('./t-shirt');

// Creates a relationship between User and Project model, with the User having a "has many" relationship with Project model.
User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Hoodie, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Pants, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Sweater, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Tshirt, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


// Creates a relationship between User and Project model, with a "belongs to" relationship of the Project to the User.
Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Hoodie.belongsTo(User, {
  foreignKey: 'user_id'
});

Pants.belongsTo(User, {
  foreignKey: 'user_id'
});

Sweater.belongsTo(User, {
  foreignKey: 'user_id'
});

Tshirt.belongsTo(User, {
  foreignKey: 'user_id'
});











module.exports = { User, Project };
