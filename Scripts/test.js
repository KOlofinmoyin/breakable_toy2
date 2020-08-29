
test("A Hello World Test",1, function(){
  equal(greeting, "Hello World", "Expect greeting of Hello World")
});

test("Array of fruits",1,function(){
  equal(arrayOfFruits,"Apple, Orange, Grapes, Strawberries", "Contains an array of fruits");
});
