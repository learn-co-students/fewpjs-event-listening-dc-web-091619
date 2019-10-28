function addingEventListener(eventName, callbackFunction) {
    const input = document.getElementById('input');
input.addEventListener('click', function(event) {
  alert('I was clicked!');
});
}
