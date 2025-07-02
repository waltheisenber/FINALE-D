const scrollText = document.getElementById("scrollText");

const message = `
Hey Rochelle,

Siguro nakita mo na 'tong message at na-click mo — salamat kasi binigyan mo ng oras.

Matagal ko na talaga gustong sabihin 'to. Hindi madali, pero mas mahirap kung hindi ko sasabihin ngayon. Ayokong pagsisihan.

Pwede ba kitang ligawan?

Pangako, irerespeto kita, aalagaan, at susuportahan — lalo na sa mga panahon na mabigat ang lahat. Hindi lang ito salita; gusto kong ipakita sa’yo na seryoso ako.

At kung sakaling may chance — kahit sobrang liit — nandito lang ako.  
Kahit ang sagot mo ngayon ay “hindi pa,” okay lang. Hindi ako aalis.

Maghihintay ako.  
Maghihintay ako hanggang sa dumating yung panahon na bigla ka na lang magkaroon ng feelings para sa’kin. Kahit hindi mo agad napansin.

Alam kong hindi agad dumarating ang totoong nararamdaman. Minsan dahan-dahan, tahimik, pero totoo.

Hindi kita minamadali. Gusto ko lang malaman mong totoo ako — at sincere lahat ng ito.

— Nathaniel
`;

function startScroll() {
  scrollText.innerText = message;
  scrollText.style.animation = "scrollUp 20s linear forwards";
}
