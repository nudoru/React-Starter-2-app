var _currentText      = [],
    _textSets         = [],
    _maleFirstNames   = [],
    _femaleFirstNames = [],
    _lastNames        = [],
    _punctuation      = [],
    _months,
    _days,
    _toolbox          = require('./Toolbox');

_textSets = [
  'Perhaps a re-engineering of your current world view will re-energize your online nomenclature to enable a new holistic interactive enterprise internet communication solution Upscaling the resurgent networking exchange solutions, achieving a breakaway systemic electronic data interchange system synchronization, thereby exploiting technical environments for mission critical broad based capacity constrained systems Fundamentally transforming well designed actionable information whose semantic content is virtually null To more fully clarify the current exchange, a few aggregate issues will require addressing to facilitate this distributed communication venue In integrating non-aligned structures into existing legacy systems, a holistic gateway blueprint is a backward compatible packaging tangible'
];

_lastNames = 'Smith Johnson Williams Jones Brown Davis Miller Wilson Moore Taylor Anderson Thomas Jackson White Harris Martin Thompson Garcia Martinez Robinson Clark Rodriguez Lewis Lee Walker Hall Allen Young Hernandez King Wright Lopez Hill Scott Green Adams Baker Gonzalez Nelson Carter Mitchell Perez Roberts Turner Phillips Campbell Parker Evans Edwards Collins Stewart Sanchez Morris Rogers Reed Cook Morgan Bell Murphy'.split(' ');

_maleFirstNames = 'Thomas Arthur Lewis Clarence Leonard Albert Paul Carl Ralph Roy Earl Samuel Howard Richard Francis Laurence Herbert Elmer Ernest Theodore David Alfred Donald Russell Eugene Andrew Kenneth Herman Jesse Lester Floyd Michael Edwin Clifford Benjamin Clyde Glen Oscar Daniel'.split(' ');

_femaleFirstNames = 'Elizabeth Ann Helen Margaret Ellen Catherine Lily Florence Ada Lou Ethel Emily Ruth Rose Frances Alice Bertha Clara Mabel Minnie Grace Jane Evelyn Gertrude Edna Pearl Laura Hazel Edith Esther Harriet Sarah May Matilda Martha Myrtle Josephine Maud Agnes Keri Julia Irene Mildred Cora'.split(' ');

_punctuation = ['.', '.', '.', '.', '?', '!'];

_months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

_currentText = _textSets[0].toLowerCase().split(' ');

function sentence (min, max) {
  return _toolbox.capitalizeFirstLetterStr(text(min, max)) + getRandomItem(_punctuation);
}

function title (min, max) {
  return _toolbox.toTitleCaseStr(text(min, max));
}

function paragraph (min, max) {
  var str   = '',
      delim = ' ',
      len   = _toolbox.rndNumber(min, max),
      i     = 0;

  for (; i < len; i++) {
    if (i === len - 1) {
      delim = '';
    }
    str += sentence(1, 10) + delim;
  }

  return str;
}

function text (min, max) {
  var str   = '',
      delim = ' ',
      len   = _toolbox.rndNumber(min, max),
      i     = 0;

  for (; i < len; i++) {
    if (i === len - 1) {
      delim = '';
    }
    str += getRandomItem(_currentText) + delim;
  }

  return str;
}

function getRandomItem (arry) {
  return arry[_toolbox.rndNumber(0, arry.length - 1)];
}

function getFirstName () {
  return _toolbox.rndNumber(0, 1) ? getRandomItem(_maleFirstNames) : getRandomItem(_femaleFirstNames);
}

function getLastName () {
  return getRandomItem(_lastNames);
}

function flName () {
  return getFirstName() + ' ' + getLastName();
}

function lfName () {
  return getLastName() + ', ' + getFirstName();
}

/**
 * Better implementation http://stackoverflow.com/questions/9035627/elegant-method-to-generate-array-of-random-dates-within-two-dates
 * @returns {{monthNumber: *, monthName: *, monthDay, weekDayNumber: *, weekDay: *, year}}
 */
function date () {
  var month = _toolbox.rndNumber(0, 11),
      wkday = _toolbox.rndNumber(0, 4),
      date  = {
        monthNumber  : month + 1,
        monthName    : _months[month],
        monthDay     : _toolbox.rndNumber(1, 28),
        weekDayNumber: wkday + 1,
        weekDay      : _days[wkday],
        year         : _toolbox.rndElement(['2017'])
      };

  date.string = date.monthName + ' ' + date.monthDay + ', ' + date.year;

  return date;
}

/**
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 * @returns {string}
 */
function guid () {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

module.exports = {
  text,
  sentence,
  title,
  paragraph,
  flName,
  lfName,
  date,
  guid
};
