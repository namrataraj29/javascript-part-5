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