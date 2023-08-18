const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const md5 = require("md5");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const mysql = require("mysql");

const app = express();
const port = 3005;
app.use(express.json({ limit: "10mb" }));
app.use(express.static("public"));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bankas4",
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.post("/accounts", (req, res) => {
  let fileName = null;

  if (req.body.file !== null) {
    let type = "unknown";
    let file;

    if (req.body.file.indexOf("data:image/png;base64,") === 0) {
      type = "png";
      file = Buffer.from(
        req.body.file.replace("data:image/png;base64,", ""),
        "base64"
      );
    } else if (req.body.file.indexOf("data:image/jpeg;base64,") === 0) {
      type = "jpg";
      file = Buffer.from(
        req.body.file.replace("data:image/jpeg;base64,", ""),
        "base64"
      );
    } else {
      file = Buffer.from(req.body.file, "base64");
    }

    fileName = uuidv4() + "." + type;

    fs.writeFileSync("./public/img/" + fileName, file);
  }

  const sql = `
  INSERT INTO accounts (name, surname, sum, blocked, showList, img)
  VALUES (?, ?, ?, ?, ?, ?)
    `;
  con.query(
    sql,
    [
      req.body.name,
      req.body.surname,
      req.body.sum,
      req.body.blocked,
      req.body.showList,
      fileName,
    ],
    (err) => {
      if (err) throw err;
      res.json({});
    }
  );
});

app.delete("/accounts/:id", (req, res) => {
  // let sql = `
  //   SELECT img
  //   FROM accounts
  //   WHERE id = ?
  //   `;
  // con.query(sql, [req.params.id], (err, result) => {
  //   if (err) throw err;
  //   if (result[0].img) {
  //     fs.unlinkSync("./public/img/" + result[0].img);
  //   }
  // });

  const sql = `
        DELETE FROM accounts
        WHERE id = ?
    `;
  con.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    res.json({});
  });
});

app.put("/accounts/:id", (req, res) => {
  const sql = `
        UPDATE accounts
        SET sum = ?, blocked = ?
        WHERE id = ?
    `;
  params = [req.body.sum, req.body.blocked, req.params.id];

  con.query(sql, params, (err) => {
    if (err) throw err;
    res.json({});
  });
});

// app.post("/accounts", (req, res) => {
//   const sql = `
//   INSERT INTO accounts (name, surname, sum, blocked, row, img)
//   VALUES (?, ?, ?, ?, ?, ?)

//   `;

//   con.query(
//     sql,
//     [
//       req.body.name,
//       req.body.surname,
//       req.body.sum,
//       req.body.blocked,
//       req.body.row,
//       req.body.img,
//     ],
//     (err) => {
//       if (err) throw err;
//       res.json({});
//     }
//   );
// });

app.get("/accounts", (req, res) => {
  const sql = `
  SELECT id, name, surname, sum, blocked, showList, img
  FROM accounts
 
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`LN is on port number: ${port}`);
});
