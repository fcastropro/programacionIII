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
var Trabajador = /** @class */ (function () {
    function Trabajador(nombre) {
        this.nombre = nombre;
    }
    Trabajador.prototype.saludoTrabajador = function () {
        console.log("Hola ".concat(this.nombre));
    };
    return Trabajador;
}());
var Obrero = /** @class */ (function (_super) {
    __extends(Obrero, _super);
    function Obrero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Obrero.prototype.calculoSueldo = function (salarioDiario) {
        console.log(" Porcentaje hora extra: ", salarioDiario * 0.05);
    };
    return Obrero;
}(Trabajador));
var Medico = /** @class */ (function (_super) {
    __extends(Medico, _super);
    function Medico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Medico.prototype.calculoSueldo = function (salarioDiario) {
        console.log(" Porcentaje hora extra: ", salarioDiario * 0.1);
    };
    return Medico;
}(Trabajador));
var elMedico = new Medico("Dr. Chapatin");
elMedico.calculoSueldo(15);
var carpintero = new Obrero("Pinocho");
carpintero.calculoSueldo(10);
