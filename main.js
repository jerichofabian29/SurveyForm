document.getElementById('numberInput').addEventListener('input', function() {
    document.getElementById('selectedNumber').textContent = this.value;
  });