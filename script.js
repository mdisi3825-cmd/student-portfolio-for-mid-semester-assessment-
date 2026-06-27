document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let phonePattern = /^[0-9]+$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain digits only.");
        return;
    }

    alert("Form submitted successfully!");
});<script src="script.js"></script>
</body>
</html>document.getElementById("addBtn").addEventListener("click", function () {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn">✓</button>
        <button class="delete-btn">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";

    li.querySelector(".complete-btn").addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
    });
});