// const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];

// function remoteDuplicate(names) {
//     const unique = [];
//     for (let i = 0; i < names.length; i++) {
//         const name = names[i]
//         // console.log(name);
//         if (unique.includes(name) === false) {
//             unique.push(name);
//         }
//     }
//     return unique;
// }

// const uniqueNames = remoteDuplicate(names);
// console.log(uniqueNames)

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];

function remoteDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = remoteDuplicate(names); {
    console.log(uniqueNames);
}