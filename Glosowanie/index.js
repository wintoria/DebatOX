let selected = 3;
let code;

function propozycja(){
    if(selected == 1){
        $.ajax({
            url: 'deletePrevVote.php',
            type: 'get',
            data: {cel: 'opozycja_glosy', kod: code},
            dataType : "json",
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
            } 
             
        });
    }
    selected = 0;
    sessionStorage.setItem('selected', '0');
    deselect('opozycja');

    $.ajax({
        url: 'sendVote.php',
        type: 'get',
        data: {strona: 'propozycja', kod: code},
        dataType : "json",
        success: function(json){
            //console.log("Dziala " + json);
            
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText);
        } 
         
    });
}

function opozycja(){
    if(selected == 0){
        $.ajax({
            url: 'deletePrevVote.php',
            type: 'get',
            data: {cel: 'propozycja_glosy', kod: code},
            dataType : "json",
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
            } 
             
        });
    }
    selected = 1;
    sessionStorage.setItem('selected', '1');
    deselect('propozycja');

    $.ajax({
        url: 'sendVote.php',
        type: 'get',
        data: {strona: 'opozycja', kod: code},
        dataType : "json",
        success: function(json){
            //console.log("Dziala " + json);
            
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseText);
        } 
         
    });
}

function select(strona){
    if(strona == 'propozycja') document.getElementById('prop').style.backgroundColor = "#6887f6";
    else document.getElementById('opo').style.backgroundColor = "#c83a4a";
}

function deselect(strona){
    console.log("strona: " + strona + " selected: " + selected);
    if(strona == 'propozycja' && selected != 0) document.getElementById('prop').style.backgroundColor = "#92AAFF";
    else if(strona == 'opozycja' && selected != 1) document.getElementById('opo').style.backgroundColor = "#F36B7A";
}

function findDebate(){
    if(document.getElementById("kod").value.length == 6){
        $.ajax({
            url: 'findDebate.php',
            type: 'get',
            data: {kod: document.getElementById("kod").value},
            dataType : "json",
            success: function(json){

            if(json == null){
                document.getElementById("powiadomienie").innerHTML = "Nie znaleziono debaty o danym kodzie";
                if(screen.width < 600) document.getElementById("powiadomienie").style.marginTop = "26vw";
            }
            else {
                let jsonSplit = json[0].split(':');

                document.getElementById("powiadomienie").innerHTML = "Znaleziono debatę";
                if(screen.width < 600) document.getElementById("powiadomienie").style.marginTop = "39vw";

                document.getElementById("button").hidden = false;
                document.getElementById("temat").innerHTML = jsonSplit[1];

                code = document.getElementById("kod").value;

                document.getElementById("codeOnTheBottom").innerHTML = code;

                restoreSelected();

                sessionStorage.setItem('code', code);
            }
                
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
            } 
             
        });
    }
    else{
        document.getElementById("powiadomienie").innerHTML = "";
        document.getElementById("button").hidden = true;
    }
}

function buttonClicked(){
    document.getElementById("CodePanel").hidden = true;
    document.getElementById("glosowanie").hidden = false;
}

function restoreSelected(){
    let restoredSelected = sessionStorage.getItem('selected');
    let restoredCode = sessionStorage.getItem('code');
    console.log(restoredCode);

    if(restoredSelected == 0 && restoredCode == code){
        document.getElementById('prop').style.backgroundColor = "#6887f6";
        selected = restoredSelected;
        code = restoredCode;
    }
    else if(restoredSelected = 1 && restoredCode == code){
        document.getElementById('opo').style.backgroundColor = "#c83a4a";
        selected = restoredSelected;
        code = restoredCode;
    }
}

function toMain(){
    location.href="../index.html";
}
