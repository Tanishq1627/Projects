let form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let genderArr = document.getElementsByName('gender');
    let gender = "";
    for (let i = 0; i < genderArr.length; i++) {
        if (genderArr[i].checked) {
            gender = genderArr[i].value;
        }
    }

    let hobbiesArr = document.getElementsByName('hobbies');
    let hobbies = [];
    for (let i = 0; i < hobbiesArr.length; i++) {
        if (hobbiesArr[i].checked) {
            hobbies.push(hobbiesArr[i].value);
        }
    }

    let dob = document.getElementById('dob').value;
    let address = document.getElementById('address').value;

    generateTableBody(firstName, lastName, email, password, gender, hobbies, dob, address);

    form.reset();
});

form.addEventListener('reset', function () {
    console.log("Form reset successful.");
});

function generateTableBody(fn, ln, email, pass, gender, hobbies, dob, address) {

    const tbody = document.getElementById('table-body');
    const row = document.createElement('tr');

    let hobbyText = hobbies.length > 0 ? hobbies.join(", ") : "-";

    [fn, ln, email, pass, gender, hobbyText, dob, address].forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
    });

    tbody.appendChild(row);
}
