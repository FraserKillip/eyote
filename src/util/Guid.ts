export class Guid {
    private static validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");

    static EMPTY = "00000000-0000-0000-0000-000000000000";

    static isGuid(value) {
        return value && (value instanceof Guid || this.validator.test(value.toString()));
    };

    static create() {
        return new Guid(Guid.raw());
    };

    static raw() {
        return [this.gen(2), this.gen(1), this.gen(1), this.gen(1), this.gen(3)].join("-");
    };

    private static gen(count) {
        var out = "";
        for (var i=0; i<count; i++) {
            out += (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        }
        return out;
    }

    private constructor(public value: string) {}

    equals(other) {
        // Comparing string `value` against provided `guid` will auto-call
        // toString on `guid` for comparison
        return Guid.isGuid(other) && this.value == other;
    };

    isEmpty() {
        return this.value === Guid.EMPTY;
    };

    toString() {
        return this.value;
    };

    toJSON() {
        return this.value;
    };
};
