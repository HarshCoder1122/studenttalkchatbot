import { College } from '../types';

export const colleges: College[] = [
  {
    name: "National Institute of Technology (NIT) Srinagar",
    location: "Srinagar, J&K",
    type: "Engineering",
    courses: ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical"],
    eligibility: "JEE Main rank required, 12th with PCM, minimum 75% marks",
    website: "https://nitsri.ac.in"
  },
  {
    name: "University of Kashmir",
    location: "Srinagar, J&K",
    type: "University",
    courses: ["Arts", "Science", "Commerce", "Law", "Medicine", "Engineering"],
    eligibility: "12th pass from recognized board, entrance test for some courses",
    website: "https://kashmiruniversity.ac.in"
  },
  {
    name: "University of Jammu",
    location: "Jammu, J&K",
    type: "University",
    courses: ["Arts", "Science", "Commerce", "Law", "Management", "Education"],
    eligibility: "12th pass from recognized board, merit-based admission",
    website: "https://jammuuniversity.ac.in"
  },
  {
    name: "Sher-e-Kashmir University of Agricultural Sciences",
    location: "Srinagar, J&K",
    type: "Agricultural",
    courses: ["Agriculture", "Horticulture", "Veterinary Science", "Forestry"],
    eligibility: "12th with PCB/PCM, entrance examination required"
  },
  {
    name: "Islamic University of Science & Technology",
    location: "Awantipora, J&K",
    type: "University",
    courses: ["Engineering", "Management", "Computer Applications", "Pharmacy"],
    eligibility: "JEE Main/State entrance, 12th pass with relevant subjects"
  },
  {
    name: "Government Medical College Srinagar",
    location: "Srinagar, J&K",
    type: "Medical",
    courses: ["MBBS", "BDS", "Nursing", "Paramedical"],
    eligibility: "NEET qualification mandatory, 12th with PCB"
  },
  {
    name: "Government Medical College Jammu",
    location: "Jammu, J&K",
    type: "Medical",
    courses: ["MBBS", "BDS", "Nursing"],
    eligibility: "NEET qualification mandatory, 12th with PCB"
  },
  {
    name: "Central University of Kashmir",
    location: "Ganderbal, J&K",
    type: "Central University",
    courses: ["Liberal Arts", "Sciences", "Social Sciences", "Management"],
    eligibility: "12th pass, entrance test for UG programs"
  }
];