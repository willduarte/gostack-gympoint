module.exports = {
  dialect: 'mysql',
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
