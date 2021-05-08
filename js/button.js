function validate(form_id,email) {
    let q3 = document.getElementById('q3');
    let q4 = document.getElementById('q4');
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
        q4.style.display = 'block';
        q3.style.display = 'none';
    }
    else {
        q3.style.display = 'block';
        q4.style.display = 'none';
    }
}