const controlador = {};

controlador.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario', (err, usuarios) => {
            if(err){
                res.json(err);
            }
            console.log(usuarios);
            res.render('usuarios', {
                data: usuarios
            });
        });
    });
};

controlador.crear = (req, res) => {
    req.getConnection((err, conn) => {
        const datos = req.body;
        conn.query('INSERT INTO usuario set ?', [datos], (err, resultado) => {
            if(err){
                res.json(err);
            }
            console.log(resultado);
            res.redirect('/');
        });
    });
};

controlador.eliminar = (req, res) => {
    req.getConnection((err, conn) => {
        const dato = req.params.id;
        conn.query('DELETE FROM usuario WHERE idUsuario = ?', [dato], (err, resultado) => {
            if(err){
                res.json(err);
            }
            console.log(resultado);
            res.redirect('/');
        });
    });
};

controlador.editar = (req, res) => {
    req.getConnection((err, conn) => {
        const datos = req.body;
        const dato = req.params.id;
        conn.query('UPDATE usuario set ? WHERE idUsuario = ?', [datos,dato], (err, resultado) => {
            if(err){
                res.json(err);
            }
            console.log(resultado);
            res.redirect('/');
        });
    });
};


module.exports = controlador;