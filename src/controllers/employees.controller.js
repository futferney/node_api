import { pool } from "../db.js"

export const getEmployees = (req,res) => res.send('obteniendo empleados')

export const createEmployees = async (req,res) =>{
    const {name, salary} = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)'[name, salary])
    res.send({ rows})
} 

export const updateEmployees = (req,res) => res.send('actualizado empleado')
export const deleteEmployees = (req,res) => res.send('Eliminado empleado')