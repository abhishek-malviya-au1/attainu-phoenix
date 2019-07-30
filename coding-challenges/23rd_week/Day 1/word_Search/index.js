//This is a program to search a word in a file and to return the line number and that particular line in which the word is found.



//Here we are including the fs module in our program.
const fs=require('fs');



//Function search takes two arguements fileName and a word which we want to search in that file and returns the line number and the line in which it finds the word
function traditionalSearch(fileName , wordToSearch){
	
	//readFile is a function which reads the content of the file it takes three parameters a fileName , an encoding and error,data.
	fs.readFile(fileName , 'utf-8' , (err , data) => {
		if(err){return console.log('Error reading the file');}

		//here we are splitting the files on the basis of escape character /n
		data=data.split('\n');

		//this is a traditional approach to search a word by looping through every line and word in the file.
		for(let i=0; i< data.length , i++){
			if(data[i].includes(wordToSearch)){
				console.log('Line number=>' i+1 , data[i]);
			}
		}
	});

}


function functionallSearch(fileName , wordToSearch){
	
	//readFile is a function which reads the content of the file it takes three parameters a fileName , an encoding and error,data.
	fs.readFile(fileName , 'utf-8' , (err , data) => {
		if(err){return console.log('Error reading the file');}

		//here we are splitting the files on the basis of escape character /n
		data=data.split('\n');

		//this is a functional approach to search a word by looping through every line and word in the file.
		data.forEach((d , i)=>{
			if(d.includes(wordToSearch)){
				console.log('Line =>' , i , d);
			}
		})
	});

}


function main(){
	
	//Here we are checking whether we got the file name and word which we need to search
	if(process.argv.length !==4){
		console.log('Please provide file name and string to search.');
		return;
	}
	
	//here we are accessing fileName and wordToSearch which we got in command line arguement's array
	let fileName=process.argv[2];
	let wordToSearch=process.argv[3];
	traditionalSearch(fileName . wordToSearch);
	functionalSearch(fileName , wordToSearch);
}
