"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SignUpUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String, minLength: 8 }, mobile: { required: true, type: () => String }, country: { required: true, type: () => String }, birthdate: { required: true, type: () => Date }, picture: { required: true, type: () => Object } };
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], SignUpUserDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], SignUpUserDto.prototype, "email", void 0);
__decorate([
    class_validator_1.MinLength(8),
    __metadata("design:type", String)
], SignUpUserDto.prototype, "password", void 0);
__decorate([
    class_validator_1.IsNumberString(),
    class_validator_1.Length(10, 12),
    __metadata("design:type", String)
], SignUpUserDto.prototype, "mobile", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false }),
    __metadata("design:type", String)
], SignUpUserDto.prototype, "country", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false }),
    __metadata("design:type", Date)
], SignUpUserDto.prototype, "birthdate", void 0);
__decorate([
    swagger_1.ApiProperty({ required: false, type: 'string', format: 'binary' }),
    __metadata("design:type", Object)
], SignUpUserDto.prototype, "picture", void 0);
exports.SignUpUserDto = SignUpUserDto;
//# sourceMappingURL=signup-user.dto.js.map