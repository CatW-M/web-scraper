const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'http://www.eatbydate.com/'

axios(url)
.then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const foodCategories = []

    $('.content-box-heading', html).each(function() {
        const title = $(this).text()
        const url = $(this).find('a').attr('href')
        foodCategories.push({ 
            title, 
            url
        })
    })
    console.log(foodCategories)
}).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))