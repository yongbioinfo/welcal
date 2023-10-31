function calculate() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value) / 100;
    let years = parseFloat(document.getElementById("years").value);

    let amount = principal * Math.pow((1 + rate), years);

    document.getElementById("result").innerText = amount.toFixed(2);

    // 시각화
    let data = [];
    for(let i=0; i<=years; i++) {
        data.push(principal * Math.pow((1 + rate), i));
    }

    Highcharts.chart('visualization', {
        title: {
            text: '복리 성장'
        },
        xAxis: {
            title: {
                text: '년'
            },
            categories: [...Array(years + 1).keys()] // 0부터 years까지의 배열
        },
        yAxis: {
            title: {
                text: '금액'
            }
        },
        series: [{
            name: '복리',
            data: data
        }]
    });

    // 데일리 팁 로드 (임시로 예제 팁 추가, 실제로는 API나 DB에서 데이터를 가져올 수 있음)
    let tips = ["저축은 습관입니다. 꾸준히!", "소액이라도 꾸준한 투자가 중요합니다.", "리스크를 분산하여 투자하세요."];
    let randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("tip").innerText = randomTip;
}

