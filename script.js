function calculateReport() {
    const name = document.getElementById("name").value;
    const marks = document.getElementById("marks").value.split(',').map(Number);
    let sum = 0;
    marks.forEach(m => sum += m);
    const avg = sum / marks.length;

    let grade;
    if(avg >= 90) grade = "A+";
    else if(avg >= 75) grade = "A";
    else if(avg >= 60) grade = "B";
    else if(avg >= 50) grade = "C";
    else grade = "F";

    document.getElementById("result").innerHTML = 
        `<strong>${name}</strong><br>Average: ${avg}<br>Grade: ${grade}`;
}
