function gradingStudents(grades){

    for(let i=0;i<grades.length;i++){
     if(grades[i]>37){
            if((grades[i]+1)%5==0){
                   grades[i]=grades[i]+1 
            }
            else if((grades[i]+2)%5==0){
                grades[i]=grades[i]+2 
            }
        }
    else{

    }

    }
    return grades
    }
    let notas=[30,67,83,76,94]

    let b =gradingStudents(notas)
   console.log(b)