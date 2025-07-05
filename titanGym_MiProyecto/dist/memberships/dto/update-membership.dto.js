"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMembershipDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_membership_dto_1 = require("./create-membership.dto");
class UpdateMembershipDto extends (0, mapped_types_1.PartialType)(create_membership_dto_1.CreateMembershipDto) {
}
exports.UpdateMembershipDto = UpdateMembershipDto;
//# sourceMappingURL=update-membership.dto.js.map