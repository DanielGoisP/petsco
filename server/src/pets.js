const express = require('express');
const  jwt = require('jsonwebtoken');

function createRouter(db) {
  const router = express.Router();

  router.post('/cadastro', (req, res, next) => {

    const user = req.body;

    db.query(
      'INSERT INTO CADASTRO (NM_USUARIO, US_EMAIL, CD_SENHA, CD_TELEFONE, CD_CEP, NUM_CASA, NM_RUA, NM_CIDADE, NM_BAIRRO, NM_ESTADO) VALUES (?,?,?,?,?,?,?,?,?,?)',
      [req.body.nome, req.body.email, req.body.senha, req.body.telefone, req.body.cep, req.body.numero, req.body.rua, req.body.cidade, req.body.bairro, req.body.estado],
      (error,results) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          console.log(results);
          user.id = results.insertId;

          const token = jwt.sign(
            { id: user.id, email: user.email },
            'TOKEN_KEY',
            { expiresIn: "2h" }
          );
          user.token = token;
          console.log(user);
          // delete user.senha;
          res.status(201).json(user);


        }
      }
    );
  });

  router.post('/login', (req, res, next) =>{
    console.log(req.body)
    db.query(
      'SELECT * FROM CADASTRO WHERE US_EMAIL = ? AND CD_SENHA = ?',
      [req.body.email, req.body.senha],
      (error, results) => {

        const user = {
          id: results[0].ID,
          email: results[0].US_EMAIL,
        }
        console.log(user);
        console.log(results);

        const token = jwt.sign(
          user,
          'TOKEN_KEY',
          { expiresIn: "2h" }
        );
        user.token = token;

        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(user);

          console.log(user)
        }

      }
    )

  })
  /*router.get('/professor', function (req, res, next) {
    db.query(
      'SELECT cd_professor, nm_professor, nm_disciplina, nr_telefone from tb_professor',
       (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.post('/professor_upt/:cd', (req,res,next) => {
    db.query(
      'UPDATE tb_professor SET nm_professor=?, nm_disciplina=?, nr_telefone=? WHERE cd_professor=?',
      [req.body.nome,req.body.disciplina, req.body.telefone,req.params.cd],
      (error) =>{
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.post('/professor_del/:cd', (req,res,next) => {
    db.query(
      'DELETE FROM tb_professor WHERE cd_professor=?',
      [req.params.cd],
      (error) =>{
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });*/

  return router;
}

module.exports = createRouter;
