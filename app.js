var url = 'https://api.adviceslip.com/advice'
var id = document.getElementById('advice-id')
var advice_text = document.getElementById('advice-text')
var adviceobj = {}

 fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    id.innerHTML = data.slip.id
    advice_text.innerHTML = data.slip.advice
    console.log(data.slip)
  });
  
  function refresh(){
    console.log('refreshed')
fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    id.innerHTML = data.slip.id
    advice_text.innerHTML = data.slip.advice
    console.log(data.slip)
  });
  }
  