// Написати примітивну лотерею. Вивести на екран квадратики з числовими індексами,
// де користувач повинен вгадати виграшний варіант. В нього три спроби. Якщо вгадує, вибиває
// alert-повідомлення про успішний вибір. Якщо ж ні, alert пропонує продовжити спроби. Всього їх три.

class ObjLoterry {
      constructor(isWinningTicket, isLooseTicket, background, number) {
      this.isWinningTicket = isWinningTicket; 
      this.isLooseTicket = isLooseTicket; 
      this.background = background; 
      this.number = number; 
      }
}

let totalAttempts = 0;
function lottery (lotteryData) {
  const lotteryContainer = document.querySelector(".charts-container");
  // created elements
  const LotteryButton = document.createElement("div");
  const numberIndex = document.createElement("p");
  // gived classes
  LotteryButton.classList.add("lottery-button");
  numberIndex.classList.add('number-index');
  // gived styles
  LotteryButton.style.background = lotteryData.background;
  LotteryButton.style.cursor = 'pointer';
  // processing
  numberIndex.innerHTML = lotteryData.number;
  lotteryContainer.appendChild(LotteryButton);
  LotteryButton.appendChild(numberIndex);
  LotteryButton.addEventListener('click', () => {
    totalAttempts++;
    console.log(totalAttempts);
    if (totalAttempts >=3) {
      alert('You do not have some tries')
      const body = document.querySelector(".body")
      body.style.display = 'none';
    } else {
      if (lotteryData.isLooseTicket) {
        alert('You have lost!')
      } else {
        alert('You won it!');
        alert('GIVE ME MY MONEY!');
      }
    }
    });
}
lottery(new ObjLoterry(false, true, 'yellow', 153));
lottery(new ObjLoterry(false, true, 'white', 512));
lottery(new ObjLoterry(false, true, 'pink', 431));
lottery(new ObjLoterry(false, true, 'black', 897));
lottery(new ObjLoterry(false, true, 'green', 453));
lottery(new ObjLoterry(true, false, 'orange', 312));
lottery(new ObjLoterry(false, true, 'blue', 652));
lottery(new ObjLoterry(false, true, 'brown', 795));
lottery(new ObjLoterry(false, true, 'gray', 486));
lottery(new ObjLoterry(false, true, 'purple', 351));