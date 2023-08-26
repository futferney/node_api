import Express  from 'express'
import { pool } from './db.js'

const app = Express()

app.get('/ping',async(req,res) => {
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
})

app.get('/employees',(req,res) => res.send('obteniendo Empleados'))
app.post('/employees',(req,res) => res.send('Creado  empleado'))
app.put('/employees',(req,res) => res.send('actualizado empleado'))
app.delete('/employees',(req,res) => res.send('Eliminado empleado'))

app.listen(3000)
console.log('sirve mi pena',3000);