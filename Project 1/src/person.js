class Person {
    constructor() {
        console.log("I am a constructor");
    }

    getPersonAddress() {
        return "Mumbai";
    }

    getPersonName() {
        return "Shubham";
    }

    getPersonDetails() {
        const addr = this.getPersonAddress();
        const name = this.getPersonName();
        return name + " " + addr;
    }

    static main() {
        let obj = new Person();
        const details = obj.getPersonDetails();
        console.log(details);
    }
}

Person.main();