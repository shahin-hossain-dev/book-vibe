import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getBooksFromLocalDB } from "../../utils/localDB";
import { useLoaderData } from "react-router-dom";

const PagesToRead = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const readListBooks = getBooksFromLocalDB("read");
    const readMatchedBooks = books.filter((book) =>
      readListBooks.includes(book.bookId.toString())
    );
    setReadBooks(readMatchedBooks);
  }, []);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="-ms-6 lg:ms-0">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={readBooks}
          margin={{
            top: 20,
            bottom: 200,
          }}
          style={{
            fontSize: "12px",
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" angle={-90} textAnchor="end" />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {readBooks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
