let arr = [];

for (let i = 0; i < Infinity; i++) {
    var command = prompt("Введите команду");
    var arrays = command.split(" ");

    var index = arrays[0];
    var name = arrays[1];

    if (index == "add") {
        arr.push(name);

        var res = arr.join(" ");

        console.log(res);
    } else if (index === "delete" || index === "del") {
        console.log(name)

        const num = arr.indexOf(name)

        if (num !== -1) {
            arr.splice(num, 1);
        } else {
            console.log("Value not present in list")
        }

        var str = arr.join(' ');
        console.log(str);
    }
    if (index === "stop") {
        break;
    }
}
console.log(arr);