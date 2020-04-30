function textValidation() {
    var text = document.getElementById('input1').value;
    var textCheck = /^[A-Za-z. ]{3,40}$/ ;
    
    if(textCheck.test(text)) {
        document.getElementById('textError').innerHTML = "";
    }else {
        document.getElementById('textError').innerHTML = "Invalid Input!";
        return false;
    }
}

function numbValidation() {
    var numb = document.getElementById('input2').value;
    var numCheck = /[6-9][0-9]{9}/ ;

    if(numCheck.test(numb)) {
        document.getElementById('numberError').innerHTML = "";
    }else {
        document.getElementById('numberError').innerHTML = "Invalid Input!";
        return false;
    }
}

function mailValidation() {
    var mail = document.getElementById('input3').value;
    var mailCheck = /[A-za-z]{3,}[A-za-z0-9.]{1,}@[A-Za-z]{3,}.[A-Za-z.]{2,6}/ ;

    if(mailCheck.test(mail)) {
        document.getElementById('mailError').innerHTML = "";
    }else {
        document.getElementById('mailError').innerHTML = "Invalid Input!";
        return false;
    }
}

function dynamicdropdown(listindex) {
    switch (listindex) {
        case "1" :
            document.getElementById("select2").options[0]=new Option("Action Anime");
            document.getElementById("select2").options[1]=new Option("Tokyo Ghoul");
            document.getElementById("select2").options[2]=new Option("One Piece");
            document.getElementById("select2").options[3]=new Option("One Punch Man");
            document.getElementById("select2").options[4]=new Option("Bungou Stray Dogs");
            document.getElementById("select2").options[5]=new Option("Psycho Pass");
            break;
        case "2" :
            document.getElementById("select2").options[0]=new Option("Mystery Anime");
            document.getElementById("select2").options[1]=new Option("Death Note");
            document.getElementById("select2").options[2]=new Option("Mirai Nikki");
            document.getElementById("select2").options[3]=new Option("Kakegurui");
            document.getElementById("select2").options[4]=new Option("Another");
            document.getElementById("select2").options[5]=new Option("Death Parade");
            break;
        case "3" :
            document.getElementById("select2").options[0]=new Option("Romance Anime");
            document.getElementById("select2").options[1]=new Option("Toradora");
            document.getElementById("select2").options[2]=new Option("Bakemonogatari");
            document.getElementById("select2").options[3]=new Option("Elfen Lied");
            document.getElementById("select2").options[4]=new Option("Guity Crown");
            document.getElementById("select2").options[5]=new Option("Nisekoi");
            break;
    }
    return true;
}

function formCheck() {
    var text = document.getElementById('input1').value;
    var numb = document.getElementById('input2').value;
    var mail = document.getElementById('input3').value;
    var list1 = document.getElementById('select1').value;
    var cb = document.getElementsByName('cb');
    var rb = document.getElementsByName('rb');

    if(text == ""){
        document.getElementById('textError').innerHTML = "This field cannot be empty!";
        return false;
    }else {
        document.getElementById('textError').innerHTML = "";
    }

    if(numb == ""){
        document.getElementById('numberError').innerHTML = "This field cannot be empty!";
        return false;
    }else {
        document.getElementById('numberError').innerHTML = "";
    }

    if(mail == ""){
        document.getElementById('mailError').innerHTML = "This filed cannot be empty!";
        return false;
    }else {
        document.getElementById('mailError').innerHTML = "";
    }

    if(list1 == ""){
        document.getElementById('select1Error').innerHTML = "You must choose an option!";
        return false;
    }else {
        document.getElementById('selectError').innerHTML = "";
    }


    var flag = 0;
    for(var i = 0; i < 5; i++){
        if(cb[i].checked == true) {
            document.getElementById('cbError').innerHTML = "";
        }else {
            flag++;
        }
    }
    if(flag == 4) {
        document.getElementById('cbError').innerHTML = "This field cannot be empty!";
        return false;
    }

    var count = 0;
    for(var i = 0; i < 5; i++){
        if(rb[i].checked == true){
            document.getElementById('rbError').innerHTML = "";
        }else {
            count++;
        }
    }
    if(count == 4){
        document.getElementById('rbError').innerHTML = "This field cannot be empty!";
        return false;
    }
} 