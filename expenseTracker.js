// let table = document.getElementById("enterData");
let balanceHead = document.querySelector("span");
let table = document.querySelector("table");
let btn = document.getElementById("btn");
let input_name = document.querySelector(".name");
let amount = document.querySelector(".number");
let optionValue = document.querySelector("select");
let optionIncomeBtn = document.querySelector("select")[2];
let totalIncome = document.querySelector("#total_income");
let total_expenses = document.querySelector("#total_expenses");
let counter = 0;
let balence;
let tr;

btn.addEventListener("click", function (e) {
  e.stopPropagation();
  if (
    optionValue.value == "income" &&
    optionValue.value !== "expecense" &&
    optionValue.value !== "selt"
  ) {
    if (amount.value >= 1) {
      counter++;
      console.log(counter, "first counter");
      alert("you income is recieved");

      optionIncomeBtn.setAttribute("disabled", "true");
      console.log("hello");
      // balanceHead.textContent = Number(amount.value);//! work pending
      totalIncome.textContent = Number(amount.value);
      totalIncome.classList.add("incomeClass");
      balanceHead.innerText = Number(amount.value);
      tr = document.createElement("tr");
      let img1 = document.createElement("img");
      let img2 = document.createElement("img");
      img1.setAttribute(
        "src",
        "/github_projects/projects images/arrow-down.png"
      );
      img2.setAttribute("src", "/github_projects/projects images/x-button.png");
      img1.setAttribute("alt", " ");
      img1.setAttribute("class", "img-type-arrow");
      img2.setAttribute("alt", " ");
      img2.setAttribute("class", "img-delete-arrow");
      table.appendChild(tr);
      tr.innerHTML = `<tr><td style="border:1px solid;">${counter}</td> <td>${input_name.value}</td> <td>${amount.value}</td> <td></td> </tr> `;
      tr.appendChild(img1);
      tr.appendChild(img2);
      console.log(typeof tr);
      localStorage.setItem("data", JSON.stringify("tr"));

      img2.addEventListener("click", function () {
        tr.remove();
      });
    } else {
      alert("enter amounts");
    }
  } else if (counter >= 1) {
    if (amount.value >= 1) {
      console.log("next");
      counter++;
      console.log(counter, "second counter");
      total_expenses.textContent = amount.value;
      total_expenses.classList.add("expenseClass");
      let inc = parseInt(balanceHead.textContent);
      let exp = parseInt(total_expenses.textContent);
      balanceHead.innerText = inc - exp;

      if (balanceHead.innerText < "0") {
        alert("amount is 0");
        balanceHead.innerText = inc;
        tr.innerHTML = "";
      }

      let tr = document.createElement("tr");
      table.appendChild(tr);
      let img1 = document.createElement("img");
      let img2 = document.createElement("img");
      img1.setAttribute(
        "src",
        "/github_projects/projects images/down-arrows.png"
      );
      img2.setAttribute("src", "/github_projects/projects images/x-button.png");
      img1.setAttribute("alt", " ");
      img1.setAttribute("class", "img-type-arrow");
      img2.setAttribute("alt", " ");
      img2.setAttribute("class", "img-delete-arrow");
      tr.innerHTML = `<tr id="on"><td style="border:1px solid;">${counter}</td> <td>${input_name.value}</td> <td>${amount.value}</td> <td></td> <td></td> </tr> `;
      tr.appendChild(img1);
      tr.appendChild(img2);
      img2.addEventListener("click", function () {
        tr.remove();
        let deleteMoneyReturn =
          parseInt(balanceHead.textContent) +
          parseInt(total_expenses.textContent);
        balanceHead.textContent = deleteMoneyReturn;
        console.log(deleteMoneyReturn);
        total_expenses.textContent = "";
        // balanceHead.textContent =
        //   balanceHead.textContent + Number(total_expenses.textContent);
        console.log(balanceHead.textContent);
      });
      let img = document.querySelectorAll(".imgAll");

      // remo(img, tr);
    } else {
      alert("enter amounts");
    }
  } else {
    alert("please enter income");
  }
  input_name.value = "";
  amount.value = "";
});

// function remo(img, tr) {
//   img.addEventListener("click", function () {
//     console.log(tr);

//     // console.log(img);
//   });
// }

// function created() {
//   let img = document.createElement("img");
//   img.setAttribute("src", "/github_projects/projects images/arrow-down.png");
//   img.setAttribute("alt", " ");
//   img.setAttribute("class", "img-down-arrow");
//   counter++;
//   let data = [counter, input_name.value, amount.value, img];
//   let tr = document.createElement("tr");
//   data.forEach((e, i) => {
//     let td = document.createElement("td");
//     let text = document.createTextNode(data[i]);
//     console.log(data[i]);
//     td.append(text);
//     td.appendChild(img);
//     table.appendChild(td);
//     input_name.value = "";
//     amount.value = "";
//   });
// }

// btn.addEventListener("click", created);
// created();
// {
//   /* <img src="/github_projects/projects images/arrow-down.png" style="width: 16px; height: 15px; margin-left:5px" alt=""></td> <td><img src="/github_projects/projects images/x-button.png" style="width: 16px; height: 15px; margin-left:5px" alt=""></img> */
// }
