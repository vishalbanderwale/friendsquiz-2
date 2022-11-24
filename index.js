var  readlinesync=require("readline-sync");
var username=readlinesync.question( "what is your name? ");
console.log("welcome to quiz ",username);
score=0;
function quiz2(question,answer)
  {
    var useranswer=readlinesync.question(question+ "answer is "); 
    if(useranswer==answer) {
      console.log("your correct ");
      score=score+1;
      console.log("current score is:",score);
    }
    else{
      console.log("your wrong ");
      score=score-1;
      console.log("current score is:",score);
    }
  }
  

var questions=[ { 
                  question:"who is our pm?\na:ktr\nb: vishal\nc:modi\n",
                   answer: "c"
},
               {
               question:"who is cm of ts?\na:ktr\nb:kcr\nc:me\n",
                  answer:"b"
},
{question:"who is  home minister of ts?\na: ali\n b: sonu\nc:ktr\n",
  answer:"a"
},
{
question:"which is our national language?\na:hindi\n b: telugu\nc:tamil\n",
answer:"a"
},
{
  question:"who is our father of nation?\na:gandhi\nb:nehru\nc:modi\n",
    answer:"a"
}
              ];
for(var i=0;i<questions.length;i++)
  {
    var list=questions[i];
    quiz2(list.question,list.answer);
  }
console.log("final score is",score)

