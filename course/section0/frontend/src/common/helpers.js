import {
  DAY_IN_MILLISEC,
  TAG_SEPARATOR
} from './constants';
import timeStatuses from './enums/timeStatuses';
import taskStatuses from './enums/taskStatuses';

/***
 * Разделение строки с метками по разделителю
 * @param tags{String[]} - строка с метками
 * @returns {String[]} - массив со статусами
 */
export const getTagsArrayFromString = tags => {
  const array = tags.split(TAG_SEPARATOR);
  return array.slice(1, array.length);
};

/***
 * Проверка на дедлайн
 * @param dueDate{String} - срок выполнения задачи
 * @returns {String}
 */
export const getTimeStatus = dueDate => {
  if (!dueDate) {
    return '';
  }
  const currentTime = +new Date();
  const taskTime = Date.parse(dueDate);
  const timeDelta = taskTime - currentTime;
  if (timeDelta > DAY_IN_MILLISEC) {
    return '';
  }
  return timeDelta < 0 ? timeStatuses.DEADLINE : timeStatuses.EXPIRED;
};

/***
 * Функция нормализации задач
 * @param task{Object} - задачи
 * @returns {*&{timeStatus: String, status: String}}
 */
export const normalizeTask = task => {
  return {
    ...task,
    status: task.statusId ? taskStatuses[task.statusId] : '',
    timeStatus: getTimeStatus(task.dueDate)
  };
};
