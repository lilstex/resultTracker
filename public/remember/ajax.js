function gatherFormData(){
                    let inputs = document.getElementsByTagName('input');
                    let select = document.getElementsByTagName('select');
                    let array = [];
                    for (let i = 0; i < inputs.length; i++) {
                        let inputNameValue = inputs[i].name + '=' + inputs[i].value;
                        array.push(inputNameValue);
                    }
                    for (let i = 0; i < select.length; i++) {
                        let selectNameValue = select[i].name + '=' + select[i].value;
                        array.push(selectNameValue); 
                    }
                    return array.join('&');
                }

               let form_data = gatherFormData(form);
               console.log(form_data);
               let xhr = new XMLHttpRequest();
               xhr.open('POST', action, true);
               xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
               xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
               xhr.onreadystatechange = function(){
                   if(xhr.readyState == 4 && xhr.status == 200){
                       let result = xhr.responseText;
                       console.log('Result: ' + result);
                      // postResult(result);
                     
                   }
               }
            xhr.send(form_data);