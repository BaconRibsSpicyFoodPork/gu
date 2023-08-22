name_of_the_students=[]

function submit(){
    name1=document.getElementById("nameofthestudent1").value;
    name2=document.getElementById("nameofthestudent2").value;
    name3=document.getElementById("nameofthestudent3").value;
    name4=document.getElementById("nameofthestudent4").value;

    name_of_the_students.push(name1);
    name_of_the_students.push(name2);
    name_of_the_students.push(name3);
    name_of_the_students.push(name4);
    
    document.getElementById("displayname").innerHTML=name_of_the_students;

    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}

function sorting(){
    name_of_the_students.sort();
    document.getElementById("displayname").innerHTML=name_of_the_students;
}