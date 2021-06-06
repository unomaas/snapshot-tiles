DATABASE NAME: react_gallery;

-- DROP TO REPLACE:
DROP TABLE "gallery";

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
  ('Hannah & I', 'Picture of my partner and myself dressed up for our friend''s veterinary school graduation party.  Picture taken on the edge of Lake Superior, WI.', 'images/CouplePose.jpeg'),
  ('Finding Faux Fur Accessories', 'Shortly after that, we found some friends fur coats and wanted to feel fancier.  Picture taken on the edge of Lake Superior, WI.', 'images/CoupleFur.jpeg'),
  ('Grad Party Group Shot', 'A close friend just recently graduated from veterinary school with her doctorate in veterinary medicine, and we were invited to celebrate.  Picture cropped-down, taken on the edge o Lake Superior, WI.', 'images/GradGroup.jpeg'),
  ('Touristy Things', 'Before the start of Covid, I was able to travel a bit and visited friends in Chicago.  Obligatory photo with the bean.  Child is no relation.', 'images/Chicago.jpg'),
  ('Power Ranger Wrestlers', 'A group of friends and I cosplaying our "Power Ranger Wrestler" crossover outfits at Dragon Con in Atlanta, GA.', 'images/DragonCon2.jpg'),
  ('Meeting Your Ranger Heroes', 'While at Dragon Con, we had the pleasure of running into Austin St. John (the original red ranger) and Michael Copon (the time-force blue ranger).  It''s not often you get to meet the inspiration for your cosplays while wearing them.', 'images/DragonCon1.jpg'),
  ('Duane Ludwig & I', 'A younger me posing with the legendary Duane ''Bang'' Ludwig after an incredible coaching seminar at Combat Sport''s Academy.  Duane runs his own kickboxing striking system and it was great to learn it from him directly.  Checkout his gym''s HQ in Westminster, CO.', 'images/DuaneLudwig.jpeg'),
  ('Mark Beecher & I', 'A younger me posing with the hilarious Mark ''the Hyena'' Beecher after an awesome Combat Sport''s Academy coaching seminar.  Mark is a legend of the sport, on top of being a well-respected fighter and coach.  Checkout his gym in Katy, TX.', 'images/MarkBeecher.jpeg'),
  ('Ryan Fan Club', 'A cropped-down picture of some of the people who stopped out to support me for my first fight.  It was nice to have a cheering section.', 'images/FanClub.jpeg'),
  ('Fight!', 'Standing across from my opponent for my first fight (me pictured on the left).', 'images/FightStart.jpeg'),
  ('The Most Important Punch', 'Still of me landing the most important punch in boxing -- the jab.', 'images/Jab.jpeg'),
  ('Leg Kicks Hurt', 'I was able to use my longer limbs for a striking advantage, keeping my opponent on the outside with stiff jabs and punishing leg kicks.', 'images/Kick.jpeg')
  ;

-- TEMPLATE TO ADD MORE PICTURES IN FUTURE:
INSERT INTO "gallery" ("title", "description", "url")
VALUES
  ('Title', 'Description', 'url');

