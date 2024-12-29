const Questions = {
    question1: `Qual foi o primeiro presidente dos Estados Unidos da América`,
    answers: {
        a: `John Kennedy`,
        b: `George Washington`,
        c: `Trump`
    },
    correctAnswer: `George Washington`,

    question2: `Where in Asia is Portuguese an official language?`,
    answers2: {
        a2: `Portugal`,
        b2: `Mozambique`,
        c2: `Macao`
    },
    correctAnswer2: `Macao`,

    question3: `Who was the first man to set foot on the moon?`,
    answers3: {
        a3: `Charles Duke, in 1971`,
        b3: `Neil Armstrong, in 1969.`,
        c3: `Buzz Aldrin, in 1969`
    },
    correctAnswer3: `Neil Armstrong, in 1969.`,
    
    question4: `What metal has the chemical symbol Au?`,
    answers4: {
        a4: `Silver`,
        b4: `Gold`,
        c4: `Copper`
    },
    correctAnswer4: `Gold`,
    
    question5: `What is the best-selling book series of the 21st century?`,
    answers5: {
        a5: `Harry Potter, J.K. Rowling`,
        b5: `The Lord of the Rings, J. R. R. Tolkien`,
        c5: `Don Quixote, Miguel de Cervantes`
    },
    correctAnswer5: `Harry Potter, J.K. Rowling`,
}

const ID = (id) => document.getElementById(id)
const visible = (id) => ID(id).style.visibility = "visible"
const remove = (id) => ID(id).remove()


let CorrectQuestionsCounter = 0;
let TotalQuestions = 5;

//DELAY BETWEEN THE CHANGE FROM ONE QUESTION TO ANOTHER
const delay = 240;

//CHECK IF THE ANSWER BUTTON IS CORRECT OR WRONG
const Correct = (alternative, GoToNextQuestion) => {
    ID(alternative).style.background = "green";
    
    setTimeout(() => {
        GoToNextQuestion()
    }, delay);

    CorrectQuestionsCounter++;
}

const Incorrect = (alternative, GoToNextQuestion) => {
    ID(alternative).style.background = "red";

    setTimeout(() => {
        GoToNextQuestion()
        }, delay);   
}

const CorrectQuestionsLimiter = x => {
    CorrectQuestionsCounter > x ? CorrectQuestionsCounter = x :
    CorrectQuestionsCounter = CorrectQuestionsCounter;
}

//START QUIZ
const showElementsOnScreen = () => {
    CorrectQuestionsLimiter(1)
    ID("QuestionNumber").innerText = `1/${TotalQuestions}`

    document.querySelector(".questionbox").classList.toggle('hidden');
    document.querySelector(".questionNumberDiv").classList.toggle('hidden');
    document.querySelector(".inicialTitleDiv").classList.toggle('hidden');
    document.querySelector(".content").classList.toggle('Start');
    visible("questionText")
    visible("questionText")
    visible("alternative1")
    visible("alternative2")
    visible("alternative3") 
    visible("QuestionNumber")

    remove("startButton")
    remove("inicialTitle")

    ID("questionText").innerText = Questions.question1
    ID("alternative1").innerText = Questions.answers.a
    ID("alternative2").innerText = Questions.answers.b
    ID("alternative3").innerText = Questions.answers.c
}

const CheckQuestion_Button1 = () => {
    Questions.answers.a == Questions.correctAnswer 
    ? Correct(`alternative1`, GoToQuestion2) : Incorrect(`alternative1`, GoToQuestion2); 
}

const CheckQuestion_Button2 = () => {
    Questions.answers.b == Questions.correctAnswer 
    ? Correct(`alternative2`, GoToQuestion2) : Incorrect(`alternative2`, GoToQuestion2); 
}

const CheckQuestion_Button3 = () => {
    Questions.answers.c == Questions.correctAnswer 
    ? Correct(`alternative3`, GoToQuestion2) : Incorrect(`alternative3`, GoToQuestion2); 
}

//SECOND QUESTION
const GoToQuestion2 = () => {
    CorrectQuestionsLimiter(2)
    ID("QuestionNumber").innerText = `2/${TotalQuestions}`

    remove("alternative1")
    remove("alternative2")
    remove("alternative3")

    visible("alternative4")
    visible("alternative5")
    visible("alternative6")

    ID("questionText").innerText = Questions.question2
    ID("alternative4").innerText = Questions.answers2.a2
    ID("alternative5").innerText = Questions.answers2.b2
    ID("alternative6").innerText = Questions.answers2.c2
}  

const CheckQuestion_Button4 = () => {
    Questions.answers2.a2 == Questions.correctAnswer2 
    ? Correct(`alternative4`, GoToQuestion3) : Incorrect(`alternative4`, GoToQuestion3); 
}

const CheckQuestion_Button5 = () => {
    Questions.answers2.b2 == Questions.correctAnswer2 
    ? Correct(`alternative5`, GoToQuestion3) : Incorrect(`alternative5`, GoToQuestion3); 
}

const CheckQuestion_Button6 = () => {
    Questions.answers2.c2 == Questions.correctAnswer2 
    ? Correct(`alternative6`, GoToQuestion3) : Incorrect(`alternative6`, GoToQuestion3); 
}

//THIRD QUESTION
const GoToQuestion3 = () => {
    CorrectQuestionsLimiter(3)
    ID("QuestionNumber").innerText = `3/${TotalQuestions}`

    remove("alternative4")
    remove("alternative5")
    remove("alternative6")

    visible("alternative7")
    visible("alternative8")
    visible("alternative9")

    ID("questionText").innerText = Questions.question3
    ID("alternative7").innerText = Questions.answers3.a3
    ID("alternative8").innerText = Questions.answers3.b3
    ID("alternative9").innerText = Questions.answers3.c3

}  

const CheckQuestion_Button7 = () => {
    Questions.answers3.a3 == Questions.correctAnswer3 
    ? Correct(`alternative7`, GoToQuestion4) : Incorrect(`alternative7`, GoToQuestion4); 
}

const CheckQuestion_Button8 = () => {
    Questions.answers3.b3 == Questions.correctAnswer3 
    ? Correct(`alternative8`, GoToQuestion4) : Incorrect(`alternative8`, GoToQuestion4); 
}

const CheckQuestion_Button9 = () => {
    Questions.answers3.c3 == Questions.correctAnswer3 
    ? Correct(`alternative9`, GoToQuestion4) : Incorrect(`alternative9`, GoToQuestion4); 
}

//FOURTH QUESTION
const GoToQuestion4 = () => {
    CorrectQuestionsLimiter(4)
    ID("QuestionNumber").innerText = `4/${TotalQuestions}`

    remove("alternative7")
    remove("alternative8")
    remove("alternative9")

    visible("alternative10")
    visible("alternative11")
    visible("alternative12")

    ID("questionText").innerText = Questions.question4
    ID("alternative10").innerText = Questions.answers4.a4
    ID("alternative11").innerText = Questions.answers4.b4
    ID("alternative12").innerText = Questions.answers4.c4

}          

const CheckQuestion_Button10 = () => {
    Questions.answers4.a4 == Questions.correctAnswer4 
    ? Correct(`alternative10`, GoToQuestion5) : Incorrect(`alternative10`, GoToQuestion5); 
}

const CheckQuestion_Button11 = () => {
    Questions.answers4.b4 == Questions.correctAnswer4
    ? Correct(`alternative11`, GoToQuestion5) : Incorrect(`alternative11`, GoToQuestion5); 
}

const CheckQuestion_Button12 = () => {
    Questions.answers4.c4 == Questions.correctAnswer4 
    ? Correct(`alternative12`, GoToQuestion5) : Incorrect(`alternative12`, GoToQuestion5); 
}

//FIFTH QUESTION
const GoToQuestion5 = () => {
    CorrectQuestionsLimiter(4)
    ID("QuestionNumber").innerText = `5/${TotalQuestions}`
     
    remove("alternative10")
    remove("alternative11")
    remove("alternative12")

    visible("alternative13")
    visible("alternative14")
    visible("alternative15")

    ID("questionText").innerText = Questions.question5
    ID("alternative13").innerText = Questions.answers5.a5
    ID("alternative14").innerText = Questions.answers5.b5
    ID("alternative15").innerText = Questions.answers5.c5

} 

const CheckQuestion_Button13 = () => {
    Questions.answers5.a5 == Questions.correctAnswer5 
    ? Correct(`alternative13`, GoToResults) : Incorrect(`alternative13`, GoToResults); 
}

const CheckQuestion_Button14 = () => {
    Questions.answers5.b5 == Questions.correctAnswer5 
    ? Correct(`alternative14`, GoToResults) : Incorrect(`alternative14`, GoToResults); 
}

const CheckQuestion_Button15 = () => {
    Questions.answers5.c5 == Questions.correctAnswer5 
    ? Correct(`alternative15`, GoToResults) : Incorrect(`alternative15`, GoToResults); 
}

//RESULTS
const GoToResults = () => {

    document.querySelector(".questionNumberDiv").setAttribute('Class', 'questionNumberDiv hidden');
    document.querySelector(".content").setAttribute('Class', 'content End');

    remove("questionText")
    remove("alternative13")
    remove("alternative14")
    remove("alternative15")
    remove("QuestionNumber")

    visible("ResultText")
    visible("NominalText")
    visible("MotivacionalText")
    visible("CallToAction")
    visible("retryButton")

    //NUMBER OF CORRECT QUESTIONS
    ID("ResultText").innerText = `You got ${CorrectQuestionsCounter} of ${TotalQuestions} questions right`
        
    //MOTIVATIONAL PHRASES AFTER THE QUIZ
    if(CorrectQuestionsCounter < ((60 * TotalQuestions) / 100)){
        ID("NominalText").innerText = "Not bad!"

        ID("MotivacionalText").innerText = 
        "Maybe you can get them all right next time!"

        ID("CallToAction").innerText = "How about trying one more time?" 
    }else{
        ID("NominalText").innerText = "Almost!"

        ID("MotivacionalText").innerText = 
        "You know a lot about these topics!"

        ID("CallToAction").innerText = "How about trying one more time?" 
    }

    if(CorrectQuestionsCounter == TotalQuestions){
        ID("NominalText").innerText = "Wow!"

        ID("MotivacionalText").innerText = "You got all the questions right!"

        ID("CallToAction").innerText = "Do you want to take the quiz again?" 
    }

} 

function retry(){
    window.location.reload(false);
}        