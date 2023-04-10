const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]


const sortNotes = function (notes)  {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase())   {
            return -1
        }
        else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        }  else 
        {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase() 
    })
}

const findNotes = function (notes, query) {
    const filteredNotes = notes.filter(function (note, index){
        const isTitleMatch = note.title.toLocaleLowerCase().includes(query.toLowerCase)
        const isBodyMatch = note.title.toLocaleLowerCase().includes(query.toLowerCase)
        return isTitleMatch || isBodyMatch
    })
}

sortNotes(notes)
console.log(notes)

// console.log(findNotes(notes, 'eating'))


// console.log(filteredNotes)

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase() 
//     })
//         return notes[index]

// }

// const note = findNote(notes, 'Office modification')
// console.log(note)

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function(note, index) {
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })

// console.log(index)

// console.log(notes.pop())
// notes.push("My new note")

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is now the new note3'

// notes.forEach(function (item, index)   {
//     console.log(index)
//     console.log(item)
// })

// console.log(notes.length)
// console.log(notes)

// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }

// console.log(notes.indexOf({}))