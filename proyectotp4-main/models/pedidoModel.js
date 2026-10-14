import pool from '../config/db.js';

export const getAllPedidos = async () => {
  const [rows] = await pool.query('SELECT * FROM pedidos');
  return rows;
};

export const getPedidoById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM pedidos WHERE Id = ?', [id]);
  return rows[0];
};

export const createPedido = async (pedido) => {
  const { FechaPedido, Cantidad, PrecioUnit, CodigoProd, PrecioTotal, ImportTotal } = pedido;
  const [result] = await pool.query(
    'INSERT INTO pedidos (FechaPedido, Cantidad, PrecioUnit, CodigoProd, PrecioTotal, ImportTotal) VALUES (?, ?, ?, ?, ?, ?)',
    [FechaPedido, Cantidad, PrecioUnit, CodigoProd, PrecioTotal, ImportTotal]
  );
  return { Id: result.insertId, ...pedido };
};

export const updatePedido = async (id, pedido) => {
  const { FechaPedido, Cantidad, PrecioUnit, CodigoProd, PrecioTotal, ImportTotal } = pedido;
  const [result] = await pool.query(
    'UPDATE pedidos SET FechaPedido = ?, Cantidad = ?, PrecioUnit = ?, CodigoProd = ?, PrecioTotal = ?, ImportTotal = ? WHERE Id = ?',
    [FechaPedido, Cantidad, PrecioUnit, CodigoProd, PrecioTotal, ImportTotal, id]
  );
  return result.affectedRows;
};

export const deletePedido = async (id) => {
  const [result] = await pool.query('DELETE FROM pedidos WHERE Id = ?', [id]);
  return result.affectedRows;
};