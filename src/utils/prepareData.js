import _ from 'lodash';

const prepareData = (parameters, categories, hits) => {
  const allHits = Object.values(hits);
  const summuryHits = allHits.reduce((acc, line) => { // Считаем суммарные хиты по всем айдишникам
    Object.entries(line).forEach(([id, count]) => {
      if (!_.has(acc, id)) {
        acc[id] = count;
      } else {
        acc[id] += count;
      }
    })
    return acc;
  }, {});
  
  const rows = Object.values(parameters).map((param) => { // составляем строку для таблицы
    const result = [];
    param["categories"].forEach((el) => {
      const buff = {};
      buff.id = el;
      buff.type = param["name"];
      buff.name = categories[el];
      result.push(buff); // добавили в строку айди тайп и имя
    })
    return result;
  }).flat()
    .map((row) => {
      Object.values(parameters).forEach((param) => {
        if (row.type !== param.name) {
          row[`${param.name}Value`] = null;
        } else {
          row[`${row.type}Value`] = summuryHits[row.id] // теперь добавляем нулл значения
          // для типов параметров к которым строка таблицы не относится
        }
      })
      return row;
    });

    return rows;
}

export default prepareData;