    const passwordInput = document.getElementById("password");
        const lengthSlider = document.getElementById("length");
        const lengthValue = document.getElementById("lengthValue");

        lengthSlider.addEventListener("input", () => {
            lengthValue.textContent = lengthSlider.value;
        });

        function generatePassword() {

            const chars =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

            let password = "";
            let length = lengthSlider.value;

            for (let i = 0; i < length; i++) {
                password += chars.charAt(
                    Math.floor(Math.random() * chars.length)
                );
            }

            passwordInput.value = password;
        }

        function copyPassword() {
            navigator.clipboard.writeText(passwordInput.value);
            alert("Password Copied!");
        }

        generatePassword();