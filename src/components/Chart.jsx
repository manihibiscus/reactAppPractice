import ReactApexChart from 'react-apexcharts';

export const Chart = () => {
  // Example data for chart
  const series = [{
    name: 'Sales',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }];
  const options = {
    chart: {
      type: 'line'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
  };

  return (
    <div>
      <h1>Example Chart</h1>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
}
