    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let result = multiply(num1, num2);
                    let result1 = adding(num1,num2)

                    // Display the result
                    displayResult(result);
                    displayResult1(result1);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }

            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return a * b;
            }
            function adding(a,b){
                debugger;
                return a+b;
            }

            function displayResult(result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.textContent = `The result is: ${result}`;
            }
            function displayResult1(result1) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result1');
                resultElement.textContent = `The result is: ${result1}`;
            }
        