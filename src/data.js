import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import room4 from "./images/details-4.jpeg";
import room5 from "./images/details-5.jpeg";
import room6 from "./images/details-6.jpeg";
import room7 from "./images/details-7.jpeg";
import img1 from "./images/class-1.jpeg";
import img2 from "./images/class-2.jpeg";
import img3 from "./images/class-3.jpeg";
import img4 from "./images/class-4.jpeg";
import img5 from "./images/class-5.jpeg";
import img6 from "./images/class-6.jpeg";
import img7 from "./images/class-7.jpeg";
import img8 from "./images/class-8.jpeg";
import img9 from "./images/room-9.jpeg";
import img10 from "./images/room-10.jpeg";
import img11 from "./images/room-11.jpeg";
import img12 from "./images/room-12.jpeg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "cycling",
      slug: "cycling",
      type: "cycling",
      price: 120,
      size: 200,
      capacity: 20,
      fitness: true, //
      dance: false, //
      featured: true,
      inCart: false,
      count: 0,
      total: 0,
      description:
        "A circuit-style class designed for our spin enthusiasts! Our knowledgeable instructor will take you through a sequence of diverse drills with terrific tunes – this class has something for everyone, with each class incorporating speed and tension work, varied and adjusted all workout long. All you have to do is roll through the rounds, rest and repeat.",
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: room5
            }
          }
        },
        {
          fields: {
            file: {
              url: room6
            }
          }
        },
        // {
        //   fields: {
        //     file: {
        //       url: room2
        //     }
        //   }
        // }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "HIIT Fit",
      slug: "HIIT-Fit",
      type: "HIIT-Fit",
      price: 200,
      size: 250,
      capacity: 10,
      fitness: true,
      dance: false,
      featured: false,
      inCart:false,
      count:0,
      total:0,
      description:
        "This class will exceed your fitness expectations! Utilizing the popular (HIIT) High Intensity Interval Training principles will test both your cardiovascular and muscular strength. This high intensity circuit class in not for the faint of heart! Make most out of your day.",
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "yoga",
      slug: "yoga",
      type: "yoga",
      price: 150,
      size: 300,
      capacity: 20,
      fitness: false,
      dance: false,
      featured: true,
      inCart:false,
      count:0,
      total:0,
      description:
        "This Yoga class is designed for participants with some yoga experience looking to learn some Intermediate poses. Enhance your practice of  yoga postures, that are physically and  energetically balanced, in a safe, non-competitive and inclusive environment, with a choice of milder or more challenging options. Flow Yoga can be somewhat more vigorous and creates a balance between strengthening and stretching while linking your movements to your breath. Each class will include a short warm up, followed by full body strengthening and stretching.",
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: room7
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "pilates",
      slug: "pilates",
      type: "pilates",
      price: 150,
      size: 400,
      capacity: 20,
      fitness: false,
      dance: false,
      featured: false,
      inCart:false,
      count:0,
      total:0,
      description:
        "Based on the pioneering work of Joseph Pilates, this class is focused on ease and efficiency of movement.  Students gain knowledge of good alignment based on a stable 'centre', increased abdominal strength and free joint movement. Pilates is designed to improves flexibility, build strength and develop control and endurance in the entire body. It puts emphasis on alignment, breathing, developing a strong core, (consisting of the muscles of the abdomen, low back, and hips,) and improving coordination and balance.",
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "zumba",
      slug: "zumba",
      type: "zumba",
      price: 150,
      size: 300,
      capacity: 20,
      fitness: false,
      dance: true,
      featured: false,
      inCart:false,
      count:0,
      total:0,
      description:
        "`Ditch the workout, join the party!` Zumba offers a high energy atmosphere with upbeat music and basic dance steps that anyone can follow. You will learn how to move your hips in every direction, laugh while doing so and work up a great sweat!",
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "hiphop",
      slug: "hiphop",
      type: "hiphop",
      price: 250,
      size: 350,
      capacity: 20,
      fitness: false,
      dance: true,
      featured: false,
      inCart:false,
      count:0,
      total:0,
      description:
        "This class will focus on the fundamental movements and grooving in Hip-Hop. You will learn different elements of dance  and will learn to dance to a variety of Hip-Hop songs. No experience required, just have fun! Instructor Kevin has tons of enthusiasm and experience and wants to share that with you!",
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "contemporary dance",
      slug: "contemporary-dance",
      type: "contemporary-dance",
      price: 300,
      size: 400,
      capacity: 20,
      fitness: false,
      dance: true,
      featured: false,
      inCart:false,
      count:0,
      total:0,
      description:
        "Contemporary/Lyrical Dance is a fusion of styles that often uses techniques from jazz and ballet combined to create free movement. Students will have the opportunity to learn choreographic routines that will allow them to express various emotions and often tell a story through the music. Although technique is important, and will be used and reviewed throughout the classes, this class will stress the importance of showing your style and who you are as a dancer through the movement. Lyrical can be very 'outside the box' allowing a dancer to get out of everyday stresses and worries and simply explore. Instructor: Melanie DeMelo",
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "ballet intro",
      slug: "ballet-intro",
      type: "ballet-intro",
      price: 400,
      size: 500,
      capacity: 20,
      fitness: false,
      dance: true,
      featured: true,
      inCart:false,
      count:0,
      total:0,
      description:
        "An introduction to ballet techniques.(Ballet shoes not required) Posture, foot and arm placements, steps and gesture are all included, both on the floor, at the barre and in the centre.",
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "family economy",
      slug: "family-economy",
      type: "family",
      price: 300,
      size: 500,
      capacity: 3,
      fitness: false,
      dance: false,
      featured: false,
      inCart:false,
      count:0,
      total:0,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "family basic",
      slug: "family-basic",
      type: "family",
      price: 350,
      size: 550,
      capacity: 4,
      fitness: false,
      dance: false,
      featured: false,
      inCart:false,
      count:0,
      total:0,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img10
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "family standard",
      slug: "family-standard",
      type: "family",
      price: 400,
      size: 600,
      capacity: 5,
      fitness: true,
      dance: false,
      featured: false,
      inCart:false,
      count:0,
      total:0,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img11
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "family deluxe",
      slug: "family-deluxe",
      type: "family",
      price: 500,
      size: 700,
      capacity: 6,
      fitness: true,
      dance: true,
      featured: true,
      inCart:false,
      count:0,
      total:0,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "presidential",
      slug: "presidential-room",
      type: "presidential",
      price: 600,
      size: 1000,
      capacity: 10,
      fitness: true,
      dance: true,
      featured: true,
      inCart:false,
      count:0,
      total:0,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: room1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  }
];
