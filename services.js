
function redirectToCarBooking() {
    
    window.location.href = 'fleet.html';
}


function redirectToProtectionServices() {
    
    window.location.href = 'fleet.html#luxury-section';
}


function showDropoffForm() {
    document.getElementById('dropoff-form').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}


document.getElementById('car-dropoff-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    const bookingReference = this.querySelector('input[placeholder="Booking Reference"]').value;
    const vehicleLicensePlate = this.querySelector('input[placeholder="Vehicle License Plate"]').value;
    const dropoffDate = this.querySelector('input[type="date"]').value;
    const dropoffLocation = document.getElementById('dropoff-location').value;


    showNotification('Drop-off Confirmed', 
        `Booking Reference: ${bookingReference}\n` +
        `Vehicle License Plate: ${vehicleLicensePlate}\n` +
        `Drop-off Date: ${dropoffDate}\n` +
        `Drop-off Location: ${dropoffLocation}\n` +
        'Thank you for using our service.');
    

    closeModal('dropoff-form');
});


function showNotification(title, message) {
    const notificationModal = document.getElementById('notification-modal');
    document.getElementById('notification-title').textContent = title;
    document.getElementById('notification-message').textContent = message;
    notificationModal.style.display = 'block';
}


window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}