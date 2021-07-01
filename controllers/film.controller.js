const Film = require("../models/Film");

const addFilm = async (req, res) => {
  try {
    const film = await new Film({
      name: req.body.name,
      description: req.body.description,
      img: req.body.img,
      genre: req.params.id,
    });
    film.save();
    res.json("фильм добавлен");
  } catch (e) {
    console.log(e.message);
  }
};

const getFilm = async (req, res) => {
  const film = await Film.aggregate([{
    $sample: {
      size: 6
      }}
  ]);
  if (film.length === 0) {
    res.json("Пока фильмов нет");
  } else {
    res.json(film);
  }
};

const getFilmById = async (req, res) => {
  const film = await Film.findById(req.param.id);
  if (film.length === 0) {
    res.json("Пока фильмов нет");
  } else {
    res.json(film);
  }
};

const getFilmByIdGenre = async (req, res) => {
  const film = await Film.findById({ genre: req.params.id });
  if (film.length === 0) {
    res.json("Пока фильмов нет");
  } else {
    res.json(film);
  }
};

module.exports = {
  addFilm,
  getFilm,
  getFilmByIdGenre,
  getFilmById,
};
