import pool from '../config/db.js';

export const getAllProveedores = async () => {
  const [rows] = await pool.query('SELECT * FROM proveedores');
  return rows;
};

export const getProveedorById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM proveedores WHERE id = ?', [id]);
  return rows[0];
};

export const createProveedor = async (proveedor) => {
  const { Telefono, Correo, Nombre, codigoPedido, compañiaEnvio } = proveedor;
  const [result] = await pool.query(
    'INSERT INTO proveedores (Telefono, Correo, Nombre, codigoPedido, compañiaEnvio) VALUES (?, ?, ?, ?, ?)',
    [Telefono, Correo, Nombre, codigoPedido, compañiaEnvio]
  );
  return { id: result.insertId, ...proveedor };
};

export const updateProveedor = async (id, proveedor) => {
  const { Telefono, Correo, Nombre, codigoPedido, compañiaEnvio } = proveedor;
  const [result] = await pool.query(
    'UPDATE proveedores SET Telefono = ?, Correo = ?, Nombre = ?, codigoPedido = ?, compañiaEnvio = ? WHERE id = ?',
    [Telefono, Correo, Nombre, codigoPedido, compañiaEnvio, id]
  );
  return result.affectedRows;
};

export const deleteProveedor = async (id) => {
  const [result] = await pool.query('DELETE FROM proveedores WHERE id = ?', [id]);
  return result.affectedRows;
};