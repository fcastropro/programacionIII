var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this.nombre = nombre;
    }
    Animal.prototype.emitirSonido = function () {
        console.log("sonido del animal");
    };
    return Animal;
}());
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.emitirSonido = function () {
        console.log("Miau");
    };
    return Gato;
}(Animal));
var Vaca = /** @class */ (function (_super) {
    __extends(Vaca, _super);
    function Vaca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vaca.prototype.emitirSonido = function () {
        console.log("muuu");
    };
    return Vaca;
}(Animal));
var miGato = new Gato("Hello Kitty");
miGato.emitirSonido();
var miVaca = new Vaca("Lechera");
miVaca.emitirSonido();
