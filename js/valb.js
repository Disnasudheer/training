function checkbox() {
   
    if (document.getElementById('fullname').value == '') {
        document.getElementById('error1').innerHTML = 'please enter your name'
    } else if (document.getElementById('password').value == '') {
        document.getElementById('error2').innerHTML = 'please enter your password'
    } 
    else if (document.getElementById('email').value == '') {
        document.getElementById('error3').innerHTML = 'please enter your email'
    } 
    else if (document.getElementsByTagName('checkbox').checked == 'true') {
        document.getElementById('error4').innerHTML = 'please select one'
    } 
    else {
        document.getElementById('registration').submit()
    }
}
checkbox=()=>
checkedcount = 0 ;
list=getElementsByTagName(input);