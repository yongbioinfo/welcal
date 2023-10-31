function calculate() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value) / 100;
    let years = parseFloat(document.getElementById("years").value);
    
    let amount = principal * Math.pow((1 + rate), years);
    
    document.getElementById("result").innerText = amount.toFixed(2);
}
