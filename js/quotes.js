const quotes = [
  {
    quote:
      "노력에 대해서 거꾸로 생각하자. 노력할 때 힘들다고 하지 말고 '힘든 만큼이 노력이다'라고 생각하자",
    author: "아무개",
  },
  {
    quote:
      "자유만큼의 책임이 항상 따르는 만큼 스스로 모든 것을 개척해 나가야 한다는 부담감도 있었지만 나름 행복한 시간이었습니다",
    author: "카이스트 교수",
  },
  {
    quote:
      "시작점이 어떻든, 겸손하게 계속 배우려 한다면 결국 발전하게 되어있습니다.",
    author: "아무개",
  },
  {
    quote: "고도 기술 문명을 누리고 싶다면, 자신의 엔트로피를 낮춰라.",
    author: "뇌 과학교수",
  },
  {
    quote:
      "가치를 만들기 위한 사소하지만 용감한 선택들은 하루의 차이를 만들고, 인생의 차이를 만든다.",
    author: "아무개",
  },
  {
    quote:
      "우리는 자연적이고 본성적인 과정들에서 부수적으로 생겨나는 것등레도 아름답고 매력적인 면이 있다는 것을 유의해야 한다.",
    author: "마르쿠스 아우렐리우스",
  },
  {
    quote: "작은 일에 거창한 말을 사용하는 습관은 피해라.",
    author: "사무엘 존슨",
  },
  {
    quote: "젊음은 알지 못한 것을 탄식하고 나이는 하지 못한 것을 탄식한다.",
    author: "앙리 에스티엔",
  },
  {
    quote: "인격은 그 사람의 운명이다.",
    author: "헤라클레이토스",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
