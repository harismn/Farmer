const { articles: Article } = require('../models/index')

module.exports = {
  async index(req, res) {
    try {
      let articles = null
      const search = req.query.search
      if (search) {
        articles = await Article.findAll({
          where: {
            $or: [
              'author_id', 'content', 'photo', 'comment'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        articles = await Article.findAll({
          limit: 10
        })
      }
      res.send(articles)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the article'
      })
    }
  },
  async show(req, res) {
    try {
      // console.log(req.params)
      const article = await Article.findById(req.params.id)
      res.send(article)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the article'
      })
    }
  },
  async post(req, res) {
    try {
      const article = await Article.create(req.body)
      res.send(article)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the article'
      })
    }
  },
  async put(req, res) {
    try {
      await Article.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the song'
      })
    }
  }
}