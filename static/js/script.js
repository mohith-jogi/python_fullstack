
// Register form validation & API call
let registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form from submitting the old way
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        
        let dobInput = document.querySelector('input[name="dob"]');
        let dob = dobInput ? dobInput.value : '';
        
        let genderInput = document.querySelector('input[name="gender"]:checked');
        let gender = genderInput ? genderInput.value : '';
        
        let courseSelect = document.querySelector('select[name="course"]');
        let course = courseSelect ? courseSelect.value : '';
        
        if (!name || !email || !password) {
            alert("Please fill in all fields for registration.");
            return;
        }
        
        // Simple JSON object for REST API
        let data = {
            name: name,
            email: email,
            password: password,
            dob: dob,
            gender: gender,
            course: course
        };
        
        // Call the /api/register endpoint using fetch
        fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.status === 'success') {
                window.location.href = '/login'; // Redirect to login page on success
            }
        })
        .catch(error => console.error('Error:', error));
    });
}

// Login form validation & API call
let loginForm = document.getElementById("LoginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form from submitting the old way
        
        let email = document.getElementById("loginemail").value;
        let password = document.getElementById("loginpassword").value;
        
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }
        
        // Simple JSON object for REST API
        let data = {
            email: email,
            password: password
        };
        
        // Call the /api/login endpoint using fetch
        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.status === 'success') {
                window.location.href = '/'; // Redirect to home page on success
            }
        })
        .catch(error => console.error('Error:', error));
    });
}

// --- Very Simple Dynamic Trainers Section ---

let trainersList = [
    { name: "Mr. Sriram", role: "Python Full Stack Trainer", exp: "Experience: 4+ years", img: "trainer1.jpg" },
    { name: "Ms. Anita", role: "Frontend Developer", exp: "Experience: 3+ years", img: "trainer2.jpg" },
    { name: "Mr. Ramesh", role: "Database Admin", exp: "Experience: 5+ years", img: "trainer3.jpg" }
];
let currentTrainer = 0;

let btnNextTrainer = document.getElementById("nextTrainerBtn");
if (btnNextTrainer) {
    btnNextTrainer.addEventListener("click", function() {
        // Go to the next trainer, and loop back to the start if at the end
        currentTrainer = currentTrainer + 1;
        if (currentTrainer >= trainersList.length) {
            currentTrainer = 0;
        }
        
        let trainer = trainersList[currentTrainer];
        
        // Update the HTML elements with new data
        document.getElementById("trainerName").innerHTML = trainer.name;
        document.getElementById("trainerRole").innerHTML = trainer.role;
        document.getElementById("trainerExp").innerHTML = trainer.exp;
        document.getElementById("trainerImg").src = "/static/images/" + trainer.img;
    });
}

// --- Very Simple Dynamic Courses Section ---

let coursesList = [
    { name: "Python FullStack", duration: "6 Months", mode: "Offline", path: ["HTML", "CSS", "JavaScript", "Flask", "Database"] },
    { name: "Web Development", duration: "3 Months", mode: "Online", path: ["HTML", "CSS", "JavaScript", "React", "NodeJS"] },
    { name: "Data Science", duration: "8 Months", mode: "Hybrid", path: ["Python", "Pandas", "NumPy", "Machine Learning", "AI"] }
];
let currentCourse = 0;

let btnNextCourse = document.getElementById("nextCourseBtn");
if (btnNextCourse) {
    btnNextCourse.addEventListener("click", function() {
        // Go to the next course, and loop back to the start if at the end
        currentCourse = currentCourse + 1;
        if (currentCourse >= coursesList.length) {
            currentCourse = 0;
        }
        
        let course = coursesList[currentCourse];
        
        // Update the HTML table with new data
        document.getElementById("courseName").innerHTML = course.name;
        document.getElementById("courseDuration").innerHTML = course.duration;
        document.getElementById("courseMode").innerHTML = course.mode;
        
        // Update the HTML for learning path using simple loop
        let pathElem = document.getElementById("courseLearningPath");
        if (pathElem) {
            let pathHTML = "";
            for (let i = 0; i < course.path.length; i++) {
                pathHTML += "<li>" + course.path[i] + "</li>";
            }
            pathElem.innerHTML = pathHTML;
        }
    });
}

// Apply Course logic
let btnApplyCourse = document.getElementById("applyCourseBtn");
if (btnApplyCourse) {
    btnApplyCourse.addEventListener("click", function() {
        let courseName = document.getElementById("courseName").innerHTML;
        alert("Congratulations! You have successfully applied for the " + courseName + " course.");
    });
}

// --- Popular Courses Section ---
let popularCoursesList = [
    { name: "Python FullStack", desc: "Learn HTML, CSS, JavaScript, SQL and Flask" },
    { name: "Web Development", desc: "Learn HTML, CSS, JavaScript, React and Node.js" },
    { name: "Data Science", desc: "Learn Python, Pandas, NumPy, Machine Learning and AI" }
];
let currentPopularCourse = 0;

function updatePopularCourse() {
    let course = popularCoursesList[currentPopularCourse];
    let nameElem = document.getElementById("popularCourseName");
    let descElem = document.getElementById("popularCourseDesc");
    if (nameElem && descElem) {
        nameElem.innerHTML = course.name;
        descElem.innerHTML = course.desc;
    }
}

let btnNextPopular = document.getElementById("nextPopularCourseBtn");
if (btnNextPopular) {
    btnNextPopular.addEventListener("click", function() {
        currentPopularCourse = currentPopularCourse + 1;
        if (currentPopularCourse >= popularCoursesList.length) {
            currentPopularCourse = 0;
        }
        updatePopularCourse();
    });
}

let btnPrevPopular = document.getElementById("prevPopularCourseBtn");
if (btnPrevPopular) {
    btnPrevPopular.addEventListener("click", function() {
        currentPopularCourse = currentPopularCourse - 1;
        if (currentPopularCourse < 0) {
            currentPopularCourse = popularCoursesList.length - 1;
        }
        updatePopularCourse();
    });
}