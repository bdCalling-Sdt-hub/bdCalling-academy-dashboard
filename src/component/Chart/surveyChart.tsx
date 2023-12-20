import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const StudentEnrollmentChart = () => {
  const data = [
    {
      month: "January",
      oldStudents: 100,
      newStudents: 50,
    },
    {
      month: "February",
      oldStudents: 120,
      newStudents: 80,
    },
    {
      month: "March",
      oldStudents: 150,
      newStudents: 100,
    },
    {
      month: "April",
      oldStudents: 180,
      newStudents: 120,
    },
    {
      month: "May",
      oldStudents: 200,
      newStudents: 150,
    },
    {
      month: "June",
      oldStudents: 220,
      newStudents: 180,
    },
  ];

  return (
    <div
      className="p-6 rounded-lg"
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "#000000",
      }}
    >
      <div className="flex justify-between mb-16">
        <h1 className="font-semibold text-lg">student survery</h1>
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-2">
            <p
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#2492EB",
                borderRadius: "50%",
              }}
            ></p>
            <p>new students</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#2BA24C",
                borderRadius: "50%",
              }}
            ></p>
            <p>Old students</p>
          </div>
        </div>
      </div>
      <div>
        <LineChart
          width={865}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="newStudents"
            stroke="#2492EB"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="oldStudents"
            stroke="#2BA24C"
            strokeWidth={3}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default StudentEnrollmentChart;
