var questions = [
    {
        prompt: ("what color are apples?\n(a) red/green\n\
        (b) Purple\n(c) orange"),
        answer: "a"
    },
    {
        prompt: ("what color are bananas?\n(a) teal\n\
        (b) magenta\n(c) yellow"),
        answer: "c"
    },
    {
        prompt: ("what color are strawberries?\n(a) yellow\n\
        (b) red\n(c) blue"),
        answer: "b"
    },
    {
        prompt: ("is lanre the SENIOR DEV\n(a) YES\n\
        (b) NO\n(c) IDK"),
        answer: "a"
    },
]


var score = 0;

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
       score++;
       alert("Correct!");
    }else{
        alert("WRONG!")
    }
}
alert("you got" + score + "/" + questions.length);