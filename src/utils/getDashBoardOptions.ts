import { getHumanReadbleTime } from './getHumanReadbleTime';

type TGetDashBoardOptions = (
  current: number,
  weekData: [number, number, number, number, number, number, number]
) => { data: IData; options: IOptions };

interface IData {
  labels: string[];
  datasets: {
    backgroundColor: string[];
    data: [number, number, number, number, number, number, number];
  }[];
}
interface IOptions {
  responsive: boolean;
  maintainAspectRatio: boolean;
  minBarLength: number;
  plugins: {
    legend: {
      display: boolean;
    };
    tooltip: {
      enabled: boolean;
    };
    title: {
      display: boolean;
    };
  };
  scales: {
    y: {
      position: 'right';
      color: string;
      ticks: {
        callback: (value: unknown) => string;
        stepSize: number;
        font: {
          size: number;
        };
        color: string;
      };
    };
    x: {
      grid: {
        display: boolean;
      };
      ticks: {
        font: {
          size: number;
        };
        color: string[];
      };
    };
  };
}

const colorsLabelsX = ['#999999', '#999999', '#999999', '#999999', '#999999', '#999999', '#999999'];
const colorsBars = ['#EA8A79', '#EA8A79', '#EA8A79', '#EA8A79', '#EA8A79', '#EA8A79', '#EA8A79'];
const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const getDashBoardOptions: TGetDashBoardOptions = (current, weekData) => {
  const data = {
    labels,
    datasets: [
      {
        backgroundColor: colorsBars,
        data: weekData,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    minBarLength: 9,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: { enabled: false },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        position: 'right' as const,
        color: '#DC3E22',
        ticks: {
          callback: function (value: unknown) {
            return getHumanReadbleTime(value as number, true);
          },
          stepSize: 25,
          font: {
            size: 12,
          },
          color: '#333333',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 24,
          },
          color: colorsLabelsX.map((el, index) => (index === current - 1 ? '#DC3E22' : el)),
        },
      },
    },
  };
  return { data, options };
};

export default getDashBoardOptions;
