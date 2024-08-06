import React from "react";
import "./Card.css";

function Card() {
  return (
    <>
      <div class="card-container">
        <h2 class="card-title">How ISKCON Govindh Dham</h2>
        <h2 class="card-title">celebrates Janmashtami?</h2>
        <div class="cards">
          <div className="card-row">
            <div class="card">
              <img
                src="https://www.iskconpune.com/wp-content/uploads/2024/07/Fasting.webp"
                alt="Service 1"
                class="card-image"
              />
              <h3>Fasting</h3>
              <p>
                Devotees fast to purify mind and body, focusing on Lord Krishna.
              </p>
            </div>
            <div class="card">
              <img
                src="https://www.iskconpune.com/wp-content/uploads/2024/07/Deity-Worship.webp"
                alt="Service 1"
                class="card-image"
              />
              <h3>Deity Worship</h3>
              <p>
                Special prayers and aarti are offered to Lord Krishna's deities.
              </p>
            </div>
            <div class="card">
              <img
                src="https://www.iskconpune.com/wp-content/uploads/2024/07/Kirtan-and-Bhajan.webp"
                alt="Service 1"
                class="card-image"
              />
              <h3>Kirtan and Bhajan</h3>
              <p>
                Devotees sing and chant the Hare Krishna Mahamantra with
                devotion.
              </p>
            </div>{" "}
            <div class="card">
              <img
                src="https://www.iskconpune.com/wp-content/uploads/2024/07/Fasting.webp"
                alt="Service 1"
                class="card-image"
              />
              <h3>Fasting</h3>
              <p>
                Devotees fast to purify mind and body, focusing on Lord Krishna.
              </p>
            </div>
            <div class="card">
              <img
                src="https://www.iskconpune.com/wp-content/uploads/2024/07/Fasting.webp"
                alt="Service 1"
                class="card-image"
              />
              <h3>Deity Worship</h3>
              <p>
                Special prayers and aarti are offered to Lord Krishna's deities.
              </p>
            </div>
            <div class="card">
              <img
                src="https://www.iskconpune.com/wp-content/uploads/2024/07/Fasting.webp"
                alt="Service 1"
                class="card-image"
              />
              <h3>Kirtan and Bhajan</h3>
              <p>
                Devotees sing and chant the Hare Krishna Mahamantra with
                devotion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
