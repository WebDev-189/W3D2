import "./App.css"
import { useState } from "react"
import Counter from "./components/Counter"
import RainbowButton from "./components/RainbowButton"
import PowerOf from "./components/PowerOf"
import jsonData from "./assets/jobList.json"

function App() {
	const [showCounter, setShowCounter] = useState(false)
	const [showButton, setShowButton] = useState(false)
	const [showExponents, setShowExponents] = useState(false)
	const [counter, setCounter] = useState(1)
	const [jobs, setJobs] = useState(jsonData.slice(0, 5))

	/**
	 * A Hook:
	 * - Should be in the body of your function
	 * - Clarity: define them at the top of your file
	 * - Never mutate a state.
	 * - Derived states should use a callback mechanism
	 *
	 */

	// if (true) {
	// 	const notPossible = useState(false)
	// }

	// const handleClick = (order) => {
	// 	return () => {
	// 		if (order === "increment") {
	// 			setCount(count + 1)
	// 		} else {
	// 			setCount(count - 1)
	// 		}
	// 	}
	// }

	// const students = [
	// 	{ name: "Alice", age: 27, id: crypto.randomUUID() },
	// 	{ name: "John", age: 29, id: crypto.randomUUID() },
	// 	{ name: "Bob", age: 37, id: crypto.randomUUID() },
	// ]
	// console.log(students)

	const handleAddJob = () => {
		const randomJob = jsonData[Math.floor(Math.random() * jsonData.length)]

		// jobs.push(randomJob)
		// const copy = [...jobs]
		// copy.push(randomJob)
		// setJobs(copy)
		setJobs([...jobs, randomJob])
	}

	/**
	 *
	 */
	const handleSortByName = () => {
		const copy = [...jobs]
		copy.sort((jobA, jobB) => {
			return sortByName(jobA.organization.name, jobB.organization.name)
		})
		setJobs(copy)
	}
	const handleSortByEmployees = () => {
		const copy = [...jobs]
		copy.sort((jobA, jobB) => {
			const nbEmployeesA = jobA.organization.nb_employees,
				nbEmployeesB = jobB.organization.nb_employees

			if (nbEmployeesA === nbEmployeesB) {
				return sortByName(jobA.organization.name, jobB.organization.name)
			}
			return nbEmployeesB - nbEmployeesA
		})

		setJobs(copy)
	}

	const handleJobDelete = (id) => {
		const jobsToKeep = jobs.filter((job) => {
			return job.objectID !== id
		})

		setJobs(jobsToKeep)
	}

	return (
		<>
			<div>
				<button onClick={() => setShowCounter(!showCounter)}>
					Display Counter
				</button>
				<button onClick={() => setShowButton(!showButton)}>
					Display Rainbow
				</button>
				<button onClick={() => setShowExponents(!showExponents)}>
					Display Exponents
				</button>
			</div>

			{showCounter && <Counter />}
			<hr />
			{showButton && <RainbowButton />}

			{showExponents && (
				<>
					<div>
						<button onClick={() => setCounter((current) => current - 1)}>
							Decrement
						</button>

						<button onClick={() => setCounter((current) => current + 1)}>
							Increment
						</button>
					</div>
					<PowerOf base={counter} exponent={10} />
					<PowerOf base={counter} exponent={3} />
					<PowerOf base={counter} exponent={3} />
					<PowerOf base={counter} exponent={24} />
				</>
			)}
			{/* <Greet name={students[0].name} />
			<Greet name={students[1].name} />
			<Greet name={students[2].name} /> */}

			{/* {students.map((student) => (
				<Greet key={student.id} name={student.name} />
			))}

			<ul>
				{students.map((student) => {
					return (
						<li key={student.id}>
							{student.name} is {student.age} y-o.
						</li>
					)
				})}
			</ul> */}
			<div>
				<button onClick={handleAddJob}>Add a Job</button>
				<button onClick={handleSortByName}>Sort them Alphabetically</button>
				<button onClick={handleSortByEmployees}>Number of employees</button>
			</div>
			<ul>
				{jobs.map((job) => {
					return (
						<li key={job.objectID}>
							<img src={job.organization.logo.url} alt="" />
							<h2>{job.organization.name}</h2>
							<p>
								{job.salary_minimum
									? `${job.salary_minimum} ${job.salary_currency}`
									: "Free labour"}
							</p>
							<p>Employees: {job.organization.nb_employees}</p>

							<button onClick={() => handleJobDelete(job.objectID)}>X</button>
						</li>
					)
				})}
			</ul>
		</>
	)
}

function Greet({ name }) {
	return <p>Hello {name}!</p>
}

export default App

/**
 * (jobA, jobB) => {
			return jobA.organization.name.localeCompare(
				jobB.organization.name,
				undefined,
				{ sensitivity: "base" }
			)
		}
 */

function sortByName(nameA, nameB) {
	return nameA.localeCompare(nameB, undefined, { sensitivity: "base" })
}
