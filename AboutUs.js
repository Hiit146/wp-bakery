import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './aboutus.css';
function AboutUs() {
  return (
    <div>
    <Header/>
      <header>
        <h1>About Us</h1>
      </header>

      <main>
        <section className="about-us">
          <p>
            Demel has been a beloved Viennese institution since 1786. Our commitment to quality and craftsmanship has made us a global symbol of exquisite pastries.
          </p>
          <p>
            Today, we continue to delight our customers with our timeless recipes and innovative creations.
          </p>
          <p>
          Our elaborate window displays continue to catch the eyes of passers-by, enticing them to step into a Vienna of a more decadent era, right in the heart of town. We believe a trip to a Kaffeehaus should be treated as an event – a place to linger, relax and momentarily escape from day-to-day life.
          </p>
        </section>

        <section className="mission-vision">
          <h2>Our Mission and Vision</h2>
          <p>
            <strong>Mission:</strong> To provide the best quality baked goods to our customers.
          </p>
          <p>
            <strong>Vision:</strong> To be the leading bakery in the city.
          </p>
        </section>

        <section className="team">
          <h2>Our Team</h2>
          <div className="team-container">
          <div className="team-member">
            <img src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?cs=srgb&dl=pexels-miquel-ferran-gomez-figueroa-2172703-3814446.jpg&fm=jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Head Baker</p>
          </div>
          <div className="team-member">
            <img src="https://media.istockphoto.com/id/1394055791/photo/portrait-of-confident-black-female-chef-at-restaurant-kitchen-looking-at-camera.jpg?s=612x612&w=0&k=20&c=vmDoulcE99YonSh-W70ZulSn6OV0MXSP_mO1PpYN5kM=" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Marketing Manager</p>
          </div>
          <div className="team-member">
            <img src="https://m.economictimes.com/thumb/msid-61877626,width-1200,height-900,resizemode-4,imgsize-197688/baking-bad-worlds-best-pastry-chef-is-breaking-the-rules-of-french-dessert.jpg" alt="Team Member 3" />
            {/*<img src="/0d2628d5-2ba4-4018-8d3c-4a46b21b8b60.jpg" alt="Team Member 3" />*/}
            <h3>Blake Johnson</h3>
            <p>Pastry Chef</p>
          </div>
          <div className="team-member">
            <img src="https://t3.ftcdn.net/jpg/06/12/10/12/360_F_612101268_tdgxpLPS3tNullZYWI7CbL9KeezwQaDB.jpg" alt="Team Member 4" />
            <h3>Emily Brown</h3>
            <p>Front-of-House Manager</p>
          </div>
        </div>
        </section>
      </main>

      
      <Footer/>
    </div>
  );
}

export default AboutUs;