const fleetData = {
    luxury: [
        { name: "Mercedes S-Class", price: 350, image: "https://media.istockphoto.com/id/474202708/photo/mercedes-benz-s-class-coupe-luxury-car-front-view.jpg?s=612x612&w=0&k=20&c=1R5b73maLa9jvfHD-N5PU2rKttKfHCuH2QAxwOnuDx4="},
        { name: "BMW 7 Series", price: 400, image: "https://media.istockphoto.com/id/1246484344/photo/bmw-7-series.jpg?s=612x612&w=0&k=20&c=hlc-AVznD2phzrvp6ctzU2N5IBFp97eVTdzlRqBQrX0="},
        { name: "Audi A8", price: 375, image: "https://media.istockphoto.com/id/1478714487/photo/audi-a8.jpg?s=612x612&w=0&k=20&c=A8Dci8GwAdsK21JO3ldrjbiXDkhv1DRP6buwAFIpyBw="},
        { name: "Porsche Panamera", price: 450, image: "https://media.istockphoto.com/id/1427672187/photo/emerald-green-porche-panamera-on-gulf-freeway-interstate-45-in-houston-tx.jpg?s=612x612&w=0&k=20&c=h3BcSUjglFE7xusvnVE37Sla74jn1Nz61C6RS2kr5hg="},
        { name: "Lexus LS", price: 325, image: "https://media.istockphoto.com/id/520136602/photo/jaguar-xj-luxury-saloon-car-interior.jpg?s=612x612&w=0&k=20&c=HKzY5NVKjwm313rS18Y2APvomItxLtvcm8VCc7EThek="},
        { name: "Maserati Quattroporte", price: 525, image: "https://media.istockphoto.com/id/2165726177/photo/maserati-mc20-sports-car-display-maserati-offers-the-mc20-with-a-621hp-twin-turbocharged-3-0l.jpg?s=612x612&w=0&k=20&c=Iqg8NjMtQZ1i8yGuyMlYy-Ehz_T3O2gi6wI3IsDPyzU="},
        { name: "Genesis G90", price: 300, image: "https://media.istockphoto.com/id/1445971757/photo/moscow-russia-genesis-gv70-interior-view-compact-luxury-crossover-suv-genesis-logo-on-the-car.jpg?s=612x612&w=0&k=20&c=JuDUusLXavUek-zCRs6FUkxSDoovCO5uQie60--Sdcw="},
        { name: "Jaguar XJ", price: 425, image: "https://media.istockphoto.com/id/510703490/photo/jaguar-xj-luxury-saloon-car-interior.jpg?s=612x612&w=0&k=20&c=KwDTiaILvbaJVEYHoHRhvXSXkn7K9NnemA4bCpOgLcM="},
    ],
    salon: [
    { name: "Toyota Camry", price: 80, image: "https://media.istockphoto.com/id/637722992/photo/new-luxury-toyota-camry.jpg?s=612x612&w=0&k=20&c=YdRSBoQ4lROxE6D9GRY5QapRxdC-JguL5I_kGoyLYpY="},
            { name: "Honda Accord", price: 75, image: "https://media.istockphoto.com/id/1268548391/photo/photo-of-black-honda-accord.jpg?s=612x612&w=0&k=20&c=baUPvqs5YX5Ka9YDXjRBuiCM5F6zVkSgUwOtHLZP94I="},
        { name: "Nissan Altima", price: 70, image: "https://media.istockphoto.com/id/2152529094/photo/a-portrait-of-a-nissan-altima-traveling-down-a-highway-in-moderate-traffic.jpg?s=612x612&w=0&k=20&c=csVrbnSx6SSnUPtU5QZdkvqE_EMPRfvL5VSqq2NYvV4="},
        { name: "Hyundai Sonata", price: 65, image: "https://media.istockphoto.com/id/2152529206/photo/a-portrait-of-a-red-hyundai-sonata-sedan-traveling-ahead-of-the-competition-on-a-highway-in.jpg?s=612x612&w=0&k=20&c=3Nj1LkdKnxPNXGriHy8W0vsW3jmIIqDu-9XFQ3rZiPI="},
        { name: "Kia K5", price: 68, image: "https://media.istockphoto.com/id/1630371903/photo/a-kia-sport-utility-vehicle-cruising-on-seaway-blvd-at-galveston-beach-in-texas.jpg?s=612x612&w=0&k=20&c=Ke3wWfCRMN_Eorjtf7TsTykparf_B_jAIpWH03zZwvk="},
        { name: "Mazda 6", price: 72, image: "https://media.istockphoto.com/id/1163950396/photo/a-mazda-6-car.jpg?s=612x612&w=0&k=20&c=S0f6AW6VvKNZS-_YRImZsF3n9c2Ra08C5RC_yrGEimg="},
        { name: "Subaru Legacy", price: 73, image: "https://media.istockphoto.com/id/864628634/photo/private-suv-car-subaru-outback.jpg?s=612x612&w=0&k=20&c=zEUERoCOvHRr8IipS2ODKDk_rtmpbzsLGTgZIdnRRcY="},
        { name: "Volkswagen Passat", price: 69, image: "https://media.istockphoto.com/id/1212502763/photo/photo-of-blue-volkswagen-passat.jpg?s=612x612&w=0&k=20&c=PiKtd_hVibtAEd_1AP1E6S4OuFjMQgmHnDJ10pLlUfU="},
        { name: "Chevrolet Malibu", price: 67, image: "https://media.istockphoto.com/id/1295842277/photo/2021-chevrolet-malibu-sedan.jpg?s=612x612&w=0&k=20&c=Wgssmw3VkNc7TpQxwMw4FPro5RVJUStqfZKUOSuq-c4="},
        { name: "Ford Fusion", price: 66, image: "https://media.istockphoto.com/id/1312880461/photo/2020-ford-fusion-front-3-4-view.jpg?s=612x612&w=0&k=20&c=3QbcHjcqDFxj2UFDgyhqqMT9OMcFBCQYFXk5N8jWZbc="},
    ],
    "4x4": [
        { name: "Range Rover", price: 250, image: "https://media.istockphoto.com/id/1842270771/photo/range-rover-evoque.jpg?s=612x612&w=0&k=20&c=0UJRbHxNsx0k5qcAJQEvGf0lPRKn29xBUgbbW7ejBjo="},
        { name: "Jeep Wrangler", price: 150, image: "https://media.istockphoto.com/id/1388853266/photo/red-jeep-wrangler-rubicon-parked-on-dirt-road-in-wilderness.jpg?s=612x612&w=0&k=20&c=j_cfim6TaA1F9q8AFqX5RBKMVj9u8p1wAw5o8sCmMoE="},
        { name: "Toyota Land Cruiser", price: 200, image: "https://media.istockphoto.com/id/2189896684/photo/toyota-land-cruiser-300.jpg?s=612x612&w=0&k=20&c=Q6NZW68O98-OECbu8Oj3eox15DVV7EEG5h5D1lbP2fs="},
        { name: "Land Rover Defender", price: 275, image: "https://media.istockphoto.com/id/1475989185/photo/land-rover-defender-130-next-to-the-river.jpg?s=612x612&w=0&k=20&c=LM-R1mFGtzEj5noNOX0RLDTklDcFr9mmT0JfBJctZ8o="},
        { name: "Mercedes G-Class", price: 300, image: "https://media.istockphoto.com/id/2153276568/photo/a-portrait-of-a-mercedes-g-wagon-suv-cruising-in-a-downtown-district.jpg?s=612x612&w=0&k=20&c=LB7nqQJFQSKs1b8o7A_wQ_PwulF5ID4qSnjwl9-gkis="},
        { name: "Chevrolet Tahoe", price: 180, image: "https://media.istockphoto.com/id/1504461059/photo/a-chevrolet-suv-for-sale-at-a-dealership.jpg?s=612x612&w=0&k=20&c=UxdBLnJ-diuDmuA1VcIUipfkbtj53JoUisfdX4o8Wvg="},
        { name: "Ford Expedition", price: 175, image: "https://media.istockphoto.com/id/1507832735/photo/a-white-ford-expedition-suv-cruising-on-allen-parkway-in-houston.jpg?s=612x612&w=0&k=20&c=uUVWgh3L3J9zrLtTi4IbvTGvygdb6HuTSTrtXEkHMa4="},
        { name: "BMW X7", price: 225, image: "https://media.istockphoto.com/id/1325283129/photo/luxury-suv-bmw-alpina-xb7-parked-in-the-city.jpg?s=612x612&w=0&k=20&c=NQuI57wHNINY3TIeVzKKTfO5HZv8TlvWJuqYIazbeaE="},
        { name: "Nissan Patrol", price: 195, image: "https://media.istockphoto.com/id/1407472758/photo/nissan-patrol-nismo.jpg?s=612x612&w=0&k=20&c=qH0_JCqRFO8d-rHLM7xeN558p5vHDw-yg_0C2ae_yEU="},
        { name: "Lexus LX", price: 260, image: "https://media.istockphoto.com/id/1433929262/photo/lexus-lx-suv.jpg?s=612x612&w=0&k=20&c=yBsM6T8zryfoe2dLC85L3GNOuaOjwtWscSqKPMC1ZRI="},
    ],
    limos: [
        { name: "Stretch Lincoln", price: 500, image: "https://media.istockphoto.com/id/91502745/photo/multiple-limos.jpg?s=612x612&w=0&k=20&c=Sl1mYwWmboHcSXIBvXtsiRKqKOuTPGyENHeNqrbeKmQ="},
        { name: "Hummer Limo", price: 600, image: "https://media.istockphoto.com/id/458553161/photo/hummer-limousine.jpg?s=612x612&w=0&k=20&c=Va2kRkOIjlkIEGRyD09gAh3MyCeY4bd4OZFbJ0Cz1z4="},
        { name: "Cadillac Escalade Limo", price: 550, image: "https://media.istockphoto.com/id/1171384158/photo/cadillac-escalade.jpg?s=612x612&w=0&k=20&c=xSXShMcyoH5u_MI_Qqvmm3eXznW38nO5Fjm5hKZ250Y="},
        { name: "Chrysler 300 Stretch", price: 475, image: "https://media.istockphoto.com/id/490667576/photo/chrysler-300c.jpg?s=612x612&w=0&k=20&c=2GpJ1wpb6y7T_dJvKZ3yfuXcSMQfrOio8V9c0atppbw="},
        { name: "Mercedes S-Class Limo", price: 525, image: "https://media.istockphoto.com/id/1455470401/photo/white-mercedes-benz-s600-limousine-parked-in-a-parking-lot-in-the-city-mercedes-premier.jpg?s=612x612&w=0&k=20&c=9IKVSucBJrUpQZmVV4FxmcEPiXzJedjZ7OX6LHBXBXM="},
        { name: "Rolls-Royce Phantom Limo", price: 750, image: "https://media.istockphoto.com/id/458668863/photo/rolls-royce-ghost.jpg?s=612x612&w=0&k=20&c=xg4HgXBcYl1plwWPgr5Si2tLxYUVdj_KPCJTAORbkZg="},
        { name: "Ford Excursion Limo", price: 425, image: "https://media.istockphoto.com/id/1467265462/photo/luxury-stretch-hummer-limousine-primarily-black-in-colour-parked-outside-a-community-park-in.jpg?s=612x612&w=0&k=20&c=5ct7yebdE893x__CkOCPv18u9m5wOy0-KyBkVU3KVtA="},
        { name: "Bentley Continental Limo", price: 675, image: "https://media.istockphoto.com/id/1186904465/photo/orange-luxury-car-bentley-continental-gt-mansory-in-the-forest.jpg?s=612x612&w=0&k=20&c=cEzpuQ3e3N9FFeUbHPERITGu2ly47k5tmyTZqtNyrs4="},
        { name: "Navigator Limo", price: 500, image: "https://media.istockphoto.com/id/1304510472/photo/nissan-juke.jpg?s=612x612&w=0&k=20&c=vcIwo4_A22gnXP13P9mg2KXuAuSv-DylwscBe8c50SM="},
        { name: "Party Bus Limo", price: 575, image: "https://media.istockphoto.com/id/1413657859/photo/blue-subaru-brz.jpg?s=612x612&w=0&k=20&c=UB79hTwjoCSliEPP8kOUiRw_2GTY7SOiP7RVRh2tCaI="},
    ],
    vans: [
        { name: "Mercedes Sprinter", price: 150, image: "https://media.istockphoto.com/id/1158175736/photo/mercedes-benz-sprinter-311cdi.jpg?s=612x612&w=0&k=20&c=xjk3BouG8mw_Nbm4fkqP6VjfQbsZZq67wU8YtXQPw2Q="},
        { name: "Ford Transit", price: 100, image: "https://media.istockphoto.com/id/1288169460/photo/ford-transit-trail-on-a-road.jpg?s=612x612&w=0&k=20&c=LC7Ng9HoaUMBkGfesBWoiaP_Kto56hsQojXQHpwQVBc="},
        { name: "Chevrolet Express", price: 120, image: "https://media.istockphoto.com/id/501787430/photo/chevrolet-express.jpg?s=612x612&w=0&k=20&c=1uweEdA91TiH0XZEdtq-ugOAS3GsCtZO_xK3ajONmdY="},
        { name: "Ram ProMaster", price: 110, image: "https://media.istockphoto.com/id/1754600482/photo/ram-2500-promaster-cargo-display-stellantis-offers-the-ram-promaster-2500-in-standard-high.jpg?s=612x612&w=0&k=20&c=OYR3k_uwE35i1jRB4ZYi8vGEpoJWsj8wpKoXswPpA-A="},
        { name: "Nissan NV", price: 115, image: "https://media.istockphoto.com/id/1350719550/photo/1970-chevrolet-monte-carlo-coupe.jpg?s=612x612&w=0&k=20&c=9CUc8sP2sgH402K_svxJo6rK-ihN8jPbF74tvlHf02E="},
        { name: "Toyota HiAce", price: 125, image: "https://media.istockphoto.com/id/818197308/photo/toyota-hiace.jpg?s=612x612&w=0&k=20&c=nIJyZzzOqM5Hhg8I3nV5dEGp-1BXNw_l-C7pIcXW9Fo="},
        { name: "Volkswagen Transporter", price: 135, image: "https://media.istockphoto.com/id/1480671194/photo/volkswagen-transporter.jpg?s=612x612&w=0&k=20&c=l1UM_Cokk9UDPloz_Al7i83fKpDwrggh41OrPvZ0jNI="},
        { name: "Hyundai H350", price: 105, image: "https://media.istockphoto.com/id/514770275/photo/hyundai-h350-at-the-car-show.jpg?s=612x612&w=0&k=20&c=Bdh6z1I-Rm4lVPooPuI_gT53bmX3Q9qETTZt2d8Im6Y="},
        { name: "Iveco Daily", price: 130, image: "https://media.istockphoto.com/id/1769083331/photo/malteser-iveco-daily-van.jpg?s=612x612&w=0&k=20&c=CC8HWqzgD9wmN6_kkJOX3At-ntYCRdvZg_hLOoYd7cU="},
        { name: "Peugeot Boxer", price: 95, image: "https://media.istockphoto.com/id/1789605627/photo/dpd-delivery-van.jpg?s=612x612&w=0&k=20&c=HwO6UNxh5y12wd0r_3j7dXa9wBk1mhv4FHL6os6rKDw="},
    ],
    vintage: [
        { name: "1957 Chevrolet Bel Air", price: 450, image: "https://media.istockphoto.com/id/176793256/photo/red-car-in-havana-sunset.jpg?s=612x612&w=0&k=20&c=i6L_wDLwiv4ya0P4hPH7Am7FHKI8eFZqk3Vkz0DpB08="},
        { name: "1965 Ford Mustang", price: 400, image: "https://media.istockphoto.com/id/1340269597/photo/classic-vintage-muscle-car.jpg?s=612x612&w=0&k=20&c=2VxPW4E_SGa7AxwzDyzHPt0v4w7WqsYFZHaLn-QDqFs="},
        { name: "1969 Dodge Charger", price: 500, image: "https://images.unsplash.com/photo-1587750113469-d2ba02441e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmludGFnZSUyMGNhcnN8ZW58MHx8MHx8fDA%3D="},
            { name: "1955 Mercedes 300SL Gullwing", price: 750, image: "https://images.unsplash.com/photo-1524102724373-bcf6ed410592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZpbnRhZ2UlMjBjYXJzfGVufDB8fDB8fHww="},
        { name: "1961 Jaguar E-Type", price: 600, image: "https://media.istockphoto.com/id/157383894/photo/a-chevrolet-bel-air-1957-against-a-white-background.jpg?s=612x612&w=0&k=20&c=2oOC7PSsgFqJai4URwa1T9oLE8FI5NKfBdZPjvUmPxg="},
        { name: "1957 Ford Thunderbird", price: 425, image: "https://media.istockphoto.com/id/184847285/photo/classic-american-muscle-car.jpg?s=612x612&w=0&k=20&c=cYBKnKtJ8bDYZUXqebrHQ_F1yZwY5WPBU3YTbrveS6c="},
        { name: "1962 Ferrari 250 GTO", price: 1000, image: "https://media.istockphoto.com/id/1407189072/photo/gold-vintage-convertible-002.jpg?s=612x612&w=0&k=20&c=u2kKyQuECu49EG6nrmMNqJ54WAKW1qB4YW-xNRhJGc0="},
        { name: "1970 Pontiac GTO", price: 475, image: "https://examhttps://images.unsplash.com/photo-1524102724373-bcf6ed410592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZpbnRhZ2UlMjBjYXJzfGVufDB8fDB8fHww="},
            { name: "1953 Corvette C1", price: 550, image: "https://media.istockphoto.com/id/1407189072/photo/gold-vintage-convertible-002.jpg?s=612x612&w=0&k=20&c=u2kKyQuECu49EG6nrmMNqJ54WAKW1qB4YW-xNRhJGc0="},
        { name: "1967 Shelby GT500", price: 650, image: "https://media.istockphoto.com/id/1189941361/photo/vintage-small-car.jpg?s=612x612&w=0&k=20&c=XZixWJJptzm48FH12S-vKdvHGUFRkrJGbXMuLbyBXQM="},
    ]
    
   
    
};


const categoryButtons = document.getElementById('categoryButtons');
const bookingFormContainer = document.getElementById('bookingFormContainer');

const vehicleList = document.getElementById('vehicleList');


function displayVehicles(category) {
    vehicleList.innerHTML = '';

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');

    fleetData[category].forEach(vehicle => {
        const vehicleCard = document.createElement('div');
        vehicleCard.classList.add('vehicle-card');
        vehicleCard.innerHTML = `
            <img src="${vehicle.image}" alt="${vehicle.name}">
            <h3>${vehicle.name}</h3>
            <p>$${vehicle.price} per day</p>
            <button class="book-now-btn" onclick="showBookingForm('${vehicle.name}')">Book Now</button>
        `;
        vehicleList.appendChild(vehicleCard);
    });
}



categoryButtons.addEventListener('click', (event) => {
    if (event.target.classList.contains('category-btn')) {
        const category = event.target.dataset.category;
        displayVehicles(category);
    }
});


displayVehicles('luxury');
function showBookingForm(vehicleName) {
    bookingFormContainer.innerHTML = `
        <div class="booking-form">
            <h2>Book ${vehicleName}</h2>
            <label>First Name:</label>
            <input type="text" id="firstName" required>
            <label>Surname:</label>
            <input type="text" id="surname" required>
            <label>Passport/ID Number:</label>
            <input type="text" id="idNumber" required>
            <label>Email Address:</label>
            <input type="email" id="email" required>
            <label>Phone Number:</label>
            <input type="tel" id="phone" required>
            <button onclick="submitBooking()">Submit Booking</button>
        </div>
    `;
}

function submitBooking() {
    alert('Successfully booked!');
    bookingFormContainer.innerHTML = ''; 
}
