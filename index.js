var questions = [
    {
        'C': 'Dennis Ritchie',
        'C++': 'Bjarne Stroustrup',
        'Python': 'Guido van Rossum',
        'Java': 'James Gosling',
        'PHP': 'Rasmus Lerdorf'
    },

    {
        'Jharkhand': 'Ranchi',
        'UP': 'Lucknow',
        'Rajasthan': 'Jaipur',
        'West Bengal': 'Kolkata',
        'Bihar': 'Patna',
    },

    {
        'NASA': 'USA',
        'ISRO': 'India',
        'JAXA': 'Japan',
        'CNES': 'France',
        'CNSA': 'China'
    },

    {
        'India': 'Hockey',
        'England': 'Cricket',
        'America': 'Baseball',
        'Bangladesh': 'Kabaddi',
        'France': 'Football'
    },

    {
        'India': 'Rupees',
        'Japan': 'Yen',
        'Canada': 'Dollar',
        'UK': 'Pound',
        'Germany': 'Euro'
    }

]

let count = 0;
let isMacth = false;
var bottom = 4;
let temp = [];
let value = [];
const play = () => {
    temp = [];
    value = [];

    for (const que in questions[0]) {
        // console.log(`${que}: ${questions[0][que]}`);
        // to get property : que
        // to get value of the property: questions[0][que]

        //----- TO PRINT THE OBJECT
        // console.log(que, questions[1][que])

        temp.push(que);
        value.push(questions[0][que]);
    }


    shuffle(value);
    // console.log(temp);
    print();
}
function print() {
    let questionPrint = "";
    for (let i = 0; i < temp.length; i++) {
        questionPrint += `<button id="question${i}" class="match-btn ${count == i ? '' : 'que-button'}">${temp[i]}</button> <button id="ans${i}" class="match-btn ans-button" onclick="checkAnswer(this.id)" >${value[i]}</button><br>`
    }

    document.getElementById("main").innerHTML = questionPrint
}

function checkAnswer(id) {

    let currentKey;
    currentKey = document.getElementById("question" + count).innerText;
    
    if (count<bottom)
    {swap2(id, bottom);}
    else
    {document.getElementById(`ans${bottom}`).id= id;}
    console.log(bottom," ok it yours");
    let selectedAnswer = document.getElementById(`ans${bottom}`).innerText;
    if (questions[0][currentKey] === selectedAnswer) {
        console.log("matched");
        document.getElementById(`ans${bottom}`).disabled = true;
        document.getElementById(`ans${bottom}`).setAttribute("class", "matched-color");

    } else {
        console.log("not matched..")
        document.getElementById(`ans${bottom}`).setAttribute("class", "not-matched");
        document.getElementById(`ans${bottom}`).disabled = true;
    }
    document.getElementById(`question${count}`).style.backgroundColor = "grey";
    if (count < bottom) {
        swap1(count, bottom);

    }
    if (bottom > 0)
        bottom = bottom - 1;
    count += 1;
    if (count < 5)
        document.getElementById(`question${count}`).style.backgroundColor = "white";

}
function swap1(count, bottom) {
    //  if(+count==+bottom){

    //  }
    let idchange = document.getElementById(`question${bottom}`).id;
    document.getElementById(`question${bottom}`).id = document.getElementById(`question${count}`).id;
    document.getElementById(`question${count}`).id = idchange;
    let changing = document.getElementById(`question${bottom}`).innerHTML;
    document.getElementById(`question${bottom}`).innerHTML = document.getElementById(`question${count}`).innerHTML;
    document.getElementById(`question${count}`).innerHTML = changing;
}
function swap2(id, bottom) {


    let change = document.getElementById(`ans${bottom}`).innerHTML;
    document.getElementById(`ans${bottom}`).innerHTML = document.getElementById(`${id}`).innerHTML;
    document.getElementById(`${id}`).innerHTML = change;
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        // Math.random() returns a random number between 0 (included) and 1 (excluded)
        // Math.floor(Math.random() * 10) returns a random integer between 0 and 9
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


// -----------------

/*

    // if(questions[0]['C'] === button)
    // {
    //     document.getElementById(`${id}`).style.backgroundColor="Blue";
    //     //document.write(questions[0][count]);
    //     count++;
    // }
    //    // now you can't call a  function

*/
// let a = 'PHP';
// let b = 'Dennis Ritchie';

// // matching the correct
// console.log(questions[0][a]);
// if(questions[0][a] === b){
//     console.log('match');
// }else {
//     console.log("not match");
// }




// function swap(count, bottom) {
//     let temp = document.getElementById(`question${bottom}`).innerHTML;
//     document.getElementById(`question${bottom}`).innerHTML = document.getElementById(`question${count - 1}`).innerHTML;
//     document.getElementById(`question${count - 1}`).innerHTML = temp;
//     temp = document.getElementById(`ans${bottom}`).innerHTML;
//     document.getElementById(`ans${bottom}`).innerHTML = document.getElementById(`ans${count - 1}`).innerHTML;
//     document.getElementById(`ans${count - 1}`).innerHTML = temp;
//     bottom--;
// }
