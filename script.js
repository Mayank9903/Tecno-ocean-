



function submitReview() {
  alert('Thank you! Your review was submitted.');
  return false; 
}

// 
function doLogin() {
  var u = document.getElementById('user') ? document.getElementById('user').value : '';
  alert('Logged in as: ' + (u || 'guest') );
  return false; 
}


  
function doLogin() {
  var u = document.getElementById('user') ? document.getElementById('user').value : '';
  alert('Logged in as: ' + (u || 'guest') + ' (Demo only)');
  return false; // 
}
