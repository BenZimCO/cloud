const Pool = require('pg').Pool;

const pg_conn = new Pool (
    {
        user: 'qvtvsnemmdwcnx',
        host: 'ec2-3-214-2-141.compute-1.amazonaws.com',
        database: 'da31gvsv7n4r76',
        password: '2efd7103cee7e1f22eefe96dacacb840a472bb2a11ccd2dfb971a6724a4ce53e',
        port: 5432,
        ssl:{
            rejectUnauthorized: false
        },
    }
);

module.exports = pg_conn;