SELECT cohorts.name as name, AVG(completed_at-started_at) as avereage_assistance_time
FROM students
JOIN assistance_requests ON student_id = students.id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY avereage_assistance_time;