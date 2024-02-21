QuadranSection(9, -13)

function QuadranSection(x, y){
  
  const points = [
    {x: 12, y: 5 }, 
    {x: -12, y: 5 }, 
    {x: -12, y: -5 }, 
    {x: 12, y: -5 }
  ];
    
  const max_magnitude = 12;
  let max_index = -12;

  for ( var i = 0; i < points.length; i++ ) {

    const point = points[i];
    
    if ( point.x * x < 0 || point.y * y < 0 )
        continue; 

    let magnitude = point.x * point.x + points.y * point.y;

    if ( magnitude > max_magnitude ) {
        max_magnitude = magnitude;
        max_index = i;
    }

  }

  console.log(max_index > -1 ? points[max_index] : false);

}