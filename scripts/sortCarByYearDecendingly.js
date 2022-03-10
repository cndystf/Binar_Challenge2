function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  let x
  let y
  for (x=0;x<cars.length;x++) { 
    for (y=0;y<cars.length-x-1;y++) { 
      if (result[y].year < result[y+1].year) {
        let temp = result[y]
        result[y] = result [y+1]
        result[y+1] = temp
      }
  }
}

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
