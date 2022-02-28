function calculateTip(event) {
  event.preventDefault()
  let bill = document.getElementById('bill').value
  let serviceQual = document.getElementById('serviceQual').value
  let numOfPeople = document.getElementById('people').value

  if (numOfPeople == '' || numOfPeople <= 1) {
    numOfPeople = 1
    document.querySelector('#each').style.display = 'none'
  } else {
    document.getElementById('each').style.display = 'block'
  }

  let total = (bill * serviceQual) / numOfPeople
  total = total.toFixed(2)
  document.getElementById('tip').innerHTML = Number(total)
  document.getElementById('totalTip').style.display = 'block'
}
document.querySelector('#totalTip').style.display = 'none'
document.querySelector('#each').style.display = 'none'

document.getElementById('tipsForm').addEventListener('submit', calculateTip)
