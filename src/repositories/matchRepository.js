const { getConnection } = require("../infraestructure/database.js");

const insertMatchRepository = async (id, idUser) => {
  const pool = await getConnection();

  const sql = `INSERT INTO matchs (user1, user2) VALUES (?, ?), (?,?)`;

  const [insertMatch] = await pool.query(sql, [idUser, id, id, idUser]);

  return insertMatch;
};

const findMatchsRepository = async (idUser) => {
  const pool = await getConnection();

  const sql = `SELECT * FROM tinder.matchs left join users on users.id = matchs.user2 where user1 = ?`;

  const [matchs] = await pool.query(sql, [idUser]);

  return matchs;
};

module.exports = {
  insertMatchRepository,
  findMatchsRepository,
};
