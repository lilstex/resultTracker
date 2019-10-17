//immediatly invoked function expression
(function(){
    //using strict mode
    'use strict';
    let form = document.getElementById('form');
    let mainCard = document.getElementById('main');
    document.addEventListener('DOMContentLoaded', ()=>{
    //changing the background color with the mousemoves
        let mousemove = document.querySelector('#main');
        mousemove.addEventListener('mousemove',movemouse);
    function movemouse(e){
        document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 470)`;
    }
    //validation the loop number input
    let button = document.getElementById('button');
        let loopinput = document.getElementById('loopNumber');
        button.disabled = true;
        loopinput.addEventListener('keyup',()=>{
            if(loopinput.value === ''){
                // alert('Please fill the first textbox');
                button.focus();
               button.disabled = true;
            }else{
                button.disabled = false;
            }
        
        });
    button.addEventListener('click',buttonClick);
    //function for creating the input and calculate button
    function buttonClick(e){
        e.preventDefault(); 
    let loopNumber = parseInt(document.getElementById('loopNumber').value, 10);
    let title = document.querySelector('.title');
         var arrayoption = ['A','B','C','D','F'];
        for(let i=0; i<loopNumber; i++){
            let div =  document.createElement('div');
            div.className = "form-group";
        form.appendChild(div);
        let courseInput =  document.createElement('input');
        let gradeInput =  document.createElement('select');
        let unitInput =  document.createElement('input');
        courseInput.className = 'btn btn-outline-primary mt-sm-2';
        unitInput.className = 'btn btn-outline-primary mt-sm-2';
        gradeInput.className = `btn btn-outline-primary  `;
        courseInput.id= `course${i}`;
        gradeInput.id = `grade${i}`;
        unitInput.id = `unit${i}`;

            for(let o=0; o<arrayoption.length; o++){
                let option = document.createElement('option');
                option.value = arrayoption[o];
                option.text = arrayoption[o];
                gradeInput.appendChild(option);
            }
            courseInput.setAttribute ('required' , 'yes');
            courseInput.setAttribute('placeholder' , 'Enter CourseCode');
            courseInput.setAttribute('type' , 'text');
        unitInput.setAttribute ('required' , 'yes');
        unitInput.setAttribute('placeholder' , 'Enter CourseUnit');
        unitInput.setAttribute('type' , 'number');
        div.appendChild(courseInput);
        div.appendChild(gradeInput);
        div.appendChild(unitInput);
        }
        button.style.display="none";
        loopinput.style.display="none";
        title.innerHTML = "Enter Your Course Details";
    //creating the calculate button
        let calculate =  document.createElement('button');
        calculate.className ="btn btn-success";
        calculate.id="calculate";
        calculate.appendChild(document.createTextNode('Calculate'));
        form.appendChild(calculate);
           
    let calculatebtn = document.getElementById('calculate');
    //console.log(calculatebtn);
    
        calculatebtn.addEventListener('click',gpCal);
       
    
            
       
   
    function gpCal(e){
            e.preventDefault();
calculatebtn.style.display = 'none';
title.innerHTML = "Your Calculation Details";
            let grade_array = [];
            let unit_array = [];
            let course_array = [];
            let grade = [];
            
            let gp=0;
            let tg = 0;
            let total_courseunit=0;
            let mgp=0;
    
            for(let i=0; i<loopNumber; i++){

            course_array[i] = document.getElementById(`course${i}`).value;
             grade_array[i] = document.getElementById(`grade${i}`).value;
             unit_array[i] = parseInt(document.getElementById(`unit${i}`).value,10);
             document.getElementById(`grade${i}`).style.display = 'none';
             document.getElementById(`unit${i}`).style.display = 'none';
             document.getElementById(`course${i}`).style.display = 'none';
                
             

             let li = document.createElement('li');
             li.className = 'list-group-item';
            
             let div =  document.createElement('div');
             div.className = "form-group";
             
             form.appendChild( div.appendChild(li));
                    // let dataDisplay = document.getElementById('data');
                li.innerHTML=`CourseCode: ${course_array[i]} || Grade: ${grade_array[i]} || Unit: ${unit_array[i]}`;
             total_courseunit= total_courseunit + unit_array[i];
             
             switch(grade_array[i]) {
                case 'A':
                grade[i]=5;
               tg =grade[i] * unit_array[i];
                gp = gp + tg;
                break;
                case 'B':
                grade[i]=4;
               tg =grade[i] * unit_array[i];
                gp = gp + tg;
                break;
                case 'C':
                grade[i]=3;
               tg =grade[i] * unit_array[i];
                gp = gp + tg;
                break;
                case 'D':
                grade[i]=2;
               tg =grade[i] * unit_array[i];
                gp = gp + tg;
                break;
                case 'F':
                 grade[i]=0;
               tg =grade[i] * unit_array[i];
                gp = gp + tg;
                break;
                default:
                grade[i]=0;
                tg =grade[i] * unit_array[i];
                 gp = gp + tg;
                
            }
            
            }
           
            mgp = Math.round(gp / total_courseunit * 100) / 100;
            let display = document.getElementById("header-title");
            if(mgp){
                display.innerHTML = `Your GP Calculation IS ${mgp}`;
            }else if(mgp == 0){
               display.innerHTML = `Your GP Calculation IS ${mgp}`;
            }
            else{
                display.innerHTML = `Invalid Calculation`;
             }
             
        //creating the display output
        
    //     for(let i=0; i<loopNumber; i++){
    //         let dataDisplay = document.getElementById('data');
    //     dataDisplay.innerHTML=`Grade:${grade_array[i]} Course:${unit_array[i]}`;
    // }
        let resultDisplay = document.getElementById('resultDisplay');;

       
        resultDisplay.innerHTML = `Your GP Calculation IS ${mgp}`;
    
     if(mgp >= 4.5){
        resultDisplay.style.color = '#ffffff' ;
        resultDisplay.style.backgroundColor = '#00ff00' ;
        }else if(mgp >= 3.5 && mgp < 4.5){
            resultDisplay.style.color = '#ffffff' ;
            resultDisplay.style.backgroundColor = '#001200' ;
        }
        else if(mgp >= 3 && mgp < 3.5){
            resultDisplay.style.color = '#ffffff' ;
            resultDisplay.style.backgroundColor = '#f19000';
        }else if(mgp >= 2 && mgp < 3){
            resultDisplay.style.color = '#ffffff' ;
            resultDisplay.style.backgroundColor = '#e15000' ;
        }else if(mgp >= 0 && mgp < 2){
            resultDisplay.style.color = '#ffffff' ;
            resultDisplay.style.backgroundColor = '#ff0000';
        }else{
            resultDisplay.style.color = '#ffffff' ;
            resultDisplay.style.backgroundColor = 'ff0000';
            resultDisplay.innerHTML = `Please enter course unit`;
        }
    
        mainCard.appendChild(resultDisplay);
        resultDisplay.style.display = 'initial';
        let resetbtn = document.getElementById('reset');
        let divReset =  document.getElementById('div');
            divReset.className = "form-group";
        mainCard.appendChild(divReset);
        divReset.appendChild(resetbtn);
        resetbtn.style.display = 'initial';
        resetbtn.addEventListener('click',()=>{
            location.reload();
            }); 
            let savebtn = document.getElementById('save');
            // let divReset =  document.getElementById('div');
            //     divReset.className = "form-group";
            mainCard.appendChild(divReset);
            divReset.appendChild(savebtn);
            savebtn.style.display = 'initial'; 
            savebtn.addEventListener('click',()=>{
                alert('Sorry we are still working on it');
                });  
            

    }
    
           
    }                          
    });
    })();
    
    
    
    