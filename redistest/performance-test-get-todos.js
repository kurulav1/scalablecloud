import http from "k6/http";

export const options = {
  duration: "5s",
  vus: 10,
  summaryTrendStats: ["avg", "p(99)", "p(50)"],
};

export default function () {
  http.get("http://localhost:7800/todos");
  
}