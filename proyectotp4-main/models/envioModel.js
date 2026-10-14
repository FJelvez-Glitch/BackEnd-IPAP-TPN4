// models/envioModel.js
import pool from '../config/db.js';

export const getAllCompaniasEnvio = async () => {
  const [rows] = await pool.query('SELECT * FROM `compañia de envios`');
  return rows;
};

export const getCompaniaEnvioById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM `compañia de envios` WHERE id_compañia = ?', [id]);
  return rows[0];
};

export const createCompaniaEnvio = async (compania) => {
  const { correo, telefono, nombre } = compania;
  const [result] = await pool.query(
    'INSERT INTO `compañia de envios` (correo, telefono, nombre) VALUES (?, ?, ?)',
    [correo, telefono, nombre]
  );
  return { id_compañia: result.insertId, ...compania };
};

export const updateCompaniaEnvio = async (id, compania) => {
  const { correo, telefono, nombre } = compania;
  const [result] = await pool.query(
    'UPDATE `compañia de envios` SET correo = ?, telefono = ?, nombre = ? WHERE id_compañia = ?',
    [correo, telefono, nombre, id]
  );
  return result.affectedRows;
};

export const deleteCompaniaEnvio = async (id) => {
  const [result] = await pool.query('DELETE FROM `compañia de envios` WHERE id_compañia = ?', [id]);
  return result.affectedRows;
};