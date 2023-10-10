import React from "react"

function PowerOf({ exponent, base }) {
	const displayedString = `${base} x `.repeat(exponent)
	return (
		<>
			<p>{displayedString.slice(0, displayedString.length - 2)}</p>
			<div>
				{base}
				<sup>{exponent}</sup> = {base ** exponent}
			</div>
		</>
	)
}

export default PowerOf
