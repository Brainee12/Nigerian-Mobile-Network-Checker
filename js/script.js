function checknumber() {
    const userinput = document.getElementById("User_input").value;

    if (userinput.length < 4) {
        document.getElementById("outcomes").textContent = "Please enter at least 4 digits.";
        return;
    }

    // Get first 5 or 4 digits to support both types
    let first5 = userinput.slice(0, 5);
    let first4 = userinput.slice(0, 4);
    let matched = false;

    matched = Mtn(first5) || Mtn(first4) ||
              Airtel(first5) || Airtel(first4) ||
              Ninemobile(first5) || Ninemobile(first4) ||
              Glo(first5) || Glo(first4) ||
              Mtel(first4) ||
              Starcomms(first5) || Starcomms(first4) ||
              Smile(first5) ||
              Multilinks(first5) || Multilinks(first4);

    if (!matched) {
        document.getElementById("outcomes").textContent = "Network not recognized.";
    }
}
const sharedUSSD = `
  <strong>USSD Menu:</strong><br>
  Recharge: *311*PIN#<br>
  Check Airtime Balance: *310#<br>
  Borrow Airtime: *303#<br>
  Buy Data: *312#<br>
  Share Airtime/Data: *321#<br>
  Check Data Balance: *323#<br>
  Value‑added Services: *305#<br>
  Link NIN: *996#
`;
/* Mtn Number checker */
function Mtn(phone_number) {
    let mtn = ["07025", "07026", "0703", "0704", "0706", "0707", "0803", "0806", "0810", "0813", "0814", "0816", "0903", "0906", "0913", "0916"];
    if (mtn.includes(phone_number)) {
        document.getElementById("outcomes").textContent = "Your Mobile Network is MTN ";
        return true;
    }
    return false;
}

/* Airtel Number checker */
function Airtel(phone_number) {
    let airtel = ["0701", "0708", "0802", "0808", "0812", "0901", "0902", "0904", "0907", "0912", "0911"];
    if (airtel.includes(phone_number)) {
        document.getElementById("outcomes").textContent = "Your Mobile Network is AIRTEL";
        return true;
    }
    return false;
}

/* 9mobile Number checker */
function Ninemobile(phone_number) {
    let ninemobile = ["0809", "0817", "0818", "0908", "0909"];
    if (ninemobile.includes(phone_number)) {
        document.getElementById("outcomes").textContent = "Your Mobile Network is 9Mobile";
        return true;
    }
    return false;
}

/* Glo Number checker */
function Glo(phone_number) {
    let glo = ["0705", "0805", "0807", "0811", "0815", "0905", "0915"];
    if (glo.includes(phone_number)) {
        document.getElementById("outcomes").textContent = "Your Mobile Network is GLO";
        return true;
    }
    return false;
}

/* Mtel Number checker */
function Mtel(phone_number) {
    if (phone_number === "0804") {
        document.getElementById("outcomes").textContent = "Your Mobile Network is Mtel";
        return true;
    }
    return false;
}

/* Starcomms Number checker */
function Starcomms(phone_number) {
    let starcomms = ["07028", "07029", "0819"];
    if (starcomms.includes(phone_number)) {
        document.getElementById("outcomes").textContent = "Your Mobile Network is Starcomms";
        return true;
    }
    return false;
}

/* Smile Number checker */
function Smile(phone_number) {
    if (phone_number === "07020") {
        document.getElementById("outcomes").textContent = "Your Mobile Network is Smile";
        return true;
    }
    return false;
}

/* Multilinks Number checker */
function Multilinks(phone_number) {
    let multilinks = ["07027", "0709"];
    if (multilinks.includes(phone_number)) {
        document.getElementById("outcomes").textContent = "Your Mobile Network is Multilinks";
        return true;
    }
    return false;
}
