function beforesubmit(){
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log("inputdata value ",inputdate.value );

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US")
    outputdate.value = formattedDate;
}