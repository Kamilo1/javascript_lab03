/**
 * Korzystając z funkcji Array (filter, map) i funkcji strzałkowych zdefiniuj funkcję, która
 * na podstawie łańcucha tworzy tablicę obiektów.
 * Jeden wiersz opisuje jeden obiekt.
 * Każdy obiekt powinien przejść walidację aby
 * - pole `name` nie było null, puste, nie miało więcej niż 25 znaków
 * - pole `ects` było całkowice, nieujmne i nie większe od 200
 * - pole `active` miało wartość true lub false (w łańcuchu true to `aktywny/aktywna` a false `nieaktywny\nieaktywna`).
 * Przykład obiektu: {name: "Robert", ects: 44, active: true} 
 * Wiersze z błędnymi danymi należy pominąć (niepoprawna liczba kolumn w wierszu, niepoprawny typ, nieznana dana, niezgodność z walidacją)\
 * i nie tworzyć z nich obiektów.
 * Postaraj się robić walidację w osobnych wywołaniach `filter`.
 */


function parseStudents(input) {
    if(!input) {
        return [];
    }
     const lines = input.split('\n');
     const students = lines.map(line => {
         const [name, ectsStr, activeStr] = line.split('\t');
         const ects = parseInt(ectsStr);
         let active;
         if (activeStr === 'aktywny' || activeStr === 'aktywna') {
             active = true;
         } else if (activeStr === 'nieaktywny' || activeStr === 'nieaktywna') {
             active = false;
         }
  
         return {
             name,
             ects,
             active
         };
     }).filter(student => {
         return (
             typeof student.name === 'string' && student.name.length > 0 && student.name.length <= 25 &&
             Number.isInteger(student.ects) && student.ects >= 0 && student.ects <= 200 &&
             student.active !== undefined
         );
     });
  
     return students;
}

const studentLines = "Adam\t123\taktywny\nEwa\t34\tnieaktywna\nRoman\t56\taktywny\nKazik\t-34\taktyw\nBogdan\tfalse";

const students = parseStudents(studentLines);
console.log(students)
try {
    if (students.length == 3) {
        console.log("Test 41 passed");
    } else {
        console.log("Test 41 failed");
    }
} catch (e) {
    console.log("Test 41 failed");
}

try {
    if (students[0].name === "Adam" && students[0].ects === 123 && students[0].active === true &&
        students[1].name === "Ewa" && students[1].ects === 34 && students[1].active === false) {
        console.log("Test 42 passed");
    } else {
        console.log("Test 42 failed");
    }
} catch (e) {
    console.log("Test 42 failed");
}

try {
    if (parseStudents().length === 0) {
        console.log("Test 43 passed");
    } else {
        console.log("Test 43 failed");
    }
} catch (e) {
    console.log("Test 43 failed");
}