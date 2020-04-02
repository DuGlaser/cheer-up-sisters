const { CanvasRenderService } = require("chartjs-node-canvas");
const fs = require("fs");

function createChart(data) {
  const width = 600;
  const height = 600;
  const chartCallback = (ChartJS) => {
    ChartJS.defaults.global.elements.rectangle.borderWidth = 2;
    ChartJS.plugins.register({});
    ChartJS.controllers.MyType = ChartJS.DatasetController.extend({});
    ChartJS.plugins.register({
      beforeDraw: (chart, options) => {
        const ctx = chart.ctx;
        ctx.save();
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      },
    });
  };
  const canvasRenderService = new CanvasRenderService(
    width,
    height,
    chartCallback
  );

  return (async () => {
    const configuration = {
      type: "bar",
      data: {
        labels: ["Sun", "Mon", "Thu", "Wen", "Thr", "Fri", "Sta"],
        datasets: [
          {
            label: "commit count",
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(254, 239, 31, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(254, 239, 31, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: { beginAtZero: true, fontSize: 20, fontColor: "#000000" },
            },
          ],
          xAxes: [
            {
              ticks: { fontSize: 20, fontColor: "#000000" },
            },
          ],
        },
      },
    };
    const image = await canvasRenderService.renderToBuffer(configuration);
    fs.writeFile("./image/image.png", image, (err) => {
      if (err) console.err(err);
    });
  })();
}

module.exports = { createChart };
