const rocks = [
    { name: "Led Zeppelin", age: 50},
    { name: "Dwayne Johnson", age: 47},
    { name: "Neptune", age: 100_000_000 }
]

const rocksAgedOneYear = rocks.map(rock => ({...rock, age: rock.age+1 }));

console.log(rocksAgedOneYear);

const evenAgedRocks = rocks.filter(rock => rock.age % 2 === 0)

console.log(evenAgedRocks);

({ ...rocks[0] })

//our loop toolsbox
// .map() .filter() .find() .reduce() .sort() .forEach()