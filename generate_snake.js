const fs = require("fs");
const fetch = require("node-fetch");

const USERNAME = "ТВОЙ_НИК"; // Заменить на свой ник
const OUTPUT_FILE = "dist/snake.svg";

// Количество дней по горизонтали и вертикали (GitHub contribution grid)
const COLS = 53;
const ROWS = 7;
const CELL_SIZE = 10;
const CELL_GAP = 2;

// Получаем contributions через GraphQL
async function getContributions() {
  const query = `
    {
      user(login: "${USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${process.env.GH_PAT}` // PAT должен быть в secrets
    },
    body: JSON.stringify({ query })
  });

  const data = await res.json();
  const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;

  const grid = [];
  for (let y = 0; y < ROWS; y++) {
    grid[y] = [];
  }

  weeks.forEach((week, x) => {
    week.contributionDays.forEach((day, y) => {
      grid[y][x] = day.contributionCount;
    });
  });

  return grid;
}

// Генерация SVG
function generateSVG(grid) {
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${COLS*(CELL_SIZE+CELL_GAP)}" height="${ROWS*(CELL_SIZE+CELL_GAP)}" viewBox="0 0 ${COLS*(CELL_SIZE+CELL_GAP)} ${ROWS*(CELL_SIZE+CELL_GAP)}">\n`;

  // Сетка
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const count = grid[y][x];
      const color = count ? "#7FE3D7" : "#C6E0F5";
      svg += `<rect x="${x*(CELL_SIZE+CELL_GAP)}" y="${y*(CELL_SIZE+CELL_GAP)}" width="${CELL_SIZE}" height="${CELL_SIZE}" fill="${color}" id="cell-${x}-${y}"/>\n`;
    }
  }

  // Змейка
  svg += `<rect id="snake" width="${CELL_SIZE}" height="${CELL_SIZE}" fill="#FFFFFF">\n`;

  let valuesX = [];
  let valuesY = [];

  // Двигаемся по всем клеткам слева направо, сверху вниз
  for (let x = 0; x < COLS; x++) {
    for (let y = 0; y < ROWS; y++) {
      valuesX.push(x*(CELL_SIZE+CELL_GAP));
      valuesY.push(y*(CELL_SIZE+CELL_GAP));
    }
  }

  svg += `<animate attributeName="x" values="${valuesX.join(";")};${valuesX[0]}" dur="10s" repeatCount="indefinite"/>\n`;
  svg += `<animate attributeName="y" values="${valuesY.join(";")};${valuesY[0]}" dur="10s" repeatCount="indefinite"/>\n`;

  svg += `</rect>\n`;

  // "Съедение" клеток
  svg += `<animate xlink:href="#snake" attributeName="opacity" values="1;0;1" dur="10s" repeatCount="indefinite"/>\n`;

  svg += `</svg>`;

  return svg;
}

async function main() {
  const grid = await getContributions();
  const svg = generateSVG(grid);
  if (!fs.existsSync("dist")) fs.mkdirSync("dist");
  fs.writeFileSync(OUTPUT_FILE, svg);
  console.log("SVG с анимированной змейкой сгенерирован!");
}

main();
