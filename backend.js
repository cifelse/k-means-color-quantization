const numberInput = document.getElementById('kInput');

numberInput.addEventListener('change', function(event) {
    const inputValue = event.target.value;
    
    if (inputValue < 2 || inputValue > 256) {
        event.target.value = 2;
    }
});