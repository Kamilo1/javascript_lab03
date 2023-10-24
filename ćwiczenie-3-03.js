/**
 * Zdefiniuj funkcję, która zgłasza wyjątek, jeśli argument nie jest oczekiwanym obiektem.
 * Funkcja powinna akceptować tylko obiekty o właściwościach:
 *  amount
 *  sourceAccount
 *  targetAccount
 * Brak której z właściwości powinien zgłosić wyjątek z komunikatem wg wzoru: 
 * 'Impossible to complete the transaction. Absent property <propert-name> in transaction!'
 * W przypadku braku kilku właściwości wyjątek powinien być zgłoszony dla pierwszej brakującej z listy. 
 * W przypadku `amount` ujemnego należy także zgłosić wyjątek z komunikatem:
 * 'Impossible to complete the transaction. Amount is negative!'  
 */

function makeTransaction(transaction){
    if(!transaction.hasOwnProperty("amount") )
    {
        throw new Error("Impossible to complete the transaction. Absent property amount in transaction!");
    }
    if(!transaction.hasOwnProperty("sourceAccount") )
    {
        throw new Error("Impossible to complete the transaction. Absent property sourceAccount in transaction!");
    }
    if(!transaction.hasOwnProperty("targetAccount") )
    {
        throw new Error("Impossible to complete the transaction. Absent property targetAccount in transaction!");
    }
    if(transaction.amount < 0)
    {
        throw new Error("Impossible to complete the transaction. Amount is negative!");
    }
}

try {
    makeTransaction({amount: 20, sourceAccount: "1224", targetAccount: "2345"});
    console.log("Test 31 passed.");
} catch(e){
    console.log("Test 31 failed.")
}
try {
    makeTransaction({ amount: 20, sourceAccounts: "1224", targetAccount: "2345" });
    console.log("Test 31 failed.");
} catch (e) {
    if (e.message === 'Impossible to complete the transaction. Absent property sourceAccount in transaction!') {
        console.log("Test 31 passed.")
    } else {
        console.log("Test 31 failed.")
    }
}

try {
    makeTransaction({ amount: -20, sourceAccount: "1224", targetAccount: "2345" });
    console.log("Test 31 failed.");
} catch (e) {
    if (e.message === 'Impossible to complete the transaction. Amount is negative!') {
        console.log("Test 31 passed.")
    } else {
        console.log("Test 31 failed.")
    }
}