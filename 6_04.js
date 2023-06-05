let main_category = ['WOMAN','MEN','KIDS','BABY'];

main_category.forEach(function(e){
  console.log(e);
});

//一緒
let main_category2 = ['WOMAN','MEN','KIDS','BABY'];

main_category.forEach(
  // アロー関数
  (e) => {
    console.log(e);
  }
);


let a = Array.from({length: 100}, (_, i) => i + 1);

let b3 = a.filter(e => e % 3 === 0);

let b5 = a.filter(e => e % 5 === 0);

console.log(b3);
console.log(b5);