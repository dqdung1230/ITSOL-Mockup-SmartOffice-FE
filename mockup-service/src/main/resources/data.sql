DROP TABLE IF EXISTS USERS;

CREATE TABLE USERS (
  id  BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(250) NOT NULL,
  pass_word VARCHAR(250) NOT NULL,
  full_name VARCHAR(250) NOT NULL,
  role INT NOT NULL,
);

INSERT INTO USERS (user_name, pass_word, full_name, role) VALUES
  ('anhvd', 'abc123', 'Vu Duy Anh', 0),
  ('user1', 'abc123', 'Tran Van A', 1),
  ('user2', 'abc123', 'Nguyen Van B', 2);
