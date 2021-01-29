var markInputs=document.getElementById("texts");//returns the new input fields that will be creating after getting the number of subjects from user
var finalMark=document.getElementById("Final mark");//returns the fianl grade
var totals=document.getElementById("subjects");//Number of subjects
var number=0;
var total=0;


function NewField(){
  // Delete the old fields
  for(var i=0;i<number;i++){
    var input=document.getElementById(i);
    markInputs.removeChild(input);//returns the removed child node from the DOM but keeps it in the memory
    console.log("")
  }
  //reset number of fields to 0
  nummber=0;
  //create new fields
  for(var i=0;i<totals.value;i++){
    var input = document.createElement("input");
    input.type = "number";
    input.name="mark";
    input.id=number;
    markInputs.appendChild(input);//add a node towards the end of the list
    markInputs.appendChild(document.createElement("br"));
    number+=1;
  }


}
function gpa_calculate(){
  
  // deleting the previously displyed grade
  var final=document.getElementById('output')
  finalMark.removeChild(final);
  
  //flag variable to make sure that all values is less than 100
  var flag=-1;
  
  for(var i=0;i<number;i++){
    var texts=document.getElementById(i);
    total+=parseFloat(texts.value);
    if(parseFloat(texts.value)>100 || parseFloat(texts.value)<0 ){
      flag=0;
    }
  }
  Average=parseInt(total/number);
  var gpa;
  switch(parseInt((Average/10))*10){
    case 100:
      gpa='S(90-100)';
      break;
    case 90:
      gpa='S(90-100)';
      break;
    case 80:
      gpa='A(80-90)';
      break;
    case 70:
      gpa='B(70-80)';
      break;
    case 60:
      gpa='C(60-70)';
      break;
    case 50:
      gpa='D(50-60)';
      break;
    case 40:
      gpa='E,failed!';
      break;
    case 30:
      gpa='F,failed!';
      break;
    default:
      gpa='N,FAILED!';
      break;
  }
  if (flag==0){
    gpa='NA(Invalid condition)';
  }
  console.log('GRADE:'+gpa);
  var final=document.createElement("P");//creates an element node with the specified name

  final.innerText='Your grade is '+gpa;//returns the same value for a given element
  final.id='output';
  
  finalMark.appendChild(final);
  total=0;

    output.style.color ='black';
    output.style.fontSize='500%';
    output.style.textAlign='center';



}
