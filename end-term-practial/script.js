function runCalculations() {
            var sub1 = parseFloat(document.getElementById('s1').value) || 0;
            var sub2 = parseFloat(document.getElementById('s2').value) || 0;
            var sub3 = parseFloat(document.getElementById('s3').value) || 0;
            var sub4 = parseFloat(document.getElementById('s4').value) || 0;
            var sub5 = parseFloat(document.getElementById('s5').value) || 0;
            var total = sub1 + sub2 + sub3 + sub4 + sub5;
            var percentage = Math.round((total / 500) * 100);
            var finalResult = "";
            var finalGrade = "";
            if (sub1 < 35 || sub2 < 35 || sub3 < 35 || sub4 < 35 || sub5 < 35 || percentage < 35) {
                finalResult = "Fail";
                finalGrade = "Fail";
            } else if (percentage >= 75) {
                finalResult = "Pass";
                finalGrade = "Distinction";
            } else if (percentage >= 60) {
                finalResult = "Pass";
                finalGrade = "First Class";
            } else if (percentage >= 45) {
                finalResult = "Pass";
                finalGrade = "Second Class";
            } else {
                finalResult = "Pass";
                finalGrade = "Pass Class";
            }

            document.getElementById('outTotal').innerText = total + " / 500";
            document.getElementById('outPercent').innerText = percentage + "%";
            document.getElementById('circleDisplay').innerText = percentage + "%";
            document.getElementById('outGrade').innerText = finalGrade;
            
            var resDisplay = document.getElementById('outResult');
            resDisplay.innerText = finalResult;

            if (finalResult === "Fail") {
                resDisplay.className = "val fail-text";
            } else {
                resDisplay.className = "val pass-text";
            }
        }