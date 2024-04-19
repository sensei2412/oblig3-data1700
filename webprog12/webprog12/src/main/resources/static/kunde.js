$(function(){  // kjøres når dokumentet er ferdig lastet
    hentAlle();
});


// Regex mønster for å validere et norsk telefonnummer
let telefonPattern = /^\d{8}$/;

// Regex mønster for å validere en e-postadresse
let epostPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Valideringsfunksjon for telefonnummer
function validateTelefon(telefon) {
    return telefonPattern.test(telefon);
}

// Valideringsfunksjon for e-postadresse
function validateEpost(epost) {
    return epostPattern.test(epost);
}



function regKunde() {

    fornavnRes = document.getElementById("fornavnResEl");
    if($("#navn").val() == "") {
        console.log('ingen fornavn');
        fornavnRes.innerHTML = "ingen fornavn";
        fornavnRes.style.color = "red";
    } else {
        fornavnRes.innerHTML = "";
        antallRes = document.getElementById("antallResEl");
        if ($("#antall").val() == "" || $("#antall").val() >= 50) {
            console.log('ingen antall');
            antallRes.innerHTML = "ingen eller har du mer enn 50 på antall";
            antallRes.style.color = "red";
        } else {
            antallRes.innerHTML = "";
            etternavnRes = document.getElementById("etternavnResEl");
            if ($("#adresse").val() == "") {
                console.log('ingen etternavn');
                etternavnRes.innerHTML = "ingen etternavn";
                etternavnRes.style.color = "red";
            } else {
                etternavnRes.innerHTML = "";
                telefonRes = document.getElementById("telefonnrResEl");
                if (!validateTelefon($("#telefon").val())) {
                    console.log('ugyldig telefonnummer');
                    telefonRes.innerHTML = "Ugyldig telefonnummer";
                    telefonRes.style.color = "red";
                } else {
                    telefonRes.innerHTML = "";
                    epostRes = document.getElementById("epostResEl");
                    if (!validateEpost($("#epost").val())){
                        console.log('ugyldig e-postadresse');
                        epostRes.innerHTML = "Ugyldig e-postadresse";
                        epostRes.style.color = "red";
                    } else {
                        epostRes.innerHTML = "";
                        resultat = document.getElementById("filmResEl");
                        if($("#biletterEl").val() == "") {
                            console.log('ingen film');
                            resultat.innerHTML = "ingen film valgt";
                            resultat.style.color = "red";
                            } else {
                            resultat.innerHTML = "";
                            const kunde = {

                                navn: $("#navn").val(),
                                adresse: $("#adresse").val(),
                                telefon: $("#telefon").val(),
                                antall: $("#antall").val(),
                                epost: $("#epost").val(),
                                biletter: $("#biletterEl").val()

                            };
                            const url = "/lagre";
                            $.post(url, kunde, function (resultat) {
                                hentAlle();
                            });
                            $("#navn").val(""); //tøm input-feltene
                            $("#adresse").val("");
                            $("#telefon").val("");
                            $("#antall").val("");
                            $("#epost").val("");
                            $("#biletterEl").val("");
    }}}}}}
}

function hentAlle() {
    $.get( "/hentAlle", function( data ) {
        formaterData(data);
    });
}

function formaterData(kunder){
    var ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Navn</th><th>Etternavn</th><th>Telefonnr</th><th>Antall</th><th>Epost</th><th>Film</th>" +
        "</tr>";
    for(let i in kunder ){
        ut+="<tr><td>"+kunder[i].navn+"</td><td>"+kunder[i].adresse+"</td><td>"+kunder[i].telefon +"</td><td>"+kunder[i].antall+"</td><td>"+kunder[i].epost+"</td><td>"+kunder[i].biletter+"</td></tr>"
    }
    $("#kundene").html(ut);
}

function slettKundene() {
    $.get( "/slettAlle", function( data ) {
        hentAlle();
    });
}



