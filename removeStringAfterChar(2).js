handleRemoveBeforeChar('a<BB<<CC<')

function handleRemoveBeforeChar(value){
    let arrString = [];
    
    const splitValue = value.split('<');
    
    splitValue.forEach((data) => {
      if(data != '')
        arrString.push(data)
    })
    
    for (var i = 0; i < value.length; i++) {
      
      if(value.charAt(i) === '<') {
        arrString.splice(i - 1 , 1);
      }
    }
    
     console.log("final value", arrString)
}