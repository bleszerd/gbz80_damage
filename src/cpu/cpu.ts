import { INITIAL_REGISTER_VALUE } from "./data/constants"

export enum RegisterId8 {
	A = "A",
	F = "F",
	B = "B",
	C = "C",
	D = "D",
	E = "E",
	H = "H",
	L = "L",

}

export enum RegisterId16 {
	AF = "AF",
	BC = "BC",
	DE = "DE",
	HL = "HL",
	SP = "SP",
	PC = "PC",
}

let cycle_count = 0;
let pc = 0;

export const registers = {
	[RegisterId8.A]: INITIAL_REGISTER_VALUE,
	[RegisterId8.F]: INITIAL_REGISTER_VALUE,
	[RegisterId8.B]: INITIAL_REGISTER_VALUE,
	[RegisterId8.C]: INITIAL_REGISTER_VALUE,
	[RegisterId8.D]: INITIAL_REGISTER_VALUE,
	[RegisterId8.E]: INITIAL_REGISTER_VALUE,
	[RegisterId8.H]: INITIAL_REGISTER_VALUE,
	[RegisterId8.L]: INITIAL_REGISTER_VALUE,
	[RegisterId16.SP]: INITIAL_REGISTER_VALUE,
	[RegisterId16.PC]: INITIAL_REGISTER_VALUE,
}

export const registerUtils = {
	selectCFlag: () => (registers[RegisterId8.F] & 0b1000) >> 3,
	selectHFlag: () => (registers[RegisterId8.F] & 0b0100) >> 2,
	selectNFlag: () => (registers[RegisterId8.F] & 0b0010) >> 1,
	selectZFlag: () => (registers[RegisterId8.F] & 0b0001),

	setCFlag: (set: boolean) => {
		if (set) return registers[RegisterId8.F] = registers[RegisterId8.F] | 0b1000
		registers[RegisterId8.F] = registers[RegisterId8.F] & 0b0111
	},
	setHFlag: (set: boolean) => {
		if (set) return registers[RegisterId8.F] = registers[RegisterId8.F] | 0b0100
		registers[RegisterId8.F] = registers[RegisterId8.F] & 0b1011
	},
	setNFlag: (set: boolean) => {
		if (set) return registers[RegisterId8.F] = registers[RegisterId8.F] | 0b0010
		registers[RegisterId8.F] = registers[RegisterId8.F] & 0b1101
	},
	setZFlag: (set: boolean) => {
		if (set) return registers[RegisterId8.F] = registers[RegisterId8.F] | 0b0001
		registers[RegisterId8.F] = registers[RegisterId8.F] & 0b1110
	},

	selectRegister16Split: (r16: RegisterId16) => {
		const hReg = r16[0] as RegisterId8
		const lReg = r16[1] as RegisterId8

		return [registers[hReg], registers[lReg]];
	},
	selectRegister16: (r16: RegisterId16) => {
		if (r16 === RegisterId16.SP || r16 === RegisterId16.PC) {
			return registers[r16]
		}

		const hReg = r16[0] as RegisterId8
		const lReg = r16[1] as RegisterId8

		return (registers[hReg] << 8) | (registers[lReg]);
	},

	setRegister16: (r16: RegisterId16, value: number) => {
		if (r16 === RegisterId16.SP || r16 === RegisterId16.PC) {
			registers[r16] = value
		}

		const hReg = r16[0] as RegisterId8
		const lReg = r16[1] as RegisterId8

		registers[hReg] = (value >> 8) & 0xff
		registers[lReg] = value & 0xff
	},
}

export const genericOpcodes = {
	ADC: (r8: RegisterId8, value: number) => {
		const registerValue = registers[r8]
		const result = value + registerUtils.selectCFlag() + registerValue;

		const setHFlag = (((registerValue & 0xf) + (value & 0xf) + registerUtils.selectCFlag()) > 0xf)
		const setCFlag = result > 0xff

		registerUtils.setZFlag(result === 0);
		registerUtils.setNFlag(false);
		registerUtils.setHFlag(setHFlag);
		registerUtils.setCFlag(setCFlag)

		registers[r8] = result
	},
	ADD_8: (r8: RegisterId8, value: number) => {
		const registerValue = registers[r8]
		const result = registerValue + value;

		const setHFlag = (((registerValue & 0xf) + (value & 0xf)) > 0xf)
		const setCFlag = result > 0xff

		registerUtils.setZFlag(result === 0);
		registerUtils.setNFlag(false);
		registerUtils.setHFlag(setHFlag);
		registerUtils.setCFlag(setCFlag)

		registers[r8] = result;
	},
	ADD_16: (r16: RegisterId16, value: number) => {
		registerUtils.setRegister16(r16, value)
	}
}

export const opcodes = {
	ADC_A_R8: (r8: RegisterId8) => {
		genericOpcodes.ADC(RegisterId8.A, registers[r8]);

		cycle_count += 1;
		pc += 1;
	},
	ADC_A_HL: () => {
		genericOpcodes.ADC(RegisterId8.A, registerUtils.selectRegister16(RegisterId16.HL));

		cycle_count += 2;
		pc += 1;
	},
	ADC_A_N8: (n8: number) => {
		genericOpcodes.ADC(RegisterId8.A, n8);

		cycle_count += 2;
		pc += 2;
	},
	ADD_A_R8: (r8: RegisterId8) => {
		genericOpcodes.ADD_8(RegisterId8.A, registers[r8]);

		cycle_count += 1;
		pc += 1;
	},
	ADD_A_HL: () => {
		genericOpcodes.ADD_8(RegisterId8.A, registerUtils.selectRegister16(RegisterId16.HL));

		cycle_count += 2;
		pc += 1;
	},
	ADD_A_N8: (n8: number) => {
		genericOpcodes.ADD_8(RegisterId8.A, n8);

		cycle_count += 2;
		pc += 2;
	},
	ADD_HL_R16: (r16: number) => {
		genericOpcodes.ADD_16(RegisterId16.HL, r16);

		cycle_count += 2;
		pc += 1;
	},
	ADD_HL_SP: () => {
		genericOpcodes.ADD_16(RegisterId16.HL, registers[RegisterId16.SP]);

		cycle_count += 2;
		pc += 1;
	},
	ADD_SP_E8: (e8: number) => {
		genericOpcodes.ADD_16(RegisterId16.SP, e8);

		cycle_count += 4;
		pc += 2;
	},
}