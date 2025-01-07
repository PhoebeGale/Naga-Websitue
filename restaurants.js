// Restaurant data for each category
const restaurantData = {
    seafood: [
        {
            image: "Naga_Cebu/Osting_restaurant.jpg",
            title: "Osting’s by the Seafood and Grill",
            description: "The trendiest chill spot situated in Naga’s Boardwalk. Picturesque View. Great Food. Live Music.",
            locationLink: "https://g.co/kgs/i3gkZAc",
            phoneLink: "tel:09177986348",
            facebookLink: "https://www.facebook.com/OstingBytheSea/"
        },
        {
            image: "Naga_Cebu/Parola.jpg",
            title: "Parola Seaview Restaurant",
            description: "A restaurant concept by Creative Cuisine Group, has a stunning view of the sea from sunrise to sunset aside from the affordable yet flavorful dishes it offers.",
            locationLink: "https://g.co/kgs/5aVHEpJ",
            phoneLink: "tel:+111222333",
            facebookLink: "https://www.facebook.com/parolaseaview/"
        },
        {
            image: "Naga_Cebu/Pollitos.jpg",
            title: "Pollitos Cafe and Restaurant",
            description: "NAGA’s Roadside CAFE+RESTAURANT. Best known for Periperi Chicken, Ribs, Burgers, Osso Buco and Coffee.",
            locationLink: "https://g.co/kgs/zF5PZjC",
            phoneLink: "tel:09193340604",
            facebookLink: "https://www.facebook.com/PollitosNaga"
        }
    ],
    grill: [
        {
            image: "Naga_Cebu/cookout.jpg",
            title: "The Cookout Cebu",
            description: "Home of the best ribs in Naga City, Cebu. All happy smiles after you dine here!",
            locationLink: "https://g.co/kgs/bQNKm9A",
            phoneLink: "tel:+9619464569",
            facebookLink: "https://www.facebook.com/TheCookoutCebu/"
        },
        {
            image: "Naga_Cebu/kkd.jpg",
            title: "KKD STK + BBQ",
            description: "Freshly served authentic Filipino Cuisine and cooked from the heart.",
            locationLink: "https://g.co/kgs/hS34T6K",
            phoneLink: "tel:(032)2316378",
            facebookLink: "https://www.facebook.com/kkdcebu"
        },
        {
            image: "Naga_Cebu/cocina.jpg",
            title: "Cocina Calza Food Express",
            description: "Cebu's most impressive, delectable, and well-personalized food catering service within your budget.",
            locationLink: "https://g.co/kgs/TnoQM9t",
            phoneLink: "tel:+556677889",
            facebookLink: "https://www.facebook.com/pages/Cocina%20Calza%20Food%20Express%20-%20Naga/103133805295549/"
        }
    ],
    casual: [
        {
            image: "Naga_Cebu/lugen.jpg",
            title: "Casual Corner",
            description: "Serving up happiness, one guilt-free milktea and mouthwatering dish at a time. Come savor the flavor.",
            locationLink: "https://g.co/kgs/nwTAFKb",
            phoneLink: "tel:09232721908",
            facebookLink: "https://www.facebook.com/LugenCafe/"
        },
        {
            image: "Naga_Cebu/dnr.jpg",
            title: "D&R Cafe",
            description: "Perfect for a quick meal or a cozy hangout with friends.",
            locationLink: "https://g.co/kgs/o7RhUNz",
            phoneLink: "tel:09621788042",
            facebookLink: "https://www.facebook.com/dandrcafe"
        },
        {
            image: "Naga_Cebu/winzen.jpg",
            title: "Winzen's Cafe",
            description: "Coffee meets culture in our expertly brewed blends.",
            locationLink: "https://g.co/kgs/Tk3WDLx",
            phoneLink: "tel:09275138080",
            facebookLink: "https://www.facebook.com/WinzensCafe"
        }
    ]
};

// Track current restaurant index for each category
const currentIndex = {
    seafood: 0,
    grill: 0,   
    casual: 0
};

// Function to change restaurant for a category
function changeRestaurant(direction, category) {
    // Update index based on direction
    currentIndex[category] = (currentIndex[category] + direction + restaurantData[category].length) % restaurantData[category].length;

    // Update content
    const restaurant = restaurantData[category][currentIndex[category]];
    document.getElementById(`${category}-image`).src = restaurant.image;
    document.getElementById(`${category}-title`).textContent = restaurant.title;
    document.getElementById(`${category}-description`).textContent = restaurant.description;
    document.getElementById(`${category}-location`).href = restaurant.locationLink;
    document.getElementById(`${category}-phone`).href = restaurant.phoneLink;
    document.getElementById(`${category}-facebook`).href = restaurant.facebookLink;
    document.getElementById(`${category}-location-icon`).href = restaurant.locationLink;
        document.getElementById(`${category}-phone`).href = restaurant.phoneLink;
        document.getElementById(`${category}-facebook`).href = restaurant.facebookLink;
}
