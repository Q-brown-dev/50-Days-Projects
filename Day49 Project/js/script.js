const progress = document.getElementById("progress");
        const circles = document.querySelectorAll(".circle");

        let current = 1;

        next.onclick = () => {
            current++;
            if (current > circles.length) current = circles.length;
            update();
        };

        prev.onclick = () => {
            current--;
            if (current < 1) current = 1;
            update();
        };

        function update() {

            circles.forEach((circle, index) => {
                if (index < current)
                    circle.classList.add("active");
                else
                    circle.classList.remove("active");
            });

            progress.style.width = ((current - 1) / (circles.length - 1)) * 100 + "%";

        }