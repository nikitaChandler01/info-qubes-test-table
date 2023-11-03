import React from 'react';
import './styles/App.css'
import Row from './components/Row.js';
import _ from 'lodash';

function App() {
  const parameters = {
    script: { name: "script", id: 1, categories: [23, 45, 89] },
    restictions: { name: "restictions", id: 2, categories: [56, 78, 8] },
    courtesy: { name: "courtesy", id: 3, categories: [10, 11, 47] }
  };

  const categoriesMap = Object.values(parameters).reduce((acc, param) => {
    const newAcc = [...acc, ...param["categories"]];
    return newAcc;
  }, []);

  const categories = {
    23: "Приветствие",
    45: "Прощание",
    89: "Эмпатия",
    56: "Вежливость",
    78: "Общая полнота",
    8: "Презентация",
    10: "Понимание и сочувствие",
    11: "Профессионализм",
    47: "Уверенность"
  };

  const hits = {
    line1: { 23: 2, 45: 3, 8: 4, 11: 46 },
    line2: { 23: 14, 45: 44, 89: 2, 10: 10 },
    line3: { 23: 4, 45: 6 },
    line4: { 23: 11, 89: 9, 45: 56 },
    line5: { 8: 19, 56: 4, 11: 78 },
    line6: { 78: 4, 56: 2, 47: 56 }
  };

  const allHits = Object.values(hits);
  const summuryHits = allHits.reduce((acc, line) => {
    Object.entries(line).forEach(([id, count]) => {
      if (!_.has(acc, id)) {
        acc[id] = count;
      } else {
        acc[id] += count;
      }
    })
    return acc;
  }, {});

  return (
    <div>
      <table>
        <tr>
          <td className="titles"></td>
          <td className="titles">Script</td>
          <td className="titles">Restrictions</td>
          <td className="titles">Courtesy</td>
        </tr>
        {categoriesMap.map((id, index) => {
          const name = categories[id]
          return <Row key={index} id={id} nameOfCategory={name} hitCount={summuryHits[id]} />
        })}
      </table>
    </div>
  );
}

export default App;