import React, { useState } from "react"

function Counter() {
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount((currentCount) => {
			return currentCount + 1
		})
		setCount((currentCount) => {
			return currentCount + 1
		})
	}
	const decrement = () => {
		setCount(count - 1)
	}
	return (
		<>
			<h1>{count}</h1>
			{/* <button onClick={handleClick("decrement")}> - </button>
    <button onClick={handleClick("increment")}> + </button> */}
			<button onClick={decrement}>-</button>
			<button onClick={increment}> + </button>
		</>
	)
}

export default Counter
