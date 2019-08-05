const csv = require('csv-parser');
const fs = require('fs');

let states=[];
let sortedStates=[];
 
fs.createReadStream('computers-datafile.csv')
  .pipe(csv())
  .on('data', function(row) {
      
   states.push(row);

   for(let i=0 ; i < states.length ; i++){
    for(let j=0 ; j < states.length-1; j++ ){
        if(states[j].Literacy > states[j+1].Literacy ){
            let tmp=states[j];
            states[j]=states[j+1];
            states[j+1]=tmp;
           
        }
    }
  }
  console.log(states);
}
)
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
  