const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (b) {
    b.addEventListener('click', function (e) {
        
        switch(e.target.id){
            case "gray" : body.style.background = e.target.id;
                break;
            case "black" : body.style.background = e.target.id;
                break;
            case "white" : body.style.background = e.target.id;
                break;
            case "pink" : body.style.background = e.target.id;
                break;
            case "yellow" : body.style.background = e.target.id;
                break;
            case "purple" : body.style.background = e.target.id;
                break;
            case "blue" : body.style.background = e.target.id;
                break;
            case "skyblue" : body.style.background = e.target.id;
                break;
            case "red" : body.style.background = e.target.id;
                break;
            case "green" : body.style.background = e.target.id;
                break;
            default : body.style.background = e.target.id;
        }
    });
});