fetch('https://api.ipify.org/?format=json')
  .then(res => res.json)
  .then(data => {
    alert("I HAVE YOUR IP :D " + data.ip())
  });
//alert("other way of getting ip: " +window.ip) i think
