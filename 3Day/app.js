// local reviews data
const reviews = [
    {
        id: 1,
        name: "견봉사",
        job: "web developer",
        img:
            "https://i.pinimg.com/474x/ea/da/15/eada152dc593b90ef47800c45753a997.jpg",
        text:
            "나는 매우 귀엽고 깜찍하고 많은 사랑을 듬뿍 받고있는 견봉사라고해:) 나를 선택한다면 후회하지 않는 선택일꺼야🐶",
    },
    {
        id: 2,
        name: "묘지션",
        job: "web designer",
        img:
            "https://i.pinimg.com/474x/c5/37/dd/c537dd4fe8e6329c9a524af0fc2899a2.jpg",
        text:
            "나는 매우 시크하고 매력적이고 인기많고 음악을 사랑하는 묘지션이라고해:) 나를 선택한다면 후회하지 않을꺼야😼",
    },
    {
        id: 3,
        name: "견머니",
        job: "intern",
        img:
            "https://i.pinimg.com/474x/53/3a/d1/533ad1d96baac9051f724ec65a08138e.jpg",
        text:
            "나는 매우 책임감이 강하고 사람들과 소통을 잘하는 견머니라고해:) 나를 선택한다면 후회할수 없을꺼야🐕",
    },
    {
        id: 4,
        name: "견뚱이",
        job: "the boss",
        img:
            "https://i.pinimg.com/474x/fe/54/6c/fe546c8f0cd629bea103581fd8c0807b.jpg",
        text:
            "나는 먹고 놀고 잠자고 돈이 제일 좋은 견뚱이라고해:) 나를 선택한다면 많은 돈을 벌 수 있을꺼야🐽",
    }
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
    console.log("hello");

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
