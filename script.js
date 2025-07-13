const btn1 = document.getElementById("mybutton");
        const btn2 = document.getElementById("mybutton2");
        const generateBtn = document.getElementById("generate");
        const gradDis = document.getElementById("gradDisplay");
        const gradText = document.getElementById("gradText");
        const tooltip = document.querySelector(".tooltip");

        const circle1 = document.getElementById("circle1");
        const circle2 = document.getElementById("circle2");
        const span1 = btn1.querySelector("span");
        const span2 = btn2.querySelector("span");

        let rgb1 = "#a8edea";
        let rgb2 = "#fed6e3";

        const hexvalue = () => {
            let hex = "#";
            const chars = "0123456789abcdef";
            for (let i = 0; i < 6; i++) {
                hex += chars[Math.floor(Math.random() * 16)];
            }
            return hex;
        };

        function applyGradient() {
            document.body.style.background = `linear-gradient(135deg, ${rgb1}, ${rgb2})`;
            gradText.textContent = `background: linear-gradient(135deg, ${rgb1}, ${rgb2})`;
            span1.textContent = rgb1;
            span2.textContent = rgb2;
            circle1.style.backgroundColor = rgb1;
            circle2.style.backgroundColor = rgb2;
        }

        generateBtn.addEventListener("click", () => {
            rgb1 = hexvalue();
            rgb2 = hexvalue();
            applyGradient();
        });

        gradDis.addEventListener("click", () => {
            navigator.clipboard.writeText(gradText.textContent);
            // console.log("Copied");
            
            tooltip.classList.add("copied");
            setTimeout(() => tooltip.classList.remove("copied"), 1200);
        });

        // Optional: Update only one color
        btn1.addEventListener("click", () => {
            rgb1 = hexvalue();
            applyGradient();
        });

        btn2.addEventListener("click", () => {
            rgb2 = hexvalue();
            applyGradient();
        });