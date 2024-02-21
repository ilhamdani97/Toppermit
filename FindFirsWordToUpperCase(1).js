handleGetFirstAfterDash('Ilham-ramadani')

function handleGetFirstAfterDash(value){
    const splitValue = value.split('-');
    let valueFinal = '';
    
    splitValue.forEach((data) => {
        valueFinal += data.charAt(0).toUpperCase()
    })
    console.log("final value", valueFinal)
}