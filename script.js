var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;

var programListSwitch = false;
var updateLogSwitch = false;

var asyncCheck = false;

while (true){
    if (asyncCheck){
        document.getElementById("inputLine").style.display = "none";
    }

    else{
        document.getElementById("inputLine").style.display = "inline";
    }
}

function ApplyStyle() {
    const textColor = document.getElementById("colorSelector").value;
    const fontSelect = document.getElementById("fontSelect").value;
    const fontSize = document.getElementById("fontSize").value;

    document.getElementById("notepadContent").style.color = textColor;
    document.getElementById("notepadContent").style.fontFamily = fontSelect;
    document.getElementById("notepadContent").style.fontSize = fontSize + "pt";
}

function NavBarButton(){
    document.getElementById("verticalNavbar").style.display = "block";
}

function NavBarButtonClose(){
    document.getElementById("verticalNavbar").style.display = "none"
}

function showList(){

    programListSwitch = !programListSwitch;

    if (programListSwitch === true){
        document.getElementById("programList").style.display = "block";
    }

    else if (programListSwitch === false){
        document.getElementById("programList").style.display = "none";
    }
}

function showLog(){

    updateLogSwitch = !updateLogSwitch;

    if (updateLogSwitch === true){
        document.getElementById("updateLogList").style.display = "block";
    }

    else if (updateLogSwitch === false){
        document.getElementById("updateLogList").style.display = "none";
    }
}

function EnterCommand() {

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    let h2 = document.createElement('h2');
    h2.id = 'commandResponse';

    let text = document.createTextNode('');
    h2.appendChild(text);

    document.body.appendChild(h2);

    /**
     * 
     */

    const command = document.getElementById("inputLine").value;

    if (command.startsWith("alert ")) {

        const alertMessage = command.slice(6);

        alert(alertMessage);
        document.getElementById("inputLine").value = "";

        document.getElementById("commandResponse").innerHTML = "[" + dateTime + "]" + " Executed Javascript alert()";
    }

    else if (command.startsWith("random number ")) {
        const numbers = command.slice(14);
        var minNum = "";
        var maxNum = "";

        for (let i = 0; i < numbers.length; i++) {
            if (numbers.charAt(i) === " ")
                break;
            else
                minNum = minNum + numbers.charAt(i);
        }

        maxNum = command.slice(14 + minNum.length + 1);

        var minNumInt = parseInt(minNum);
        var maxNumInt = parseInt(maxNum);

        var randomNumber = Math.floor(Math.random() * (maxNumInt - minNumInt + 1) ) + minNumInt;

        document.getElementById("inputLine").value = "";

        document.getElementById("commandResponse").innerHTML = "[" + dateTime + "]" + " Random number between " + minNum + " and " + maxNum + " --> " + randomNumber;
    }

    else if (command.startsWith("add number ")) {
        const numbers = command.slice(11);
        var minNum = "";
        var maxNum = "";

        for (let i = 0; i < numbers.length; i++) {
            if (numbers.charAt(i) === " ")
                break;
            else
                minNum = minNum + numbers.charAt(i);
        }

        maxNum = command.slice(11 + minNum.length + 1);

        var minNumInt = parseFloat(minNum);
        var maxNumInt = parseFloat(maxNum);
        var total = minNumInt + maxNumInt;

        document.getElementById("inputLine").value = "";

        document.getElementById("commandResponse").innerHTML = "[" + dateTime + "]" + " " + minNumInt + " + " + maxNumInt + " = " + total;
    }

    else if (command.startsWith("sub number ")) {
        const numbers = command.slice(11);
        var minNum = "";
        var maxNum = "";

        for (let i = 0; i < numbers.length; i++) {
            if (numbers.charAt(i) === " ")
                break;
            else
                minNum = minNum + numbers.charAt(i);
        }

        maxNum = command.slice(11 + minNum.length + 1);

        var minNumInt = parseFloat(minNum);
        var maxNumInt = parseFloat(maxNum);
        var total = minNumInt - maxNumInt;

        document.getElementById("inputLine").value = "";

        document.getElementById("commandResponse").innerHTML = "[" + dateTime + "]" + " " + minNumInt + " - " + maxNumInt + " = " + total;
    }

    else if (command.startsWith("mul number ")) {
        const numbers = command.slice(11);
        var minNum = "";
        var maxNum = "";

        for (let i = 0; i < numbers.length; i++) {
            if (numbers.charAt(i) === " ")
                break;
            else
                minNum = minNum + numbers.charAt(i);
        }

        maxNum = command.slice(11 + minNum.length + 1);

        var minNumInt = parseFloat(minNum);
        var maxNumInt = parseFloat(maxNum);
        var total = minNumInt * maxNumInt;

        document.getElementById("inputLine").value = "";

        document.getElementById("commandResponse").innerHTML = "[" + dateTime + "]" + " " + minNumInt + " * " + maxNumInt + " = " + total;
    }

    else if (command.startsWith("div number ")) {
        const numbers = command.slice(11);
        var minNum = "";
        var maxNum = "";

        for (let i = 0; i < numbers.length; i++) {
            if (numbers.charAt(i) === " ")
                break;
            else
                minNum = minNum + numbers.charAt(i);
        }

        maxNum = command.slice(11 + minNum.length + 1);

        var minNumInt = parseFloat(minNum);
        var maxNumInt = parseFloat(maxNum);
        var total = minNumInt / maxNumInt;

        document.getElementById("inputLine").value = "";

        document.getElementById("commandResponse").innerHTML = "[" + dateTime + "]" + " " + minNumInt + " / " + maxNumInt + " = " + total;
    }

    else if (command.startsWith("theme color ")) {
        const color = command.slice(12);

        document.getElementById("inputLine").value = "";

        document.getElementById("commandResponse").innerHTML = "[" + dateTime + "]" + " Changed Theme Color";

        document.getElementById("clockBorder").style.borderColor = color;
        document.getElementById("clock").style.borderColor = color;
        document.getElementById("secondHand").style.backgroundColor = color;
        document.getElementById("minuteHand").style.backgroundColor = color;
        document.getElementById("hourHand").style.backgroundColor = color;
        document.getElementById("clockHeader").style.color = color;
        document.getElementById("clockBorder").style.boxShadow = "0px 15px 25px " + color;

        document.getElementById("commandLine").style.color = color;
        document.getElementById("inputLine").style.color = color;

        //document.getElementById("used").style.color = color;
        
        document.getElementById("commandResponse").style.color = color;
        document.getElementById("helpMenu").style.borderColor = color;
        document.getElementById("helpMenuHeader").style.color = color;
        document.getElementById("helpContent").style.color = color;
        document.getElementById("notepad").style.borderColor = color;
        document.getElementById("notepadHeader").style.color = color;
        document.getElementById("notepadContent").style.borderColor = color;
        document.getElementById("userInformation").style.color = color;
        document.getElementById("userInformation").style.borderColor = color;
        
    }

    else if (command.startsWith("open program ")) {
        const programName = command.slice(13);

        document.getElementById("inputLine").value = "";

        document.getElementById("commandResponse").innerHTML = "[" + dateTime + "]" + " Opened Program Window";
        document.getElementById(programName).style.display = "block";
    }

    else if (command.startsWith("close program ")) {
        const programName = command.slice(14);

        document.getElementById("commandResponse").innerHTML = "[" + dateTime + "]" + " Closed Program Window";
        document.getElementById("inputLine").value = "";
        document.getElementById(programName).style.display = "none";
    }

    else if (command === "help show") {
        document.getElementById("helpMenu").style.display = "inline";

        document.getElementById("commandResponse").innerHTML = "[" + dateTime + "]" + " Opened Help Window";
        document.getElementById("inputLine").value = "";
    }

    else if (command === "help hide") {
        document.getElementById("helpMenu").style.display = "none";

        document.getElementById("commandResponse").innerHTML = "[" + dateTime + "]" + " Closed Program Window";
        document.getElementById("inputLine").value = "";
    }

    else if (command === "test type"){
        TypeWriterEffect("This is a test for the typewriter effect...");
        document.getElementById("inputLine").value = "";
    }

    else {
        const errorLine = document.getElementById("inputLine").value;

        document.getElementById("commandResponse").innerHTML = "[" + dateTime + "]" + " ERROR >> Unable to read '" + errorLine + "'";
        document.getElementById("inputLine").value = "";
    }

    if (!asyncCheck)
        document.getElementById("commandResponse").id = "used";
}

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

async function TypeWriterEffect(message){
    asyncCheck = true;
    document.getElementById("commandResponse").innerHTML += "[" + dateTime + "] ";

    for (let i = 0; i < message.length; i ++){
        
        document.getElementById("commandResponse").innerHTML += message.charAt(i);
        await sleep(75);
    }

    asyncCheck = false;


}
