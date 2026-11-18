const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".prices")
	let total = 0
	prices.forEach((price)=>{
		total += Number(price.textContent.trim())
	})
  const table = document.querySelector("table")
	const oldRow = document.getElementById("total-row")

	if(oldRow){
		oldRow.remove()
	}
	const row = document.createElement("tr")
	row.id = "total-row"
	const cell = document.createElement("td")

	cell.textContent = total
row.appendChild(cell)
	table.appendChild(row)
};

getSumBtn.addEventListener("click", getSum);

