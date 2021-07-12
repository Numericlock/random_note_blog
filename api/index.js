import sqlite3 from 'sqlite3'
const express = require('express')
const app = express()
// データベース作成＆開く
var db = new sqlite3.Database('random_note_blog.db');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api/get', (req, res) => {
    db.all('SELECT * FROM articles ORDER BY created_at DESC', function(err, rows) {
        if (err) {
            throw err;
        }
        res.send(rows)
    });
})

export default app