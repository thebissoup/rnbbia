const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/articles', articleRouter) //

app.get('/', (req, res) => { // list the things needed for each article ( in my case it would be the title and meta)
    const articles = [{
        title: "Lil Nas X Drops It Low, High To the Right", 
        createdAt: new Date(),
        description: 'Test description',
        genre: 'HIP-HOP',
        imageFilePath: 'resources/lilnasmontero.jpg'
    },{
        title: "Doja Cat Taps SZA For 'Kiss Me More' Collab",
        createdAt: new Date(),
        description: 'Test description 2',
        genre: 'POP',
        imageFilePath: 'resources/kissmemore.jpeg'
    }]
    res.render('articles/index', {articles: articles }) //render information from ejs and article object
    
})




app.listen(5000)
