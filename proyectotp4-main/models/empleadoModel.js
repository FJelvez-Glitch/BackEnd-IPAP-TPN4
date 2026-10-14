import pool from '../config/db.js';

export const getAllEmpleados = async () => {
  const [rows] = await pool.query('SELECT * FROM empleados');
  return rows;
};

export const getEmpleadoById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM empleados WHERE Id = ?', [id]);
  return rows[0];
};

export const createEmpleado = async (empleado) => {
  const { DNI, FechNacimiento, NombreYApellido, Correo, Telefono, ObraSocial } = empleado;
  const [result] = await pool.query(
    'INSERT INTO empleados (DNI, FechNacimiento, NombreYApellido, Correo, Telefono, ObraSocial) VALUES (?, ?, ?, ?, ?, ?)',
    [DNI, FechNacimiento, NombreYApellido, Correo, Telefono, ObraSocial]
  );
  return { Id: result.insertId, ...empleado };
};

export const updateEmpleado = async (id, empleado) => {
  const { DNI, FechNacimiento, NombreYApellido, Correo, Telefono, ObraSocial } = empleado;
  const [result] = await pool.query(
    'UPDATE empleados SET DNI = ?, FechNacimiento = ?, NombreYApellido = ?, Correo = ?, Telefono = ?, ObraSocial = ? WHERE Id = ?',
    [DNI, FechNacimiento, NombreYApellido, Correo, Telefono, ObraSocial, id]
  );
  return result.affectedRows;
}

export const deleteEmpleado = async (id) => {
  const [result] = await pool.query('DELETE FROM empleados WHERE Id = ?', [id]);
  return result.affectedRows;
};