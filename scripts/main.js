// Weeknight date ideas
const weeknightIdeas = [
    {
      name: "Evening Walk at Yishun Pond",
      description: "Enjoy a peaceful walk around Yishun Pond—a casual setting perfect for deep chats after work.",
      location: "https://maps.app.goo.gl/9748mY8WmnNfwAPM6"
    },
    {
      name: "Dinner at Northpoint Hai Di Lao",
      description: "Relish a cozy hot pot dinner at Hai Di Lao, where you can savor the food in a relaxed setting that stays open late.",
      location: "https://maps.app.goo.gl/sLdTpgjGbf7M8bp28"
    },
    {
      name: "Board Games Café in Yishun",
      description: "Visit a board games café for a fun, interactive evening that naturally sparks conversation.",
      location: "https://maps.app.goo.gl/5tpGwVWbTnikKTQk9" // Replace with a valid location link if available.
    },
    {
        name: "Explore Khoo Teck Phua Rooftop Garden",
        description: "Visit the rooftop garden for a serene evening surrounded by greenery in the heart of yishun.",
        location: "https://maps.app.goo.gl/M4YB8yj94GpRB6TZ6" // Replace with a valid location link if available.
      },
    {
        name: "Explore Northpoint City Mall",
        description: "Take a walk around, shop, or enjoy a simple meal at Northpoint City Mall.",
        location: "https://maps.app.goo.gl/tkjUWYbdAbWC9mrFA" // Replace with a valid location link if available.
    },
    {
        name: "Outdoor picnic at Yishun Park ",
        description: "Relax and chat surrounded by nature at Yishun Park, where you can enjoy a simple picnic under the stars.",
        location: "https://maps.app.goo.gl/estLYLwznH5VtP7x8" // Replace with a valid location link if available.
    },
    {
        name: "Board games night at a café",
        description: "Many cafés offer games to bond over while enjoying a drink or snack.",
        location: "https://maps.app.goo.gl/NsyPfT4j6rMD7Yt98" // Replace with a valid location link if available.
    },
    {
        name: "Night-time walk in the Singapore Zoo",
        description: "Explore nocturnal exhibits together, engaging in deep conversation.",
        location: "https://maps.app.goo.gl/4aUMLYkqzMzgLrn8A" // Replace with a valid location link if available.
    },
    {
        name: "Ice cream date at Holy Cow Creamery",
        description: "Indulge in a sweet treat with simple joy.",
        location: "https://maps.app.goo.gl/Aw8xjmJjKaNFL4KL7" // Replace with a valid location link if available.
    },
    {
        name: "Romantic dinner at Fico",
        description: "Enjoy a cozy, intimate meal with a view.",
        location: "https://maps.app.goo.gl/K3aPtT1Tz9Nf1SPs8" // Replace with a valid location link if available.
    }
  
      
  ];
  
  // Weekend date ideas
  const weekendIdeas = [
    {
      name: "Kayaking at East Coast Park",
      description: "Enjoy an adventurous kayaking session along East Coast Park—a refreshing break that blends fun and fitness.",
      location: "https://maps.app.goo.gl/gZMqta4bvxdsBAg16"
    },
    {
      name: "Hiking at Bukit Timah Nature Reserve",
      description: "Embark on a scenic hike at Bukit Timah Nature Reserve to immerse in nature and have a shared experience.",
      location: "https://maps.app.goo.gl/45ogdP3L4sfKpfWx7"
    },
    {
        name: "Visit Gardens by the Bay at night",
        description: "Explore the Flower Dome or just walk the Supertree Grove while engaging in deep conversation.",
        location: "https://maps.app.goo.gl/yCwe3o1igcyUFp8y9"
    },
    {
        name: "Watch a live performance at Esplanade Theatre",
        description: "Attend a show, then talk over drinks at the rooftop.",
        location: "https://maps.app.goo.gl/rou15jf6A7N3pN97A"
    },{
        name: "Kayaking at MacRitchie Reservoir",
        description: "Explore the tranquil waters while bonding.",
        location: "https://maps.app.goo.gl/6UWufyQuHWqKY3yN6"
    },
    {
        name: "Cycling at East Coast Park",
        description: "Rent bikes and cycle along the scenic coast, stopping for a drink along the way.",
        location: "https://maps.app.goo.gl/fexkUZuYKDgwj2Uy8"
    },
    {
        name: "Explore Chinatown Street Markets",
        description: "Wander around, shop for trinkets, and share dinner at a hawker center",
        location: "https://maps.app.goo.gl/TBsecNUsXFQ4pcas5"
    },
    {
        name: "Picnic at Marina Barrage",
        description: "Enjoy a relaxed afternoon with a beautiful city view.",
        location: "https://maps.app.goo.gl/9dz1EuSuPHxcKzsTA"
    },
    {
        name: "Stargazing at Singapore Science Centre",
        description: "Head to the observatory and stargaze while chatting",
        location: "https://maps.app.goo.gl/wp86gKacijCE4dVM8"
    },
    {
        name: "Explore Sentosa Island at night",
        description: "ETake a night tour, go to the beach, and relax with sunset views.",
        location: "https://maps.app.goo.gl/Xr8nDnkv5ZYckLmeA"
    },
    {
        name: "Late-night stroll along Clarke Quay",
        description: "Have dinner by the riverside and enjoy the vibrant nightlife.",
        location: "https://maps.app.goo.gl/utm3hJPJzucFogbS8"
    },
    {
        name: "DIY pottery class at Goodman Ceramic Studio",
        description: "Get creative and make something special together.",
        location: "https://maps.app.goo.gl/TKXkaQu8Mxvxvc9ZA"
    },
    {
        name: "Take a ferry ride to Pulau Ubin",
        description: "For a unique island getaway experience near Singapore.",
        location: "https://maps.app.goo.gl/azfYqQhFWojWzd1M9"
    },{
        name: "Visit the Southern Ridges for a sunset hike",
        description: "A romantic and scenic walk that leads to beautiful views of Singapore’s skyline.",
        location: "https://maps.app.goo.gl/JJTEkj2d2NeWGC7Y6"
    },
    {
      name: "Baking Class at ABC Cooking Studio",
      description: "Join a baking class and bond over learning new recipes together—a fun way to create tasty memories.",
      location: "https://maps.app.goo.gl/xW9U3tAH5ZC7CiVj7"
    }
  ];
  
  // Utility: pick a random idea from an array
  function getRandomIdea(ideasArray) {
    const randomIndex = Math.floor(Math.random() * ideasArray.length);
    return ideasArray[randomIndex];
  }
  
  // Display idea in the card
  function displayIdea(idea) {
    document.getElementById('ideaTitle').innerText = idea.name;
    document.getElementById('ideaDescription').innerText = idea.description;
    document.getElementById('ideaLocation').href = idea.location;
    
    // Show the map for the selected location
    showMapLocation(idea.location);
    
    document.getElementById('ideaContainer').style.display = "block";
  }
  
  // Event listeners for buttons
  document.getElementById('weeknightBtn').addEventListener('click', function() {
    const idea = getRandomIdea(weeknightIdeas);
    displayIdea(idea);
  });
  
  document.getElementById('weekendBtn').addEventListener('click', function() {
    const idea = getRandomIdea(weekendIdeas);
    displayIdea(idea);
  });
  
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: 'Singapore' }, (results, status) => {
    if (status === 'OK') {
        console.log(results[0].geometry.location);
    } else {
        console.log('Geocode failed due to: ' + status);
    }
  });

  let map;

  function initMap() {
    // Create a map centered around a default location
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 1.3521, lng: 103.8198 }, // Default coordinates for Singapore
      zoom: 12, // Zoom level
    });
  }

  // Function to set the map location dynamically based on the selected idea
  function showMapLocation(locationUrl) {
    // Get coordinates from the Google Maps URL
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
    const match = locationUrl.match(regex);
    if (match) {
      const lat = parseFloat(match[1]);
      const lng = parseFloat(match[2]);

      // Set the map center to the location's coordinates
      map.setCenter({ lat, lng });
      map.setZoom(14); // Adjust zoom level for better view

      // Add a marker to the map at the location
      new google.maps.Marker({
        position: { lat, lng },
        map,
        title: "Date Location",
      });
    }
  }