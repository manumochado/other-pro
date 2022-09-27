export const getEntityById = (req, res, entity) => {
    req.getConnection((err, conn) => {
        conn.query(`SELECT * FROM ${entity} where id = ?`, req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            }else{
                res.json({'msg' : 'success', 'data' : data});
            }
        });
    })
}

export const getAllDataEntity = (req, res, entity) => {
    req.getConnection((err, conn) => {
        conn.query(`SELECT * FROM ${entity}`, (err, data) => {
            if (err) {
                res.json(err);
            }else{
                res.json({'msg' : 'success', 'data' : data});
            }
        });
    })
}

export const getFilterDataEntity = (req, res, entity, filter) => {
    req.getConnection((err, conn) => {
        conn.query(`SELECT * FROM ${entity} WHERE ${filter}`, (err, data) => {
            if (err) {
                res.json(err);
            }else{
                res.json({'msg' : 'success', 'data' : data});
            }
        });
    })
}

export const getAllDataEntityByDate = (req, res, entity, keyDate, fechaIni, fechaFin) => {

    const de = `SELECT * FROM ${entity} where ${keyDate} BETWEEN '${fechaIni}' AND '${fechaFin}'`;

    console.log(de);

    req.getConnection((err, conn) => {
        conn.query(`SELECT * FROM ${entity} where ${keyDate} BETWEEN '${fechaIni}' AND '${fechaFin}'`, (err, data) => {
            if (err) {
                res.json(err);
            }else{
                res.json({'msg' : 'success', 'data' : data});
            }
        });
    })
}

export const getSumData = (req, res, entity, keySum, keyFilter) => {
    req.getConnection((err, conn) => {
        conn.query(`SELECT SUM(${keySum}) FROM ${entity} where ${keyFilter}`, (err, data) => {
            if (err) {
                res.json(err);
            }else{
                res.json({'msg' : 'success', 'data' : data});
            }
        });
    })
}

export const createEntity = (req, res, entity) => {
    req.getConnection((err, conn) => {
        conn.query(`INSERT INTO ${entity} set ?`, req.body, (err, data) => {
           if (err) {
               res.json({'msg' : 'error', 'error' : err});
           }else{
                res.json({'msg' : 'success', 'data' : data});
           }
       });
   })
}

export const updateEntity = (req, res, entity) => {
    req.getConnection((err, conn) => {
        conn.query(`UPDATE ${entity} set ? where id = ?`, [req.body, req.params.id], (err, data) => {
           if (err) {
               res.json({'msg' : 'error', 'error' : err});
           }else{
               res.json({'msg' : 'success', 'data' : data});
           }
       });
   })
}

export const deleteEntity = (req, res, entity) => {
    req.getConnection((err, conn) => {
        conn.query(`DELETE FROM ${entity} where id = ?`, req.params.id, (err, data) => {
           if (err) {
               res.json({'msg' : 'error', 'error' : err});
           }else{
               res.json({'msg' : 'success', 'data' : data});
           }
       });
   })
}

export const querySql = (req, res, sql) => {
    req.getConnection((err, conn) => {
        conn.query(sql, (err, data) => {
            if (err) {
                res.json(err);
            }else{
                res.json({'msg' : 'success', 'data' : data});
            }
        });
    })
}

export const multiQueriesSql = (req, res, queries, headers) => {

    let datax = [];

    req.getConnection((err, conn) => {
        conn.query(queries, (err, data) => {
            if (err) {
                res.json(err);
            }else{
                datax = [{
                    'op1': data[0],
                    'op2': data[1],
                    'op3': data[2],
                    'op4': data[3],
                 }  
                ]
                res.json({'msg' : 'success', 'data' : datax});
            }
        });
    })
}


