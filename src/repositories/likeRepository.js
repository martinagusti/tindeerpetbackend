const { getConnection } = require("../infraestructure/database.js");

const likeRepository = async (id, isLiked, idUser) => {
  const pool = await getConnection();

  const sql = `INSERT INTO likes (IdUser, IdLike, isLiked) VALUES (?, ?, ?)`;

  const [like] = await pool.query(sql, [idUser, id, isLiked]);

  return like;
};

const alreadySeenRepository = async (id, idUser) => {
  const pool = await getConnection();

  const sql = `SELECT * FROM tinder.likes where IdUser = ?  and IdLike = ?`;

  const [seen] = await pool.query(sql, [idUser, id]);

  return seen;
};

const isMatchRepository = async (idUser, id) => {
  const pool = await getConnection();

  const sql = `SELECT likes.*, users.name, users.lastName, users.email, users.image FROM tinder.likes  left join users on users.id = likes.IdUser where IdLike = ? AND IdUser = ? AND isLiked = 1`;

  const [match] = await pool.query(sql, [idUser, id]);

  return match;
};

module.exports = {
  likeRepository,
  isMatchRepository,
  alreadySeenRepository,
};
