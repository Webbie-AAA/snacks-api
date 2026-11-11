CREATE snacks (
    id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(30) UNIQUE NOT NULL,
    description VARCHAR(500),
    healthy BOOLEAN DEFAULT FALSE,
    vegetarian BOOLEAN DEFAULT FALSE,
    votes INT DEFAULT 0,
    PRIMARY KEY (id)
);

INSERT INTO snacks
    (name, description, healthy, votes)
VALUES
    ('Peanuts', 'Roasted & salted peanuts', TRUE, TRUE, 0),
    ('Red velvet cake', 'Cake for cowards', FALSE, FALSE, 0),
    ('Chocolate cake', 'Rich and delicious', FALSE, FALSE, 0),
    ('Skittles', 'Multicolored button-shaped candies', FALSE, TRUE, 0),
    ('Marshmallow', 'The least scary thing anyone could ever think of', FALSE, TRUE, 0),
    ('Grapes', 'Decadent if peeled', TRUE, TRUE, 0),
    ('Oreo milkshake', 'Refreshingly gritty', FALSE, TRUE, 0),
    ('Banana milkshake', 'May contain real bananas', FALSE, TRUE, 0),
    ('Mango', 'Grows on trees', TRUE, TRUE, 0),
    ('Victoria sponge', 'Basic', FALSE, FALSE, 0),
    ('M&Ms', 'Multicolored button-shaped candies', FALSE, TRUE, 0),
    ('Smarties', 'Multicolored button-shaped candies', FALSE, TRUE, 0),
    ('Jammy dodgers', 'An eternal disappointment', FALSE, TRUE, 0);
