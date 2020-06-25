const { Movie, Actor, Genre } = require("../database/models");

let controller = {
  index: (req, res) => {
    res.redirect("/movies");
  },

  movies: async (req, res) => {
    const movies = await Movie.findAll();
    res.render("movies", { movies });
  },

  showCreate: async (req, res) => {
    const genres = await Genre.findAll();

    res.render("movie-create", { genres });
  },

  create: async (req, res) => {
    const movie = await Movie.create({
      ...req.body,
    });
    res.redirect(`/movies/${movie.id}`);
  },

  detail: async (req, res) => {
    const movie = await Movie.findByPk(req.params.id, {
      include: ["actorsFavorite", "genre", "actors"],
    });
    if (movie == null) {
      res.redirect("/");
    }
    res.render("movie-detail", { movie });
  },

  showEdit: async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);
    const genres = await Genre.findAll();
    res.render("movie-edit", { movie, genres });
  },

  edit: async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);
    await movie.update({
      ...req.body,
    });
    res.redirect(`/movies/${movie.id}`);
  },

  destroy: (req, res) => {
    Movie.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/movies");
  },

  genreDetail: async (req, res) => {
    const genres = await Genre.findByPk(req.params.id, {
      include: ["movie"],
    });
    if (genres == null) {
      res.redirect("/");
    }
    res.render("genre-detail", { genres });
  },

  actorDetail: async (req, res) => {
    const actor = await Actor.findByPk(req.params.id);
    res.render("actor-detail", { actor });
  },
};

module.exports = controller;

/*
  showActorCreate: async (req, res) => {
    const movies = await Movie.findByPk(req.params.id);
    res.render("addActor", { movies });
  },

  ActorCreate: async (req, res) => {
    const actor = await Actor.create({
      ...req.body,
    });
    res.redirect(`/movies/${movie.id}`);
  },

  showActorEdit: async (req, res) => {},

  Actoredit: async (req, res) => {},
  */
