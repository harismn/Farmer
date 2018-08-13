const {articles: Article} = require('../models/index')

module.exports = {
  async index (req, res) {
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
  async post (req, res) {
    try {
      console.log(article)
      const article = await Article.create(req.body)
      res.send(article)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the article'
      })
    }
  },
}