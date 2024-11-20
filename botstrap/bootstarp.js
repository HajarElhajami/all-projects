

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").addEventListener('click', function(e) {
        e.preventDefault();


        const emailInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;

        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");


        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        document.getElementById("username").classList.remove('error');
        document.getElementById("password").classList.remove('error');


        const users = [
            {email: "khadija@gmail.com", password: "2007", role: "Admin"},
            {email: "hajar@gmail.com", password: "2001", role: "Manager"},
            {email: "soukaina@gmail.com", password: "1995", role: "User"}
        ];


        let validEmail = false;
        let validPassword = false;
        let role = '';


        for (let user of users) {
            if (emailInput === user.email) {
                validEmail = true;
                if (passwordInput === user.password) {
                    validPassword = true;
                    role = user.role;
                    break;
                }
            }
        }
        

             if (validEmail && validPassword) {
                console.log(`Welcome, ${role}`);
                const form = document.querySelector('form');
                const successMessage = document.createElement('span');
                successMessage.textContent = `Information is correct! Welcome, ${role}`;
                successMessage.style.color = 'rgb(2, 221, 2)';
                successMessage.style.fontSize = '17px';
                successMessage.style.textAlign = 'center';
                form.appendChild(successMessage);
    
            }    

        if (validEmail && validPassword) {
            if (role === "Admin") {
                window.location.href = "file:///C:/Users/hp/Desktop/Admin/test.html"; 
            } else if (role === "Manager") {
                window.location.href = "file:///C:/Users/hp/Desktop/Manager/test.html"; 
            } else if (role === "User") {
                window.location.href = "file:///C:/Users/hp/Desktop/User/test.html"; 
            }



       
               

            
            // console.log(`Welcome, ${role}`);
            // const form = document.querySelector('form');
            // const successMessage = document.createElement('span');
            // successMessage.textContent = `Information is correct! Welcome, ${role}`;
            // successMessage.style.color = 'rgb(2, 221, 2)';
            // successMessage.style.fontSize = '17px';
            // successMessage.style.textAlign = 'center';
            // form.appendChild(successMessage);


            // document.getElementById("username").classList.add('success');
            // document.getElementById("password").classList.add('success');


            // document.getElementById("username").value = '';
            // document.getElementById("password").value = '';
            // setTimeout(() => {
            //     successMessage.remove();

            //     if (role === "Admin") {
            //         window.location.href = "http://127.0.0.1:5500/test.html"; 
            //     } else if (role === "Manager") {
            //         window.location.href = "http://127.0.0.1:5502/test.html"; 
            //     } else if (role === "User") {
            //         window.location.href = "http://127.0.0.1:5501/test.html"; 
            //     }
            // }, 3000);
        } else {
            if (!validEmail) {
                emailError.style.display = 'block';
                emailError.textContent = 'Invalid email address';
                document.getElementById("username").classList.add('error');
            }

            if (validEmail && !validPassword) {
                passwordError.style.display = 'block';
                passwordError.textContent = 'Incorrect password';
                document.getElementById("password").classList.add('error');
            }

        }
    });
});
