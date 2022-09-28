class Vector2 {
  
 	constructor(x = 0, y = 0) {

		this.x = x
		this.y = y
 	}

	add(vector2) {

		this.x = this.x + vector2.x
		this.y = this.y + vector2.y
	}
}

