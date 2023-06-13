fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const itemName = data.map(el=>{
        return el.name
    })
    renderData(itemName)
  })
  .catch(error => {
    console.error(error);
  });


  const renderData = (item) =>{
    const body = document.body
    const card = document.createElement('div')
    card.textContent = item
    body.append(card)
  }