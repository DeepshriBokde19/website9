document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();  
    
    const destination = document.getElementById('destination').value;
    const checkinDate = new Date(document.getElementById('checkin').value);
    const checkoutDate = new Date(document.getElementById('checkout').value);
    const guests = document.getElementById('guests').value;
    const roomType = document.getElementById('room-type').value;
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    
    if (checkoutDate <= checkinDate) {
      confirmationMessage.textContent = "Check-out date must be after check-in date.";
      confirmationMessage.style.color = "red";
      return;
    }
  
   
    confirmationMessage.textContent = `Thank you for booking! 
      Destination: ${destination}, 
      Check-in: ${checkinDate.toDateString()}, 
      Check-out: ${checkoutDate.toDateString()}, 
      Guests: ${guests}, 
      Room: ${roomType}.`;
    confirmationMessage.style.color = "#28a745";
  
    
    document.getElementById('bookingForm').reset();
  });
  