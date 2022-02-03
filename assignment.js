console.log('Running assignment...');

const transactions = require('./simple-transaction-data').data;

// Assignment 1:
// const filterFunction = (data) => {
//     return data.filter((transaction) => {
//         // TODO
//         if (transaction.credit_card_company === 'VISA') {
//             return transaction
//         }
//     });
// }

// console.log(filterFunction(transactions));

// nr. 2
// const filterFunction = (data) => {
//     return data.filter((transaction) => {
//         // TODO
//         const date = new Date(transaction.transaction_date)
//         const year = date.getFullYear();
//         if (year >= '2015') {
//             return transaction
//         }
//     });
// }

// console.log(filterFunction(transactions));

// nr. 3
const filterFunction = (data) => {
    return data.filter((transaction) => {
        // TODO
        // if (transaction.credit_card_company === 'VISA') {
        //             return transaction
        //         }
        if (transaction.price >= 50) {
            return transaction
        }
    });
}

console.log(filterFunction(transactions));




// Assignment 2:
const aboveAverageFunction = (data) => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum = sum + parseFloat(data[i].price);
    }
    let average = sum / data.length;
    return data.map(transaction => {
        if (parseFloat(transaction.price) < average) {
            transaction.isAboveAverage = false;
            return transaction;
        } else {
            transaction.isAboveAverage = true;
            return transaction
        }
    })

}

console.log(aboveAverageFunction(transactions))

