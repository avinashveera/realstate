 const propertyData = [
    // Array of properties, you can replace this with API data.
    { _id: 1, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'New York, NY', price:250000, description: 'A beautiful 3-bedroom apartment in the heart of the city...' },
    { _id: 2, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Los Angeles, CA', price:300000, description: 'A modern house with stunning views of the hills...' },
    { _id: 3, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Chicago, IL', price:200000, description: 'A spacious apartment close to downtown...' },
    { _id: 4, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'New York, NY', price:250000, description: 'A beautiful 3-bedroom apartment in the heart of the city...' },
    { _id: 5, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Los Angeles, CA', price:300000, description: 'A modern house with stunning views of the hills...' },
    { _id: 6, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Chicago, IL', price:200000, description: 'A spacious apartment close to downtown...' },
    { _id: 7, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'New York, NY', price:250000, description: 'A beautiful 3-bedroom apartment in the heart of the city...' },
    { _id: 8, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Los Angeles, CA', price:300000, description: 'A modern house with stunning views of the hills...' },
    { _id: 9, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Chicago, IL', price:200000, description: 'A spacious apartment close to downtown...' },
    { _id: 10, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'New York, NY', price:250000, description: 'A beautiful 3-bedroom apartment in the heart of the city...' },
    { _id: 11, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Los Angeles, CA', price:300000, description: 'A modern house with stunning views of the hills...' },
    { _id: 12, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Chicago, IL', price:200000, description: 'A spacious apartment close to downtown...' },
     { _id: 13, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'New York, NY', price:250000, description: 'A beautiful 3-bedroom apartment in the heart of the city...' },
    { _id: 14, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Los Angeles, CA', price:300000, description: 'A modern house with stunning views of the hills...' },
    { _id: 15, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Chicago, IL', price:200000, description: 'A spacious apartment close to downtown...' },
    { _id: 16, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'New York, NY', price:250000, description: 'A beautiful 3-bedroom apartment in the heart of the city...' },
    { _id: 17, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Los Angeles, CA', price:300000, description: 'A modern house with stunning views of the hills...' },
    { _id: 18, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Chicago, IL', price:200000, description: 'A spacious apartment close to downtown...' },
    { _id: 19, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'New York, NY', price:250000, description: 'A beautiful 3-bedroom apartment in the heart of the city...' },
    { _id: 20, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Los Angeles, CA', price:300000, description: 'A modern house with stunning views of the hills...' },
    { _id: 21, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Chicago, IL', price:200000, description: 'A spacious apartment close to downtown...' },
    { _id: 22, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'New York, NY', price:250000, description: 'A beautiful 3-bedroom apartment in the heart of the city...' },
    { _id: 23, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Los Angeles, CA', price:300000, description: 'A modern house with stunning views of the hills...' },
    { _id: 24, image: 'https://th.bing.com/th/id/OIP.XbreW-rLViq3O48rtcYeLQHaE8?rs=1&pid=ImgDetMain', location: 'Chicago, IL', price:200000, description: 'A spacious apartment close to downtown...' },
   
   
    // Add more items as needed
  ];

export{propertyData}