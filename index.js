const game = document.querySelector(".game")
const block = document.querySelectorAll('.block')

let step = true
let stackOne = []
let stackTwo = []
let res = true

let ars = [
	[1, 2, 3],
	[4, 5, 6], 
	[7, 8, 9],  
	[1, 4, 7],  
	[2, 5, 8],  
	[3, 6, 9],  
	[1, 5, 9],  
	[3, 5, 7]
]


game.addEventListener("click", e => {
	const elem = document.createElement("div")
	let pos = e.target.dataset.point
	if(pos && step) {
		elem.classList.remove("circle")
		elem.classList.add("close")
		block[pos-1].append(elem)
		step = false
		stackOne.push(pos)
	} else {
		elem.classList.remove("close")
		elem.classList.add("circle")
		block[pos-1].append(elem)
		step = true
		stackTwo.push(pos)
	}
	for(let i = 0; i < block.length - 1; i++) {
		if(stackOne.includes(String(ars[i][0])) && stackOne.includes(String(ars[i][1])) && stackOne.includes(String(ars[i][2]))) {
			alert("выиграл первый игрок")
			res = false
		} else if(stackTwo.includes(String(ars[i][0])) && stackTwo.includes(String(ars[i][1])) && stackTwo.includes(String(ars[i][2]))) {
			alert("выиграл второй игрок")
			res = false
		}
	}
})

