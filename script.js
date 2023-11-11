const CSV = "https://raw.githubusercontent.com/CourseMaterial/heart_data_uci/main/heart.csv"


function plot_histogram(allRows) {

    let x = allRows.map(row => row["age"]);

    let traces = [
        {
            x: x,
            type: 'histogram',
            name: "Age",
            line: {
                color: "#387fba",
                width: 3
            }
        },
    ];

    let layout = {
        title: "Age Histogram",
        yaxis: {
            title: {text:"Frequecy"}
        },
        xaxis: {
            title: {text:"Age"}
        }
    };

    let config = { 
        responsive: true,
    };

    Plotly.newPlot("histogram", traces, layout, config);
}


 function plot_stacked_histogram(allRows){
    
    var x0 = allRows.filter(row => row['num'] == 0).map(row => row["age"]);
    var x1 = allRows.filter(row => row['num'] == 1).map(row => row["age"]);

    var trace1 = {
    x: x0,
    type: "histogram",
    name: 'Target 0',
    opacity: 0.5,
    marker: {
        color: 'green',
    },
    };
    var trace2 = {
    x: x1,
    type: "histogram",
    name: 'Target 1',
    opacity: 0.6,
    marker: {
        color: 'red',
    },
    };

    var data = [trace1, trace2];
    
    let layout = {
        title: "Age Histogram With Separate Target Values",
        yaxis: {
            title: {text:"Frequency"}
        },
        xaxis: {
            title: {text:"Age"}
        },
        barmode: "stack"
    };

    Plotly.newPlot('stacked_histogram', data, layout);
}


function plot_pie_chart(allRows){

    var male = allRows.filter(row => row['sex'] == 1).length;
    var female = allRows.filter(row => row['sex'] == 0).length;

    let data = [{
        values: [male, female],
        labels: ['Male', 'Female'],
        type: 'pie'
    }];
    
    let layout = {
        title: "Pie Chart for Gender Counts"
    };
    
    let config = { 
        responsive: true,
    };

    Plotly.newPlot('pie', data, layout, config);
}

function plot_violin(allRows){
    var age = allRows.map(row => row["age"]);
    var gender = allRows.map(row => row["sex"] == 1 ? "Male" : "Female");

    let data = [{
        type: 'violin',
        x: gender,
        y: age,
        
        points: 'none',
        box: {
          visible: true
        },
        
        line: {
          color: 'gray',
        },
        fillcolor: '#8dd3c7',
        meanline: {
          visible: true
        }
    }];

    let layout = {
        title: "Violin Plot for Age vs Sex",
        yaxis: {
            title: {text:"Age"}
        },
        xaxis: {
            title: {
                text:"Sex",
            }
        }
    };
    
    let config = { 
        responsive: true,
    };

    Plotly.newPlot('violin', data, layout, config);
}
function plot_bar_chart(allRows) {

    var x0 = allRows.filter(row => row['cp'] == 0).length;
    var x1 = allRows.filter(row => row['cp'] == 1).length;
    var x2 = allRows.filter(row => row['cp'] == 2).length;
    var x3 = allRows.filter(row => row['cp'] == 3).length;

    let traces = [
        {
            x: [0, 1, 2, 3],
            y: [x0, x1, x2, x3],
            type: 'bar',
            text: [x0, x1, x2, x3].map(String),
            textposition: 'auto',
            marker: {
              color: ['blue','red','green','yellow'],
              opacity: 0.5,
              line: {
                color: 'black',
                width: 1.5
              }
            }

        },
    ];

    let layout = {
        title: "Chest Pain Severity Count Plot",
        yaxis: {
            title: {text:"Count"}
        },
        xaxis: {
            title: {
                text:"Chest Pain Severity",
            }
        }

    };

    let config = { 
        responsive: true,
    };

    Plotly.newPlot("bar", traces, layout, config);
}
function plot_line(allRows){

    let bp = allRows.map(row => row['trestbps']);
    let hr = allRows.map(row => row["thalach"]);

    var trace0 = {
        y: bp,
        name: "Resting Blood Pressure",
        mode: 'lines'
      };
      
      var trace1 = {
        y: hr,
        name: "Maximum Heart Rate",
        mode: 'lines',
        marker: {
            color: 'pink'
        }
      };
      
      var data = [ trace0, trace1 ];
      
      var layout = {
        title:'Resting Blood Pressure and Heart Rate'
      };
      
      Plotly.newPlot('line', data, layout);
}
function plot_scatter(allRows) {

    let thalach0 = allRows.filter(row => row["num"] == 0).map(row => row["thalach"]);
    let thalach1 = allRows.filter(row => row["num"] == 1).map(row => row["thalach"]);

    var trace1 = {
        y: thalach0,
        mode: 'markers',
        type: 'scatter',
        name: 'Target = 0',
        marker: { size: 12 }
    };
    
    var trace2 = {
        y: thalach1,
        mode: 'markers',
        type: 'scatter',
        name: 'Target = 1',
        marker: { size: 12 }
    };
    
    var data = [ trace1, trace2 ];
    
    var layout = {
        title:'Maximum Heart Rate Scatter Plot'
    };
    
    Plotly.newPlot('scatter', data, layout);
}
function plot_box(allRows){

    let trestbps0 = allRows.filter(row => row["num"] == 0).map(row => row["trestbps"]);
    let trestbps1 = allRows.filter(row => row["num"] == 1).map(row => row["trestbps"]);

    var trace1 = {
        y: trestbps0,
        type: 'box',
        name: 'Target 0',
        marker: {
          color: 'rgb(8,81,156)',
        },
        boxmean: 'sd',
        boxpoints: 'all'
      };
      
      var trace2 = {
        y: trestbps1,
        type: 'box',
        name: 'Target 1',
        marker: {
          color: 'rgb(10,140,208)',
        },
        boxmean: 'sd',
        boxpoints: 'all'
      };
      
      
      var data = [trace1, trace2];
      
      var layout = {
        title: 'Resting Blood Pressure Box Plot with Separate Target Values',
        yaxis: {
            title: {text:"Blood Pressure"}
        },
        xaxis: {
            title: {
                text:"Target Values",
            }
        }

      };
      
    Plotly.newPlot('box', data, layout);
      
 }

Plotly.d3.csv(CSV, function(err, rows) {
    const div = document.getElementById('data');
    div.innerHTML = JSON.stringify(rows);

    // Calling the functions here
    plot_histogram(rows);
    plot_stacked_histogram(rows);
    plot_pie_chart(rows);
    plot_violin(rows);
    plot_bar_chart(rows);
    plot_line(rows);
    plot_scatter(rows);
    plot_box(rows);
});