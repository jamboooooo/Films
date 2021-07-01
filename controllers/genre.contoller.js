const Genre = require('../models/Genre')

const addGenre = async (req, res) =>{
  try{
    const genre = await new Genre({
      name: req.body.name
    })
    genre.save()
    res.json('Жанр успешно добавлен')
  }catch (e) {
    console.log(e.message)
  }
}
const getGenre = async (req, res) =>{
  try {
    const genre = await Genre.find()

    if (genre.length === 0) {
      res.json('Жанров пока не найдено')
    }else {
      res.json(genre)
    }
  }catch (e) {
    console.log(e.message)
  }
}
module.exports = {
  getGenre,
  addGenre
}