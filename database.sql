DATABASE NAME: react_gallery;

CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY  KEY,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(300) NOT NULL,
    "url" VARCHAR(300),
    "textHidden" BOOLEAN DEFAULT true,
    "likes" INT DEFAULT 0
);

INSERT INTO "gallery" ("title", "description", "url")
VALUES
  ('Duane Ludwig & I', 'A younger me posing with the legendary Duane `Bang` Ludwig after an incredible seminar.', './public/images/DuaneLudwig.jpeg'),
  ('Mark Beecher & I', 'A younger me posing with the great Mark `the Hyena` Beecher after an awesome seminar.', './public/images/MarkBeecher.jpeg'),
  ('Ryan Fan Club', 'A sized-down picture of some of the people who stopped out to support me for my first fight.', './public/images/FanClub.jpeg'),
  ('Fight!', 'Standing across from my opponent for my first fight (me pictured on the left).', './public/images/FightStart.jpeg'),
  ('The Most Important Punch', 'Still of me landing the most important punch in boxing -- the jab.', './public/images/Jab.jpeg'),
  ('Leg Kicks Hurt', 'I was able to use my longer limbs for a striking advantage, keeping my opponent on the outside with stiff jabs and punishing leg kicks.', './public/images/Kick.jpeg')
  ;

  