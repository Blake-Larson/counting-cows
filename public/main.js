// ========================
// Delete Player
// ========================

const trash = document.querySelectorAll('.trash');
Array.from(trash).forEach(element => {
	element.addEventListener('click', deletePlayer);
});

async function deletePlayer() {
	if (confirm('Are you sure?')) {
		const pName = this.parentNode.childNodes[5].innerText;
		const fName = this.parentNode.childNodes[3].innerText;
		try {
			const response = await fetch('/deletePlayer', {
				method: 'delete',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					'playerNameS': pName,
					'farmNameS': fName,
				}),
			});
			const data = await response.json();
			console.log(data);
			location.reload();
		} catch (err) {
			console.log(err);
		}
	}
}

// ========================
// Game Functionality
// ========================

document.querySelector('#byNumber').addEventListener('click', byNumber)
document.querySelector('#barn').addEventListener('click', barn)
document.querySelector('#marry').addEventListener('click', marry)
document.querySelector('#kill').addEventListener('click', kill)


async function byNumber() {
	const pName = document.querySelector('#playerSelect').value
	const animal = document.querySelector('#animalSelect').value
	const number = Number(document.querySelector('#number').value)

	try {
		const response = await fetch('byNumber', {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				'playerNameS': pName,
				'animalS': animal,
				'numberS': number
			})
		})
		const data = await response.json()
		console.log(data)
		location.reload()

	} catch (err) {
		console.log(err)
	}
}
async function barn() {
	const pName = document.querySelector('#playerSelect').value
	const animal = document.querySelector('#animalSelect').value
	const number = Number(document.querySelector('#number').value)

	try {
		const response = await fetch('barn', {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				'playerNameS': pName,
				'animalS': animal,
				'numberS': number
			})
		})
		const data = await response.json()
		console.log(data)
		location.reload()

	} catch (err) {
		console.log(err)
	}
}
async function marry() {
	const pName = document.querySelector('#playerSelect').value
	const animal = document.querySelector('#animalSelect').value

	try {
		const response = await fetch('marry', {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				'playerNameS': pName,
				'animalS': animal,
			})
		})
		const data = await response.json()
		console.log(data)
		location.reload()

	} catch (err) {
		console.log(err)
	}
}
async function kill() {
	const pName = document.querySelector('#playerSelect').value
	const animal = document.querySelector('#animalSelect').value

	try {
		const response = await fetch('kill', {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				'playerNameS': pName,
				'animalS': animal,
			})
		})
		const data = await response.json()
		console.log(data)
		location.reload()

	} catch (err) {
		console.log(err)
	}
}