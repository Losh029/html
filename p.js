function save() {
    var a = document.getElementById("name").value.trim();
    var b = parseInt(document.getElementById("age").value);
    var e = document.getElementById("course").value.trim();
    var d = document.getElementById("email").value.trim();

    const validCourses = ["Python", "Java", "C", "C++"];

    if (a.length === 0) {
        alert("Name must be at least one character");
    } else if (isNaN(b) || b < 18) {
        alert("Age must be 18 or above");
    } else if (!validCourses.includes(e)) {
        alert("Course must be in the list");
    } else if (d.length === 0) {
        alert("Email should be included");
    } else {
        alert("Form submitted successfully");
    }
}