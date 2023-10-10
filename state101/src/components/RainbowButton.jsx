import React, { useState } from "react"

function RainbowButton() {
	const [backgroundColor, setBackgroundColor] = useState(null)

	const handleChangeColor = () => {
		const randomColor = `hsl(${Math.random() * 360}, 70%, 50%)`
		setBackgroundColor(randomColor)
	}
	return (
		<button
			style={{
				backgroundColor,
			}}
			onMouseEnter={handleChangeColor}
			onMouseLeave={handleChangeColor}>
			Rainbow Button
		</button>
	)
}

export default RainbowButton
