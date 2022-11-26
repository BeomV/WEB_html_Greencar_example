window.onload = function () {
    pieChartDraw();
    document.getElementById('legend-div').innerHTML = window.pieChart.generateLegend();
}

let pieChartData = {
    labels: ['이용중인 상품', '이용대기 상품', '사고접수 상품',],
    datasets: [{
        data: [95, 12, 13],
        backgroundColor: 
        ['#00c88c', 'black', '#ccc']
    }] 
};

let pieChartDraw = function () {
    let ctx = document.getElementById('pieChartCanvas').getContext('2d');
    
    window.pieChart = new Chart(ctx, {
        type: 'pie',
        data: pieChartData,
        options: {
            responsive: false,
            legend: {
                display: false
            },
            legendCallback: customLegend
        }
    });
};

let customLegend = function (chart) {
    let ul = document.createElement('ul');
    let color = chart.data.datasets[0].backgroundColor;

    chart.data.labels.forEach(function (label, index) {
        ul.innerHTML += `<li><span style="background-color: ${color[index]}; display: inline-block; width: 30px; height: 10px;"></span> ${label}</li>`;
    });

    return ul.outerHTML;
};