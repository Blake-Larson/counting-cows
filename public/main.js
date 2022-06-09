const trash = document.querySelectorAll('.trash')
//const thumbText = document.querySelectorAll('.fa-thumbs-up')

Array.from(trash).forEach((element) => {
    element.addEventListener('click', deletePlayer)
})

// Array.from(thumbText).forEach((element) => {
//     element.addEventListener('click', addLike)
// })

async function deletePlayer() {
    if (confirm('Are you sure?')) {
        const pName = this.parentNode.childNodes[5].innerText
        const fName = this.parentNode.childNodes[3].innerText
        try {
            const response = await fetch('/players', {
                method: 'delete',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'playerNameS': pName,
                    'farmNameS': fName
                })
            })
            const data = await response.json()
            console.log(data)
            location.reload()

        } catch (err) {
            console.log(err)
        }
    }

}

// async function addLike() {
//     const sName = this.parentNode.childNodes[1].innerText
//     const bName = this.parentNode.childNodes[3].innerText
//     const tLikes = Number(this.parentNode.childNodes[5].innerText)
//     try {
//         const response = await fetch('addOneLike', {
//             method: 'put',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 'stageNameS': sName,
//                 'birthNameS': bName,
//                 'likesS': tLikes
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()

//     } catch (err) {
//         console.log(err)
//     }
// }