import { afterEach, describe, expect, it } from "vitest";
import { resetRegisters } from "../../../utils/reset-registers";
import { RegisterId16, RegisterId8, registers, registerUtils } from "../../../../cpu/cpu";

describe("CPU Register Utils - Selectors", () => {
  afterEach(() => {
    resetRegisters()
  })

  it("Should select AF correctly", () => {
    registers[RegisterId8.A] = 0b11111111;
    registers[RegisterId8.F] = 0b11111111;

    const AFRegisterValue = registerUtils.selectRegister16(RegisterId16.AF)
    const AFRegisterValueSplit = registerUtils.selectRegister16Split(RegisterId16.AF)

    expect(AFRegisterValue).toBe(0b1111111111111111)
    expect(AFRegisterValueSplit).toMatchObject([0b11111111, 0b11111111])
  })

  it("Should select BC correctly", () => {
    registers[RegisterId8.B] = 0b00010011;
    registers[RegisterId8.C] = 0b11001101;

    const BCRegisterValue = registerUtils.selectRegister16(RegisterId16.BC)
    const BCRegisterValueSplit = registerUtils.selectRegister16Split(RegisterId16.BC)

    expect(BCRegisterValue).toBe(0b0001001111001101)
    expect(BCRegisterValueSplit).toMatchObject([0b00010011, 0b11001101])
  })

  it("Should select DE correctly", () => {
    registers[RegisterId8.D] = 0b01111010;
    registers[RegisterId8.E] = 0b11100000;

    const DERegisterValue = registerUtils.selectRegister16(RegisterId16.DE)
    const DERegisterValueSplit = registerUtils.selectRegister16Split(RegisterId16.DE)

    expect(DERegisterValue).toBe(0b0111101011100000)
    expect(DERegisterValueSplit).toMatchObject([0b01111010, 0b11100000])
  })

  it("Should select HL correctly", () => {
    registers[RegisterId8.H] = 0b11110000;
    registers[RegisterId8.L] = 0b11110010;

    const HLRegisterValue = registerUtils.selectRegister16(RegisterId16.HL)
    const HLRegisterValueSplit = registerUtils.selectRegister16Split(RegisterId16.HL)

    expect(HLRegisterValue).toBe(0b1111000011110010)
    expect(HLRegisterValueSplit).toMatchObject([0b11110000, 0b11110010])
  })

  it("Should select SP correctly", () => {
    registers[RegisterId16.SP] = 0b1010101001010101;

    const SPRegisterValue = registerUtils.selectRegister16(RegisterId16.SP)

    expect(SPRegisterValue).toBe(0b1010101001010101)
  })

  it("Should select PC correctly", () => {
    registers[RegisterId16.PC] = 0b0011110001011100;

    const PCRegisterValue = registerUtils.selectRegister16(RegisterId16.PC)

    expect(PCRegisterValue).toBe(0b0011110001011100)
  })
});