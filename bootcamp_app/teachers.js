const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT teachers.name as name, cohorts.name as cohort_name
FROM cohorts
JOIN students ON cohort_id = cohorts.id
JOIN assistance_requests ON student_id = students.id
JOIN teachers ON teachers.id = assistance_requests.teacher_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
GROUP BY cohorts.name, teachers.name
ORDER BY cohorts.name; 
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort_name}: ${user.name}`);
  })
});
