var vg_1 = "choropleth_map.json";

vegaEmbed("#choropleth_map", vg_1).then(function(result) {
    console.log("Visualization loaded successfully");
}).catch(console.error);
