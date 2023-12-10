export const monthsArray = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];



export const amounts = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];

export const holdingNumbers = ["HN001", "HN002", "HN003", "HN004"];


const getTaxSubmissionDate = () => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const date =  new Date().toLocaleDateString(undefined, options);
  return date
};

export default getTaxSubmissionDate;

