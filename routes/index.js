var express = require("express");
var router = express.Router();
var mainController = require("../controllers/mainController");
//const { Movie, Actor, Genre } = require("../database/models");

/* GET home page. */
router.get("/", mainController.index);

router.get("/movies", mainController.movies);

// Creo nueva pelicula
router.get("/movies/create", mainController.showCreate);

router.post("/movies/create", mainController.create);

// Detalle de una pelicula
router.get("/movies/:id", mainController.detail);

// Edito una pelicula
router.get("/movies/:id/edit", mainController.showEdit);

router.post("/movies/:id", mainController.edit);

//Borro pelicula

router.post("delete/:id", mainController.destroy);

// GENRES

router.get("/genre/:id", mainController.genreDetail);

// ACTORS

router.get("/actor/:id", mainController.actorDetail);

// Creo un actor desde una pelicula
//router.get("/movies/:id/actor/create", mainController.showActorCreate);

//router.post("/movies/:id/actor/create", mainController.ActorCreate);

// Edito un actor desde una pelicula

//router.get("/movies/:id/edit", mainController.showActorEdit);

//router.post("/movies/:id", mainController.Actoredit);

module.exports = router;
