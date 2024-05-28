let numbers = [40, 100, 1];
let points = new Array(40, 100, 1)

console.log(numbers);
console.log(points);

let dogs = ["golden retiriver", "labrador", "staffie", "bulldog", "rotweiller", "toi-pummel" ]

console.log(dogs);//whole array
console.log(dogs.length);//just length
console.log(dogs[0]);//specific item
console.log(dogs[dogs.length-1]);//last item
console.log(Array.isArray(dogs));//is array
console.log(dogs.toString());
console.log(dogs.join("*"));


dogs.pop();
console.log(dogs);

dogs.push("toi-pomme");
console.log(dogs);

let dog = dogs.pop();

console.log;
console.log;

let newDogs = dogs.slice(1, 4);

console.log(newDogs);
console.log(dogs);

dogs.splice(1, 2, "jack russel", "doberman", "pitbull");
console.log(dogs);

function decreaseMars(){
if (document.getElementById('ticketsMars').value !=0){
    document.getElementById('ticketsMars').value=parseInt(document.getElementById
    ('ticketsMars').value) - 1;
}else{
    document.getElementById('ticketsMars').value =0;
}
}

function increaseMars(){
    document.getElementById('ticketsMars').value =parseInt(document.getElementById('ticketsMars').value) + 1;


}


let totalMarsCost = 0;

function total(){
            totalMarsCost =parseInt(document.getElementById('ticketsMars').value) * 50
            document.getElementById('total').innerHTML = "R " + totalMarsCost;
} 