\connect todos_db_dev;

CREATE TABLE IF NOT EXISTS todos (
id BIGSERIAL PRIMARY KEY,
title VARCHAR(255),
category VARCHAR(1024),
status VARCHAR(255)
);
