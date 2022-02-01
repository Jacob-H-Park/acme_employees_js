const data = [
  {
    Name: "Facebook",
    CEO: "Mark Zuckerberg",
    Revenue: "$85.9 billion in 2020",
    NumberOfEmployees: "68,177 in September 2021",
  },
  {
    Name: "Apple",
    CEO: "Tim Cook",
    Revenue: "$94.7 billion in 2021",
    NumberOfEmployees: "154,000 in 2021",
  },
  {
    Name: "Amazon",
    CEO: "Andy Jassy",
    Revenue: "$458 billion in 2021",
    NumberOfEmployees: "1.5 million in September 2021",
  },
  {
    Name: "Netflix",
    CEO: "Reed Hastings & Ted Sarandos",
    Revenue: "$29.7 billion in 2021",
    NumberOfEmployees: "12,135 in 2021",
  },
  {
    Name: "Google",
    CEO: "Sundar Pichai",
    Revenue: "$64.87 billion Q3 2021",
    NumberOfEmployees: "139,995 in 2021",
  },
];

const list = () => [...data];
const find = (companyName) => {
  const company = data.find((company) => company.Name === companyName);
  return company;
};
module.exports = { list, find };
