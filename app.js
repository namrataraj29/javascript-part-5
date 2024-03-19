//object literals
let student={
    name:"namrata raj",
    age:21,
    marks:8.32
}
console.log(student)
let item={
    price:100.99,
    discount:50,
    colors:["red","pink"]
}
console.log(item)
//thread/twitter post

const post= {
    username:"@namrataraj2926_",
    content:"this is my #firstpost",
    likes:150,
    tags:["@milkyrani_","nam3017_"]
}
console.log(post)

//get values
console.log(post["likes"])
console.log(post.content)
console.log(post.tags)
console.log(post.tags[0])

//get values

abj={
    1:"a",
    2:"b",
    3:"c",
    4:"d"
}
console.log(abj)

//change or update on object

 let stu = {
    name:"namrata raj",
    class:"bca",
    city:"bihar",
    grade:"A"
}
console.log(stu)
console.log(stu.name="milky")
console.log(stu.class="mca")
console.log(stu.city="bihar")
console.log(stu.grade="B+")
console.log(stu.gender="female")
console.log(stu)

//for deletion
delete stu.gender
console.log(stu)

//nested object

let classinfo={
    namrata:{
        class:"bca",
        city:"bihar"
    },
    milky: {
        class:"mca",
        city:"patna"
    },
    raj:{
        class:"mba",
        city:"delhi"
    }
}
console.log(classinfo)
console.log(classinfo.namrata)

//array of objects
let info= [ {
    namrata:{
        class:"bca",
        city:"bihar"
    },
    milky: {
        class:"mca",
        city:"patna"
    },
    raj:{
        class:"mba",
        city:"delhi"
    }
}
]
console.log(info)

console.log(info[2])


//math object

console.log(Math)
console.log(Math.PI)
console.log(Math.pow(2,5))
console.log(Math.floor(22.9))
console.log(Math.ceil(22.2))
console.log(Math.random())
console.log(Math.random())

//random integers
let a=Math.random()
console.log(a)
a=a*10
console.log(a)
console.log(Math.floor(a))
a=a+1
console.log(a)
console.log(a)
// random number b/w 1 and 100
 let num=Math.random()
 console.log(num)
 num=num*100
 console.log(num)
 console.log(Math.floor(num))
 console.log(num+1)
 console.log(num+1)
 console.log(Math.random()*100)+1
 console.log(Math.random()*100)+1
 console.log(Math.floor(Math.random()*100)+1)
 console.log(Math.floor(Math.random()*100)+1)



 
 //practice paper
 //ques 1
 console.log("generate 1 to 6")
 let n=Math.random()+1
 console.log(n)
 console.log(n+1)
 console.log(n+2)
 console.log(n+3)
 console.log(n+4)
 number=console.log(Math.floor(n+5))

 //ques 2
 let car={
    name:"mercedes",
    model:"not known",
    color:"black"
 }
 console.log(car)
 console.log(car.name)

   // ques 3
   let person={
    name:"namrata raj",
    age:21,
    city:"bihar"
   }
   console.log(person)
   console.log(person.city="punjab")
   console.log(person)
   console.log(person.country="new york")
   console.log(person)
 
//guesing game

const max=prompt("enter the maximum number")
const random= Math.floor(Math.random()*max)
console.log(random)

let guess=prompt("guess the number")

while(true){
    if(guess=="quit"){
        console.log("user quit")
        break;
    }
    if(guess==random){
        console.log("you are right!! congrats!!")
        break;
    }
    else{
        prompt("your guess was wrong . please try again")
    }
}
