const Pool = require("pg").Pool;

const pool = new Pool({
  user: "prhhahmhvjkokk",
  host: "ec2-54-229-217-195.eu-west-1.compute.amazonaws.com",
  database: "d5eeggoe7oo4pr",
  password: "dba29aff001bcc85b31c50e9a1fa43d76f9b39ccf78149fca4a3806bda706198",
  port: 5432,
});

module.exports = pool;
