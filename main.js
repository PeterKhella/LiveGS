let SHEET_ID = '1KrUS5htQUmgHlO0Ub4M2cpsoZ4VW_7SipxliAPfHWTk'
let SHEET_TITLE = 'Quotes'
let SHEET_RANGE = 'A1:B20'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));
    let quotes = document.getElementById('quotes');
    let by = document.getElementById('by');

// Random Button Does Not Work!!!!!!


//     let array = data.table.rows.length
//    for (let i = 1; i < (array); i++) {
//     console.log(data.table.rows[i].c[0].v);
    quotes.innerHTML = (data.table.rows[1].c[0].v);
    by.innerHTML = (data.table.rows[1].c[1].v);
// }

    // const start = 0;
    // const end = array.length - 1;
    // const selected = Math.floor(Math.random() * array.length);
    // const selectedEl = array[selected];

    console.log(data);
    console.log(data.table.rows[1].c[1].v);

})



// // random button
// const randomButton = document.getElementById("randombtn");
// const random = document.querySelectorAll('.random');
// randomButton.addEventListener('click', factSwither);

// console.log(random);
// // define arrays
// for (let i = 0; i < random.length; i++) {
//     console.log('random array position', i, random[i]);
// }
// //pick random
// function factSwither(event) {
    
//     const start = 0;
//     const end = random.length - 1;
//     const selected = Math.floor(Math.random() * (end - start + 1) + start);
//     const selectedEl = random[selected];

//     random.forEach(function (rand) {
//     rand.classList.remove("show");
//     });
//     selectedEl.classList.add('show');
// }