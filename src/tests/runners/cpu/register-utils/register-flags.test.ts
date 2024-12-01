import { expect, describe, it, afterEach } from 'vitest'
import { resetRegisters } from '../../../utils/reset-registers'
import { RegisterId8, registers, registerUtils } from '../../../../cpu/cpu'

describe("CPU Register Utils - Flags", () => {
	afterEach(() => {
		resetRegisters()
	})

	it("Should return C flag correctly when set case 1", () => {
		registers[RegisterId8.F] = 0b1000

		const cFlag = registerUtils.selectCFlag()

		expect(registers[RegisterId8.F]).toBe(0b1000);
		expect(cFlag).toBe(1);
	})

	it("Should return C flag correctly when set case 2", () => {
		registers[RegisterId8.F] = 0b1111

		const cFlag = registerUtils.selectCFlag()

		expect(registers[RegisterId8.F]).toBe(0b1111);
		expect(cFlag).toBe(1);
	})

	it("Should return C flag correctly when no set case 1", () => {
		registers[RegisterId8.F] = 0b0000

		const cFlag = registerUtils.selectCFlag()

		expect(registers[RegisterId8.F]).toBe(0b0000);
		expect(cFlag).toBe(0);
	})

	it("Should return C flag correctly when no set case 2", () => {
		registers[RegisterId8.F] = 0b0111

		const cFlag = registerUtils.selectCFlag()

		expect(registers[RegisterId8.F]).toBe(0b0111);
		expect(cFlag).toBe(0);
	})

	it("Should set C flag correctly case 1", () => {
		registers[RegisterId8.F] = 0b0000

		registerUtils.setCFlag(true)

		const cFlag = registerUtils.selectCFlag()

		expect(registers[RegisterId8.F]).toBe(0b1000);
		expect(cFlag).toBe(1);
	})

	it("Should set C flag correctly case 2", () => {
		registers[RegisterId8.F] = 0b0100

		registerUtils.setCFlag(true)

		const cFlag = registerUtils.selectCFlag()

		expect(registers[RegisterId8.F]).toBe(0b1100);
		expect(cFlag).toBe(1);
	})

	it("Should set C flag correctly case 3", () => {
		registers[RegisterId8.F] = 0b0110

		registerUtils.setCFlag(true)

		const cFlag = registerUtils.selectCFlag()

		expect(registers[RegisterId8.F]).toBe(0b1110);
		expect(cFlag).toBe(1);
	})

	it("Should set C flag correctly case 4", () => {
		registers[RegisterId8.F] = 0b0111

		registerUtils.setCFlag(true)

		const cFlag = registerUtils.selectCFlag()

		expect(registers[RegisterId8.F]).toBe(0b1111);
		expect(cFlag).toBe(1);
	})

	it("Should set C flag correctly case 5", () => {
		registers[RegisterId8.F] = 0b1001

		registerUtils.setCFlag(true)

		const cFlag = registerUtils.selectCFlag()

		expect(registers[RegisterId8.F]).toBe(0b1001);
		expect(cFlag).toBe(1);
	})

	it("Should unset C flag correctly case 1", () => {
		registers[RegisterId8.F] = 0b1000

		registerUtils.setCFlag(false)

		const cFlag = registerUtils.selectCFlag()

		expect(registers[RegisterId8.F]).toBe(0b0000);
		expect(cFlag).toBe(0);
	})

	it("Should unset C flag correctly case 2", () => {
		registers[RegisterId8.F] = 0b1100

		registerUtils.setCFlag(false)

		const cFlag = registerUtils.selectCFlag()

		expect(registers[RegisterId8.F]).toBe(0b0100);
		expect(cFlag).toBe(0);
	})

	it("Should unset C flag correctly case 3", () => {
		registers[RegisterId8.F] = 0b1111

		registerUtils.setCFlag(false)

		const cFlag = registerUtils.selectCFlag()

		expect(registers[RegisterId8.F]).toBe(0b0111);
		expect(cFlag).toBe(0);
	})

	it("Should unset C flag correctly case 4", () => {
		registers[RegisterId8.F] = 0b0111

		registerUtils.setCFlag(false)

		const cFlag = registerUtils.selectCFlag()

		expect(registers[RegisterId8.F]).toBe(0b0111);
		expect(cFlag).toBe(0);
	})

	it("Should unset C flag correctly case 5", () => {
		registers[RegisterId8.F] = 0b0001

		registerUtils.setCFlag(false)

		const cFlag = registerUtils.selectCFlag()

		expect(registers[RegisterId8.F]).toBe(0b0001);
		expect(cFlag).toBe(0);
	})

	it("Should return H flag correctly when set case 1", () => {
		registers[RegisterId8.F] = 0b0100

		const hFlag = registerUtils.selectHFlag()

		expect(registers[RegisterId8.F]).toBe(0b0100);
		expect(hFlag).toBe(1);
	})

	it("Should return H flag correctly when set case 2", () => {
		registers[RegisterId8.F] = 0b1111

		const hFlag = registerUtils.selectHFlag()

		expect(registers[RegisterId8.F]).toBe(0b1111);
		expect(hFlag).toBe(1);
	})

	it("Should return H flag correctly when no set case 1", () => {
		registers[RegisterId8.F] = 0b0000

		const hFlag = registerUtils.selectHFlag()

		expect(registers[RegisterId8.F]).toBe(0b0000);
		expect(hFlag).toBe(0);
	})

	it("Should return H flag correctly when no set case 1", () => {
		registers[RegisterId8.F] = 0b1011

		const hFlag = registerUtils.selectHFlag()

		expect(registers[RegisterId8.F]).toBe(0b1011);
		expect(hFlag).toBe(0);
	})

	it("Should set H flag correctly case 1", () => {
		registers[RegisterId8.F] = 0b0000

		registerUtils.setHFlag(true)

		const hFlag = registerUtils.selectHFlag()

		expect(registers[RegisterId8.F]).toBe(0b0100);
		expect(hFlag).toBe(1);
	})

	it("Should set H flag correctly case 2", () => {
		registers[RegisterId8.F] = 0b1000

		registerUtils.setHFlag(true)

		const hFlag = registerUtils.selectHFlag()

		expect(registers[RegisterId8.F]).toBe(0b1100);
		expect(hFlag).toBe(1);
	})

	it("Should set H flag correctly case 3", () => {
		registers[RegisterId8.F] = 0b1010

		registerUtils.setHFlag(true)

		const hFlag = registerUtils.selectHFlag()

		expect(registers[RegisterId8.F]).toBe(0b1110);
		expect(hFlag).toBe(1);
	})

	it("Should set H flag correctly case 4", () => {
		registers[RegisterId8.F] = 0b1011

		registerUtils.setHFlag(true)

		const hFlag = registerUtils.selectHFlag()

		expect(registers[RegisterId8.F]).toBe(0b1111);
		expect(hFlag).toBe(1);
	})

	it("Should set H flag correctly case 5", () => {
		registers[RegisterId8.F] = 0b1111

		registerUtils.setHFlag(true)

		const hFlag = registerUtils.selectHFlag()

		expect(registers[RegisterId8.F]).toBe(0b1111);
		expect(hFlag).toBe(1);
	})

	it("Should unset H flag correctly case 1", () => {
		registers[RegisterId8.F] = 0b0100

		registerUtils.setHFlag(false)

		const hFlag = registerUtils.selectHFlag()

		expect(registers[RegisterId8.F]).toBe(0b0000);
		expect(hFlag).toBe(0);
	})

	it("Should unset H flag correctly case 2", () => {
		registers[RegisterId8.F] = 0b1100

		registerUtils.setHFlag(false)

		const hFlag = registerUtils.selectHFlag()

		expect(registers[RegisterId8.F]).toBe(0b1000);
		expect(hFlag).toBe(0);
	})

	it("Should unset H flag correctly case 3", () => {
		registers[RegisterId8.F] = 0b1110

		registerUtils.setHFlag(false)

		const hFlag = registerUtils.selectHFlag()

		expect(registers[RegisterId8.F]).toBe(0b1010);
		expect(hFlag).toBe(0);
	})

	it("Should unset H flag correctly case 4", () => {
		registers[RegisterId8.F] = 0b1111

		registerUtils.setHFlag(false)

		const hFlag = registerUtils.selectHFlag()

		expect(registers[RegisterId8.F]).toBe(0b1011);
		expect(hFlag).toBe(0);
	})

	it("Should unset H flag correctly case 5", () => {
		registers[RegisterId8.F] = 0b0000

		registerUtils.setHFlag(false)

		const hFlag = registerUtils.selectHFlag()

		expect(registers[RegisterId8.F]).toBe(0b0000);
		expect(hFlag).toBe(0);
	})

	it("Should return N flag correctly when set case 1", () => {
		registers[RegisterId8.F] = 0b0010

		const nFlag = registerUtils.selectNFlag()

		expect(registers[RegisterId8.F]).toBe(0b0010);
		expect(nFlag).toBe(1);
	})

	it("Should return N flag correctly when set case 2", () => {
		registers[RegisterId8.F] = 0b1111

		const nFlag = registerUtils.selectNFlag()

		expect(registers[RegisterId8.F]).toBe(0b1111);
		expect(nFlag).toBe(1);
	})

	it("Should return N flag correctly when no set case 1", () => {
		registers[RegisterId8.F] = 0b0000

		const nFlag = registerUtils.selectNFlag()

		expect(registers[RegisterId8.F]).toBe(0b0000);
		expect(nFlag).toBe(0);
	})

	it("Should return N flag correctly when no set case 2", () => {
		registers[RegisterId8.F] = 0b1101

		const nFlag = registerUtils.selectNFlag()

		expect(registers[RegisterId8.F]).toBe(0b1101);
		expect(nFlag).toBe(0);
	})

	it("Should set N flag correctly case 1", () => {
		registers[RegisterId8.F] = 0b0000

		registerUtils.setNFlag(true)

		const nFlag = registerUtils.selectNFlag()

		expect(registers[RegisterId8.F]).toBe(0b0010);
		expect(nFlag).toBe(1);
	})

	it("Should set N flag correctly case 2", () => {
		registers[RegisterId8.F] = 0b1000

		registerUtils.setNFlag(true)

		const nFlag = registerUtils.selectNFlag()

		expect(registers[RegisterId8.F]).toBe(0b1010);
		expect(nFlag).toBe(1);
	})

	it("Should set N flag correctly case 3", () => {
		registers[RegisterId8.F] = 0b1100

		registerUtils.setNFlag(true)

		const nFlag = registerUtils.selectNFlag()

		expect(registers[RegisterId8.F]).toBe(0b1110);
		expect(nFlag).toBe(1);
	})

	it("Should set N flag correctly case 4", () => {
		registers[RegisterId8.F] = 0b1110

		registerUtils.setNFlag(true)

		const nFlag = registerUtils.selectNFlag()

		expect(registers[RegisterId8.F]).toBe(0b1110);
		expect(nFlag).toBe(1);
	})

	it("Should set N flag correctly case 5", () => {
		registers[RegisterId8.F] = 0b1111

		registerUtils.setNFlag(true)

		const nFlag = registerUtils.selectNFlag()

		expect(registers[RegisterId8.F]).toBe(0b1111);
		expect(nFlag).toBe(1);
	})

	it("Should unset N flag correctly case 1", () => {
		registers[RegisterId8.F] = 0b0010

		registerUtils.setNFlag(false)

		const nFlag = registerUtils.selectNFlag()

		expect(registers[RegisterId8.F]).toBe(0b0000);
		expect(nFlag).toBe(0);
	})

	it("Should unset N flag correctly case 2", () => {
		registers[RegisterId8.F] = 0b1010

		registerUtils.setNFlag(false)

		const nFlag = registerUtils.selectNFlag()

		expect(registers[RegisterId8.F]).toBe(0b1000);
		expect(nFlag).toBe(0);
	})

	it("Should unset N flag correctly case 3", () => {
		registers[RegisterId8.F] = 0b1110

		registerUtils.setNFlag(false)

		const nFlag = registerUtils.selectNFlag()

		expect(registers[RegisterId8.F]).toBe(0b1100);
		expect(nFlag).toBe(0);
	})

	it("Should unset N flag correctly case 4", () => {
		registers[RegisterId8.F] = 0b1111

		registerUtils.setNFlag(false)

		const nFlag = registerUtils.selectNFlag()

		expect(registers[RegisterId8.F]).toBe(0b1101);
		expect(nFlag).toBe(0);
	})

	it("Should unset N flag correctly case 4", () => {
		registers[RegisterId8.F] = 0b0000

		registerUtils.setNFlag(false)

		const nFlag = registerUtils.selectNFlag()

		expect(registers[RegisterId8.F]).toBe(0b0000);
		expect(nFlag).toBe(0);
	})

	it("Should return Z flag correctly when set case 1", () => {
		registers[RegisterId8.F] = 0b0001

		const zFlag = registerUtils.selectZFlag()

		expect(registers[RegisterId8.F]).toBe(0b0001);
		expect(zFlag).toBe(1);
	})

	it("Should return Z flag correctly when set case 2", () => {
		registers[RegisterId8.F] = 0b1111

		const zFlag = registerUtils.selectZFlag()

		expect(registers[RegisterId8.F]).toBe(0b1111);
		expect(zFlag).toBe(1);
	})

	it("Should return Z flag correctly when no set case 1", () => {
		registers[RegisterId8.F] = 0b0000

		const zFlag = registerUtils.selectZFlag()

		expect(registers[RegisterId8.F]).toBe(0b0000);
		expect(zFlag).toBe(0);
	})

	it("Should return Z flag correctly when no set case 2", () => {
		registers[RegisterId8.F] = 0b1110

		const zFlag = registerUtils.selectZFlag()

		expect(registers[RegisterId8.F]).toBe(0b1110);
		expect(zFlag).toBe(0);
	})

	it("Should set Z flag correctly case 1", () => {
		registers[RegisterId8.F] = 0b0000

		registerUtils.setZFlag(true)

		const zFlag = registerUtils.selectZFlag()

		expect(registers[RegisterId8.F]).toBe(0b0001);
		expect(zFlag).toBe(1);
	})

	it("Should set Z flag correctly case 2", () => {
		registers[RegisterId8.F] = 0b1000

		registerUtils.setZFlag(true)

		const zFlag = registerUtils.selectZFlag()

		expect(registers[RegisterId8.F]).toBe(0b1001);
		expect(zFlag).toBe(1);
	})

	it("Should set Z flag correctly case 3", () => {
		registers[RegisterId8.F] = 0b1100

		registerUtils.setZFlag(true)

		const zFlag = registerUtils.selectZFlag()

		expect(registers[RegisterId8.F]).toBe(0b1101);
		expect(zFlag).toBe(1);
	})

	it("Should set Z flag correctly case 4", () => {
		registers[RegisterId8.F] = 0b1110

		registerUtils.setZFlag(true)

		const zFlag = registerUtils.selectZFlag()

		expect(registers[RegisterId8.F]).toBe(0b1111);
		expect(zFlag).toBe(1);
	})

	it("Should set Z flag correctly case 4", () => {
		registers[RegisterId8.F] = 0b1111

		registerUtils.setZFlag(true)

		const zFlag = registerUtils.selectZFlag()

		expect(registers[RegisterId8.F]).toBe(0b1111);
		expect(zFlag).toBe(1);
	})

	it("Should unset Z flag correctly case 1", () => {
		registers[RegisterId8.F] = 0b0001

		registerUtils.setZFlag(false)

		const zFlag = registerUtils.selectZFlag()

		expect(registers[RegisterId8.F]).toBe(0b0000);
		expect(zFlag).toBe(0);
	})

	it("Should unset Z flag correctly case 2", () => {
		registers[RegisterId8.F] = 0b1001

		registerUtils.setZFlag(false)

		const zFlag = registerUtils.selectZFlag()

		expect(registers[RegisterId8.F]).toBe(0b1000);
		expect(zFlag).toBe(0);
	})

	it("Should unset Z flag correctly case 2", () => {
		registers[RegisterId8.F] = 0b1101

		registerUtils.setZFlag(false)

		const zFlag = registerUtils.selectZFlag()

		expect(registers[RegisterId8.F]).toBe(0b1100);
		expect(zFlag).toBe(0);
	})

	it("Should unset Z flag correctly case 2", () => {
		registers[RegisterId8.F] = 0b1111

		registerUtils.setZFlag(false)

		const zFlag = registerUtils.selectZFlag()

		expect(registers[RegisterId8.F]).toBe(0b1110);
		expect(zFlag).toBe(0);
	})

	it("Should unset Z flag correctly case 2", () => {
		registers[RegisterId8.F] = 0b0000

		registerUtils.setZFlag(false)

		const zFlag = registerUtils.selectZFlag()

		expect(registers[RegisterId8.F]).toBe(0b0000);
		expect(zFlag).toBe(0);
	})
})