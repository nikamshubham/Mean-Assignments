class main {
    static sell() {
        console.log("Inside static function sell");
    }
    buy = () => {
        console.log("inside arrow function");
    }
    name() {
        console.log("inside named function");
    }
}

main.sell();
var m = new main();
m.buy();
m.name();