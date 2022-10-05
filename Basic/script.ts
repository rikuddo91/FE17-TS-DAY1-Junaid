//Basic EX 1
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.table(`${i} X ${j} = ${i*j}`)
    }
    console.log("---------------")
}

//Basic EX 2
const myName = {
    fName: "Junaid",
    lName: "Khan"
}

let myNameArray: string[] = ["Junaid Khan"];

document.body.innerHTML += `${myName.fName} ${myName.lName}<br>`

myNameArray.forEach(Name => {
    for (let i = 0; i < 10; i++) {
        document.body.innerHTML += `<br>${Name}<br>`
    }
});

setTimeout(() => {
    for(let i = 0; i < 10; i++){
        console.log(`${myName.fName} ${myName.lName}`)
    }
}, 5000);

//Basic EX 3
let newNames: string[] = ["Adam", "John", "Linus", "Lawrence", "Bruce"]
for (let i = 0; i < newNames.length; i++) {
    document.body.innerHTML += `<br>${i}<br>`
}

for (let i = 0; i < newNames.length; i++) {
    document.body.innerHTML += `<br>${newNames[i]}<br>`
}

for (let i = 0; i < newNames.length; i++) {
    document.body.innerHTML += `<br>Index: ${i} Value: ${newNames[i]}<br>`
}