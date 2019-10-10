'use strict';

//immediatly invoked function expression
(function () {
    //using strict mode
    'use strict';

    var form = document.getElementById('form');
    var mainCard = document.getElementById('main');
    document.addEventListener('DOMContentLoaded', function () {
        //changing the background color with the mousemoves
        var mousemove = document.querySelector('#main');
        mousemove.addEventListener('mousemove', movemouse);
        function movemouse(e) {
            document.body.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 470)';
        }
        //validation the loop number input
        var button = document.getElementById('button');
        var loopinput = document.getElementById('loopNumber');
        button.disabled = true;
        loopinput.addEventListener('keyup', function () {
            if (loopinput.value === '') {
                // alert('Please fill the first textbox');
                button.focus();
                button.disabled = true;
            } else {
                button.disabled = false;
            }
        });
        button.addEventListener('click', buttonClick);
        //function for creating the input and calculate button
        function buttonClick(e) {
            e.preventDefault();
            var loopNumber = parseInt(document.getElementById('loopNumber').value, 10);
            var title = document.querySelector('.title');
            var arrayoption = ['A', 'B', 'C', 'D', 'F'];
            for (var i = 0; i < loopNumber; i++) {
                var div = document.createElement('div');
                div.className = "form-group";
                form.appendChild(div);
                var gradeInput = document.createElement('select');
                var unitInput = document.createElement('input');
                unitInput.className = 'btn btn-outline-primary mt-sm-2';
                gradeInput.className = 'btn btn-outline-primary  ';
                gradeInput.id = 'grade' + i;
                unitInput.id = 'unit' + i;
                for (var o = 0; o < arrayoption.length; o++) {
                    var option = document.createElement('option');
                    option.value = arrayoption[o];
                    option.text = arrayoption[o];
                    gradeInput.appendChild(option);
                }
                unitInput.setAttribute('required', 'yes');
                unitInput.setAttribute('placeholder', 'Enter CourseUnit');
                unitInput.setAttribute('type', 'number');
                div.appendChild(gradeInput);
                div.appendChild(unitInput);
            }
            button.style.display = "none";
            loopinput.style.display = "none";
            title.innerHTML = "Select Your Respective Grade";
            //creating the calculate button
            var calculate = document.createElement('button');
            calculate.className = "btn btn-success";
            calculate.id = "calculate";
            calculate.appendChild(document.createTextNode('Calculate'));
            form.appendChild(calculate);

            var calculatebtn = document.getElementById('calculate');
            //console.log(calculatebtn);

            calculatebtn.addEventListener('click', gpCal);
            function gpCal(e) {
                e.preventDefault();
                var grade_array = [];
                var unit_array = [];
                var grade = [];

                var gp = 0;
                var tg = 0;
                var total_courseunit = 0;
                var mgp = 0;

                for (var _i = 0; _i < loopNumber; _i++) {

                    grade_array[_i] = document.getElementById('grade' + _i).value;
                    unit_array[_i] = parseInt(document.getElementById('unit' + _i).value, 10);

                    total_courseunit = total_courseunit + unit_array[_i];

                    switch (grade_array[_i]) {
                        case 'A':
                            grade[_i] = 5;
                            tg = grade[_i] * unit_array[_i];
                            gp = gp + tg;
                            break;
                        case 'B':
                            grade[_i] = 4;
                            tg = grade[_i] * unit_array[_i];
                            gp = gp + tg;
                            break;
                        case 'C':
                            grade[_i] = 3;
                            tg = grade[_i] * unit_array[_i];
                            gp = gp + tg;
                            break;
                        case 'D':
                            grade[_i] = 2;
                            tg = grade[_i] * unit_array[_i];
                            gp = gp + tg;
                            break;
                        case 'F':
                            grade[_i] = 0;
                            tg = grade[_i] * unit_array[_i];
                            gp = gp + tg;
                            break;
                        default:
                            grade[_i] = 0;
                            tg = grade[_i] * unit_array[_i];
                            gp = gp + tg;

                    }
                }
                mgp = Math.round(gp / total_courseunit * 100) / 100;
                var display = document.getElementById("header-title");
                if (mgp) {
                    display.innerHTML = 'Your GP Calculation IS ' + mgp;
                } else if (mgp == 0) {
                    display.innerHTML = 'Your GP Calculation IS ' + mgp;
                } else {
                    display.innerHTML = 'Invalid Calculation';
                }
                //creating the display output
                var resultDisplay = document.getElementById('resultDisplay');;
                resultDisplay.innerHTML = 'Your GP Calculation IS ' + mgp;

                if (mgp >= 4.5) {
                    resultDisplay.style.color = '#ffffff';
                    resultDisplay.style.backgroundColor = '#00ff00';
                } else if (mgp >= 3.5 && mgp < 4.5) {
                    resultDisplay.style.color = '#ffffff';
                    resultDisplay.style.backgroundColor = '#001200';
                } else if (mgp >= 3 && mgp < 3.5) {
                    resultDisplay.style.color = '#ffffff';
                    resultDisplay.style.backgroundColor = '#f19000';
                } else if (mgp >= 2 && mgp < 3) {
                    resultDisplay.style.color = '#ffffff';
                    resultDisplay.style.backgroundColor = '#e15000';
                } else if (mgp >= 0 && mgp < 2) {
                    resultDisplay.style.color = '#ffffff';
                    resultDisplay.style.backgroundColor = '#ff0000';
                } else {
                    resultDisplay.style.color = '#ffffff';
                    resultDisplay.style.backgroundColor = 'ff0000';
                    resultDisplay.innerHTML = 'Please enter course unit';
                }

                mainCard.appendChild(resultDisplay);
                resultDisplay.style.display = 'initial';
                var resetbtn = document.getElementById('reset');
                var divReset = document.getElementById('div');
                divReset.className = "form-group";
                mainCard.appendChild(divReset);
                divReset.appendChild(resetbtn);
                resetbtn.style.display = 'initial';
                resetbtn.addEventListener('click', function () {
                    location.reload();
                });
            }
        }
    });
})();