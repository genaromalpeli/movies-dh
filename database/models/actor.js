module.exports = (sequelize, dataTypes) => {
  const Actor = sequelize.define("Actor", {
    first_name: dataTypes.STRING(100),
    last_name: dataTypes.STRING(100),
    rating: dataTypes.DECIMAL(3, 1),
  });
  Actor.associate = (models) => {
    Actor.belongsTo(models.Movie, {
      foreignKey: "favorite_movie_id",
    });
    Actor.belongsToMany(models.Movie, {
      through: "actor_movie",
      foreignKey: "actor_id",
      otherKey: "movie_id",
    });
  };
  return Actor;
};
