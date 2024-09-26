import "./style.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const dados = [
  { nome: "Janeiro", Total: 1200 },
  { nome: "Fevereiro", Total: 2100 },
  { nome: "Março", Total: 800 },
  { nome: "Abril", Total: 1600 },
  { nome: "Maio", Total: 900 },
  { nome: "Junho", Total: 1700 },
];

const Grafico = ({ aspecto, titulo }) => {
  return (
    <div className="grafico">
      <div className="titulo">{titulo}</div>
      <ResponsiveContainer width="100%" aspect={aspecto}>
        <AreaChart
          width={730}
          height={250}
          data={dados}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="nome" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="gradeGrafico" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

Grafico.propTypes = {
  aspecto: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
};

export default Grafico;
