d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data){
    console.log(data);

  let top10_sample_values = data.samples[0].sample_values.slice(0, 10);
  let top10_otu_ids = data.samples[0].otu_ids;
  let top10_otu_labels = data.samples[0].otu_labels;

  let trace_otu = {
    x: top10_sample_values,
    y: top10_otu_ids.map(id => `OTU ${id}`),
    type: "bar",
    orientation: "h",
    text: top10_otu_labels
    };

  let data_otu = [trace_otu];

  let layout_otu = {
    title: "Top 10 OTUs",
    margin: { t: 30, l: 150 },
    yaxis:{autorange: 'reversed'}
    };

  Plotly.newPlot("bar", data_otu, layout_otu);

/*
To reach the code above for the horizontal bar chart, corrections were needed to my original code, and those corrections were identified by a BCS Learning Assistant. First, all of the code following the first line for loading the data was placed inside the callback function to assure that the data was not just logged to the console but available for processing. Likewise, to assure that the OTU IDs were obtained, "y:" in the trace_otu variable was revised by using the .map function. And thirdly, different margins were advised for the layout than originally used. Lastly, to make the bars in the chart appear with the longest bar on top, tapering down to the shortest, an addition was made to the code for the layout. To that, "yaxis:{autorange: 'reversed'}" was inserted after researching the following source: https://stackoverflow.com/questions/46201532/plotly-js-reversing-the-horizontal-bar-chart-in-plotly.
*/
 
  let sample_values = data.samples[0, 152].sample_values;
  let otu_ids = data.samples[0, 152].otu_ids;
  let otu_labels = data.samples[0, 152].otu_labels;
    
  var bubble_samples = {
    x: otu_ids,
    y: sample_values,
    text: otu_labels,
    mode: 'markers',
    marker: {
      color: otu_ids,
      size: sample_values
      }
    };
    
  var data = [bubble_samples];
    
  var layout = {
    title: 'OTU Samples',
    showlegend: false,
    height: 500,
    width: 1250,
    xaxis: {
      title: {
        text: 'OTU ID',
        font: {
          family: 'Calibri, monospace',
          size: 14,
          color: 'black'
          }
        }
      }
    }
  
  Plotly.newPlot('bubble', data, layout);
/*
The basic construct for the "var" lines in the above code for the bubble chart was made available through the following link provided by my instructor, Dr. Carl Arrington: https://plotly.com/javascript/bubble-charts/. In addition, code for the x-axis title was based on code found at the following source, under "Styling Names": https://plotly.com/javascript/figure-labels/.
*/

  let subject_list = d3.select("#selDataset");
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    data.names.forEach((subject) => {
      let option = subject_list.append("option");
      option.text(subject);
        }
      );
    });

  // /*
  let demo_info = d3.select("#sample-metadata");
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    let id = data.metadata[0].id;
      let option_id = demo_info.append("option_id");
      option_id.text(`id: ${id}`);
    let ethnicity = data.metadata[0].ethnicity;
      let option_eth = demo_info.append("option_eth");
      option_eth.text(`ethnicity: ${ethnicity}`);
    let gender = data.metadata[0].gender;
      let option_gen = demo_info.append("option_gen");
      option_gen.text(`gender: ${gender}`);
    let age = data.metadata[0].age;
      let option_age = demo_info.append("option_age");
      option_age.text(`age: ${age}`);
    let location = data.metadata[0].location;
      let option_loc = demo_info.append("option_loc");
      option_loc.text(`location: ${location}`);
    let bbtype = data.metadata[0].bbtype;
      let option_bb = demo_info.append("option_bb");
      option_bb.text(`bbtype: ${bbtype}`);
    let wfreq = data.metadata[0].wfreq;
      let option_wfreq = demo_info.append("option_wfreq");
      option_wfreq.text(`wfreq: ${wfreq}`);
        }
      );
  // */

    // /* per BCS LA Jan 4/5
    function optionChanged(value) {   // need actually to state, "optionChanged = . . ."?
      // Logic to execute when the dropdown value changes
      // console.log("Test"); // use to 
      console.log("Selected value:", value);
      // Add your code here to update the charts or perform other actions based on the selected value
    }

    // let subject_list = d3.select("#selDataset");

    // Add the event listener to the dropdown
    subject_list.on("change", function() {
    // Call the optionChanged function passing the selected value
      optionChanged(this.value);
      });

    /*
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    data.names.forEach((subject) => {
        let option = subject_list.append("option");
        option.text(subject);
        });
    });
    */
   
    // also see dynamicPlotDemo.js
    // */

});