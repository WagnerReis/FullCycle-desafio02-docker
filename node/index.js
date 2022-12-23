const mysql = require('mysql')
const app = require('./server')

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const connection = mysql.createConnection(config)
.on('error', (err) => console.log(err.toString()));
const initialSql = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id));`
connection.query(initialSql)
const insertData = `INSERT INTO people(name) VALUES ("Wagner");`
connection.query(insertData)


const sql = `SELECT * FROM people`

app.get('/', (req, res) => {
    connection.query(sql, function (err, result) {
      if (err) throw err;
        let message = `<h1>Full Cycle Rocks!</h1>
        <p>- Lista de nomes cadastrados</p>
        <ul>`
        result.forEach(people => {
            message += `<li>${people.name}</li>`
        });
        message += '</ul>';
        res.send(message)
    })
})