var div = document.createElement('div')
div.setAttribute('class','container mt-4')
var divBox = document.createElement('div')
divBox.setAttribute('class','box')
var span = document.createElement('span')
span.setAttribute('class','text-right form-control')
span.setAttribute('id','span')
var textArea = document.createElement('input')
textArea.setAttribute('type','text')
textArea.setAttribute('value','')
textArea.setAttribute('class','text-right form-control')
var button0 = createButton('button','class','bg-dark text-light','type','button','id','zero','value','0','0')
var button1 = createButton('button','class','bg-dark text-light','type','button','id','one','value','1','1')
var button2 = createButton('button','class','bg-dark text-light','type','button','id','two','value','2','2')
var button3 = createButton('button','class','bg-dark text-light','type','button','id','three','value','3','3')
var button4 = createButton('button','class','bg-dark text-light','type','button','id','four','value','4','4')
var button5 = createButton('button','class','bg-dark text-light','type','button','id','five','value','5','5')
var button6 = createButton('button','class','bg-dark text-light','type','button','id','six','value','6','6')
var button7 = createButton('button','class','bg-dark text-light','type','button','id','seven','value','7','7')
var button8 = createButton('button','class','bg-dark text-light','type','button','id','eight','value','8','8')
var button9 = createButton('button','class','bg-dark text-light','type','button','id','nine','value','9','9')
var buttonC = createButton('button','class','bg-danger text-light','type','button','id','clear','value','','C')
var buttonE = createButton('button','class','bg-success text-light','type','button','id','equal','value','','=')
var buttonA = createButton('button','class','bg-warning text-dark','type','button','id','add','value','+','+')
var buttonS = createButton('button','class','bg-warning text-dark','type','button','id','sub','value','-','-')
var buttonD = createButton('button','class','bg-warning text-dark','type','button','id','divide','value','/','/')
var buttonM = createButton('button','class','bg-warning text-dark','type','button','id','star','value','*','X')


divBox.addEventListener('click',display)
buttonE.addEventListener('click',results)
buttonC.addEventListener('click',clearAll)
divBox.append(span,textArea,button7,button8,button9,buttonA,button4,button5,button6,buttonS,button1,button2,button3,buttonM,buttonC,button0,buttonE,buttonD)
div.append(divBox)
document.body.append(div)

function createButton(element, eClass , eClassValue , eType , eTyepeValue , eId , eIdValue , eValue,eValueValue,eData){
    var btn = document.createElement(element)
    btn.setAttribute(eClass,eClassValue)
    btn.setAttribute(eType,eTyepeValue)
    btn.setAttribute(eId , eIdValue )
    btn.setAttribute(eValue,eValueValue)
    btn.innerHTML=eData
    return btn

}

function display(e)
{   
    if(e.target.value!=null){
    span.innerHTML+=e.target.value}
}
function results(e)
{
   if(span.innerHTML!==""){
    textArea.value = eval(span.innerText); }

}
function clearAll()
{
    span.innerText=""
    textArea.value="0"
}
