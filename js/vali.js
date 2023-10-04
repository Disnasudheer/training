



function validate() {
    var genders = document.getElementsByName("Gender");

    if (document.getElementsById('FULLNAME').value == '') {
        document.getElementsById('error1').innerHTML = 'please enter your name'
        return false
    }
    if (document.getElementsById('password').values == '') {
        document.getElementById('error2').innerHTML = 'please enter your password'
        return false
    }
    else if
        (genders[0].checked == false && genders[1].checked == false) {
        document.getElementById('error4').innerHTML = 'please enter your gender'
        return false
    }
    else {
        document.getElementById('registration').submit()
    }

    return false

}



//  myCommand{
//     client: client,
//     name:vasu,
//     usage:hello,
//     aliases:hi,
//     description: hello_world,
//          }


class command{
    constructor(clientInput){
        this.client = clientInput
    }
  hi(){
        return "Hello World!"
    }
}



