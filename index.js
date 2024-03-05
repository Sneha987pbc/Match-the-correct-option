//Abhinav 

alert("____Match The Correct🛩️____\n\n📺 To Go Next: Match all correct\n\n");




var sel_que = 0;
var sel_ans = 0;
var que_num = 0;

var questions = [
    {
        'C' : 'Dennis Ritchie',
        'C++' : 'Bjarne Stroustrup',
        'Python' : 'Guido van Rossum',
        'Java' : 'James Gosling',
        'PHP' : 'Rasmus Lerdorf'
    },

    {
        'Text' : '.txt',
        'HTML' : '.htm',
        'Audio' : '.mp3',
        'Python' : '.py',
        'Word File' : '.docx'
    },

    {
        'India' : 'New Delhi',
        'Japan' : 'Tokyo',
        'England' : 'London',
        'France' : 'Paris',
        'Nigeria' : 'Abuja',
    },
     //by abhinav
    {
        'NASA' : 'USA',
        'ISRO' : 'India',
        'JAXA' : 'Japan',
        'CNES' : 'France',
        'CNSA' : 'China'
    },

    {
        'India' : 'Hockey',
        'England' : 'Cricket',
        'America' : 'Baseball',
        'Bangladesh' : 'Kabaddi',
        'France' : 'Football'
    },

    {
        'Earth' : 'Moon',
        'Mars' : 'Phobos',
        'Jupitar' : 'Europa',
        'Saturn' : 'Titan',
        'Neptune' : 'Triton'
    },

    {
        'India' : 'Rupees',
        'Japan' : 'Yen',
        'Canada' : 'Dollar',
        'UK' : 'Pound',
        'Germany' : 'Euro'
    }

]

const que_html = `
<div class="box match-box-1">
            <div class="que-col" id="que-1" onclick="queSelected('1')"></div>
            <div class="que-col" id="que-2" onclick="queSelected('2')"></div>
            <div class="que-col" id="que-3" onclick="queSelected('3')"></div>
            <div class="que-col" id="que-4" onclick="queSelected('4')"></div>
            <div class="que-col" id="que-5" onclick="queSelected('5')"></div>
        </div>
        <div class="box match-box-2">
            <div class="ans-col" id="ans-1" onclick="ansSelected('1')"></div>
            <div class="ans-col" id="ans-2" onclick="ansSelected('2')"></div>
            <div class="ans-col" id="ans-3" onclick="ansSelected('3')"></div>
            <div class="ans-col" id="ans-4" onclick="ansSelected('4')"></div>
            <div class="ans-col" id="ans-5" onclick="ansSelected('5')"></div>
        </div>`;
//by abhinav
const Showtable = () => {
    document.getElementById("main").innerHTML = que_html;
    let btn = document.createElement("button");
    btn.setAttribute("class", "opr-btn");
    btn.setAttribute("id", "opr-btn");
    btn.setAttribute("onclick", "reset()");
    btn.appendChild(document.createTextNode("Reset"));
    document.getElementById("body").appendChild(btn);
    putQuestion();
}

const queSelected = (id) => {
    //don't take the id of solved question
    let que = document.getElementById(`que-${id}`).innerText;
    if(queSolved.indexOf(que) == -1)
        sel_que = parseInt(id);
    else 
        sel_que = 0;

    //if answer is not selected
    if(sel_ans == 0 || (sel_ans != 0 && sel_que == 0))
    {
        for(let i=1 ; i<=5 ; i++){
            if(i==parseInt(id))
                document.getElementById(`que-${i}`).className += ' selected-box';
            else
                document.getElementById(`que-${i}`).classList.remove('selected-box');
        }
    }
    //if answer is selected *
    else {
        let que = document.getElementById(`que-${sel_que}`).innerText;
        let ans = document.getElementById(`ans-${sel_ans}`).innerText;
        queSolved.push(que);
        ansSolved.push(ans);

        if(que == Object.keys(questions[que_num]).find(key => questions[que_num][key] === ans)) {
            document.getElementById(`que-${sel_que}`).className += ' correct-match';
            document.getElementById(`ans-${sel_ans}`).className += ' correct-match';
            swapQuestion(sel_que, sel_ans, 'correct');
            correctMatched += 1;
            if(correctMatched == 5){
                que_num++;
                document.getElementById("opr-btn").innerText = 'Next';
            }
        }
        else {
            document.getElementById(`que-${sel_que}`).className += ' wrong-match';
            document.getElementById(`ans-${sel_ans}`).className += ' wrong-match';
            swapQuestion(sel_que, sel_ans, 'wrong');
        }
        sel_ans = 0;
        sel_que = 0;     
    }
}


var queSolved = [];
var ansSolved = [];
var correctMatched = 0;
const ansSelected = (id) => {
    //don't take the id of solved question
    let ans = document.getElementById(`ans-${id}`).innerText;
    if(ansSolved.indexOf(ans) == -1)
        sel_ans = parseInt(id);
    else 
        sel_ans = 0;

    // If question is not selected
    if(sel_que == 0 || (sel_que != 0 && sel_ans==0))
    {
        for(let i=1 ; i<=5 ; i++){
            if(i==parseInt(id))
                document.getElementById(`ans-${i}`).className += ' selected-box';
            else
                document.getElementById(`ans-${i}`).classList.remove('selected-box');
        }
    } 
    //if question is selected *
    else {
        let que = document.getElementById(`que-${sel_que}`).innerText;
        let ans = document.getElementById(`ans-${sel_ans}`).innerText;
        queSolved.push(que);
        ansSolved.push(ans);
        if(questions[que_num][que] == ans){
            document.getElementById(`que-${sel_que}`).className += ' correct-match';
            document.getElementById(`ans-${sel_ans}`).className += ' correct-match';
            swapQuestion(sel_que, sel_ans, 'correct');
            correctMatched += 1;
            if(correctMatched == 5){
                que_num++;
                document.getElementById("opr-btn").innerText = 'Next';
            }
        }
        else {
            document.getElementById(`que-${sel_que}`).className += ' wrong-match';
            document.getElementById(`ans-${sel_ans}`).className += ' wrong-match';
            swapQuestion(sel_que, sel_ans, 'wrong');
        }
        sel_ans = 0;
        sel_que = 0;
    }
}


const putQuestion = () => {
    document.getElementById("opr-btn").innerText = 'Reset';
    let i=0;
    let queArr = getRandomArray(5);
    let ansArr = getRandomArray(5);
    for (const [key, value] of Object.entries(questions[que_num])) {
        document.getElementById(`que-${queArr[i]}`).innerText = key;
        document.getElementById(`ans-${ansArr[i]}`).innerText = value;
        i++;
    }
}

const getRandomArray = (range) => {
    let arr = [];
    //generating five rndom numbers
    while(arr.length < range){
        var r = Math.floor(Math.random() * 5) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

var bottom = 5;
const swapQuestion = (q_ind, a_ind, matchType) => {
    let temp = '';
    
    temp = document.getElementById(`que-${bottom}`).innerHTML;
    document.getElementById(`que-${bottom}`).innerHTML = document.getElementById(`que-${q_ind}`).innerHTML;
    document.getElementById(`que-${q_ind}`).innerHTML = temp;
    
    document.getElementById(`que-${q_ind}`).classList.remove('selected-box', `${matchType}-match`);
    document.getElementById(`que-${bottom}`).className += ` selected-box ${matchType}-match`;

    temp = document.getElementById(`ans-${bottom}`).innerHTML;
    document.getElementById(`ans-${bottom}`).innerHTML = document.getElementById(`ans-${a_ind}`).innerHTML;
    document.getElementById(`ans-${a_ind}`).innerHTML = temp;

    document.getElementById(`ans-${a_ind}`).classList.remove('selected-box', `${matchType}-match`);
    document.getElementById(`ans-${bottom}`).className += ` selected-box ${matchType}-match`;

    bottom--;
}

const reset = () => {
    document.getElementById("body").lastChild.remove();
    bottom = 5;
    sel_ans = 0;
    sel_que = 0;
    queSolved = [];
    ansSolved = [];
    correctMatched = 0;
    if(que_num < 7)
        Showtable();
    else{
        que_num = 0;
        document.getElementById("main").innerHTML = `
        <div class="start">
            <h1> Great..! 🎉🎉✨✨</h1>
            <br>
            <h1>Match The <span style=" color:rgb(106, 243, 106);"><u>Correct</u></span></h1>
            <br>
            <h2><span style=" color:rgb(106, 243, 213);"><u>Ready</u></span> to Match the <span style="color: red; font-size: 35px;"><u>7</u></span> rounds?</h2>
            <br> <br>
            <button onclick="Showtable()" class="play-btn">Play Again</button>
        </div>
        `;
    }
}
