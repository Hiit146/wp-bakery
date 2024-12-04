import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Gallery = () => {
  const sections = [
    {
      title: "Our Bakery",
      images: [
        {
          src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/c7/07/ed/demel-k-u-k-hofzuckerbackerei.jpg?w=1200&h=-1&s=1",
          alt: "Cozy Bakery Interior",
          description: "Cozy Interior",
        },
        {
          src: "https://vienna-unwrapped.com/wp-content/uploads/2014/12/demel_vienna_02.jpg",
          alt: "Welcoming Bakery Entrance",
          description: "Welcoming Entrance",
        },
      ],
    },
    {
      title: "Events",
      images: [
        {
          src: "https://www.histouring.com/data/cch/addon_gallery/15681280x1024xy/2019.10.17-05.21.23_2.png",
          alt: "Birthday Celebration",
          description: "Birthday Celebration",
        },
        {
          src: "https://i.insider.com/5da82d16695b58722e05a6da?width=800&format=jpeg&auto=webp",
          alt: "Community Gathering",
          description: "Community Gathering",
        },
      ],
    },
    {
      title: "Baked Items",
      images: [
        {
          src: "https://i.insider.com/5da82d17695b58722e05a6dd?width=800&format=jpeg&auto=webp",
          alt: "Chocolate Cake",
          description: "Chocolate Cake",
        },
        {
          src: "https://www.eatme.eu/media/pvidm0gn/aardbei-tompouce-met-rode-vruchten.jpg?width=1536&height=1024&quality=100",
          alt: "Fruit Pastry",
          description: "Fruit Pastry",
        },
      ],
    },
  ];

  return (
    <>
      <Header/>
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Bakery Gallery</h1>

      {sections.map((section, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <div className="flex flex-wrap">
            {section.images.map((image, idx) => (
              <div key={idx} className="w-full sm:w-1/2 md:w-1/3 p-2">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <p className="text-center text-sm mt-2 text-gray-700">
                  {image.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default Gallery;