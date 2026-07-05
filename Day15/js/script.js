function calculateTrig(type) {
    const input = parseFloat(document.getElementById("input").value);
    let result = 0;
    // 
    // 
    if (type === "sin") {
        result = Math.sin(input);
    } else if (type === "cos") {
        result = Math.cos(input);
    } else if (type === "tan") {
        result = Math.tan(input);
    } else if (type === "log") {
        result = Math.log(input);
    }
        document.getElementById("result").textContent = `${type.toUpperCase()}(${input}) = ${result.toFixed(4)}`;
        
 
}
