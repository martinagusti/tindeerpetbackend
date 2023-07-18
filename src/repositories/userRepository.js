const { getConnection } = require("../infraestructure/database.js");

const findUsers = async () => {
  const pool = await getConnection();
  const sql = `SELECT * from users order by ID desc`;
  const [user] = await pool.query(sql);

  return user;
};

const findUserByEmail = async (email) => {
  const pool = await getConnection();
  const sql = `SELECT id, name, lastName, userName, email, password, image, bio  FROM users WHERE email = ?`;
  const [user] = await pool.query(sql, email);

  return user[0];
};

const findUserByUserName = async (userName) => {
  const pool = await getConnection();
  const sql = `SELECT id, name, lastName, userName, email, password, image, bio  FROM users WHERE userName = ?`;
  const [user] = await pool.query(sql, userName);

  return user[0];
};

const createUser = async (userDB) => {
  const { name, lastName, userName, email, passwordHash, bio } = userDB;

  const pool = await getConnection();
  const sql = `INSERT INTO USERS (name, lastName, userName, email, password, bio) VALUES ( ?, ?, ?, ?, ?, ?);`;
  const [created] = await pool.query(sql, [
    name,
    lastName,
    userName,
    email,
    passwordHash,
    bio,
  ]);

  return created.insertId;
};

module.exports = {
  findUsers,
  findUserByEmail,
  findUserByUserName,
  createUser,
};
