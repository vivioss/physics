function Vector2(x = 0, y = 0) {
	
	this.x = x
	this.y = y

	this.add = function(vector2){
		this.x = this.x + vector2.x
		this.y = this.y + vector2.y
	}
}