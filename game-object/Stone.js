class Stone {

	constructor(radius, mass, color, speed, position) {
		
		this.radius = radius
		this.mass = mass
		this.color = color
		this.speed = speed
		this.position = position

		const stoneElm = document.createElement("div")
		stoneElm.style.width = 2 * this.radius + "px"
		stoneElm.style.height = 2 * this.radius + "px"
		stoneElm.style.borderRadius = '20000px'
		stoneElm.style.backgroundColor = this.color
		stoneElm.style.position = 'absolute'
		stoneElm.style.top = this.position.y + "px"
		stoneElm.style.left = this.position.x + "px"
		this.elm = stoneElm

		document.body.appendChild(stoneElm)
	}

	update() {

		this.position.add(this.speed)
		this.elm.style.top = this.position.y + "px"
		this.elm.style.left = this.position.x + "px"
	}

}