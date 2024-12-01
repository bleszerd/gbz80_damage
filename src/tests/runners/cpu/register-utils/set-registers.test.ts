import { afterEach, describe, expect, it } from "vitest";
import { resetRegisters } from "../../../utils/reset-registers";
import { RegisterId16, RegisterId8, registers, registerUtils } from "../../../../cpu/cpu";

describe("CPU Register Utils - Setters", () => {
  afterEach(() => {
    resetRegisters()
  })

  it("Should set AF correctly", () => {
    registerUtils.setRegister16(RegisterId16.AF, 0b0001101001101001)

    expect(registers[RegisterId8.A]).toBe(0b00011010)
    expect(registers[RegisterId8.F]).toBe(0b01101001)
  })

  it("Should set BC correctly", () => {
    registerUtils.setRegister16(RegisterId16.BC, 0b0111011001101010)

    expect(registers[RegisterId8.B]).toBe(0b01110110)
    expect(registers[RegisterId8.C]).toBe(0b01101010)
  })

  it("Should set DE correctly", () => {
    registerUtils.setRegister16(RegisterId16.DE, 0b1111111100000000)

    expect(registers[RegisterId8.D]).toBe(0b11111111)
    expect(registers[RegisterId8.E]).toBe(0b00000000)
  })

  it("Should set HL correctly", () => {
    registerUtils.setRegister16(RegisterId16.HL, 0b1100110011001100)

    expect(registers[RegisterId8.H]).toBe(0b11001100)
    expect(registers[RegisterId8.L]).toBe(0b11001100)
  })

  it("Should set PC correctly", () => {
    registerUtils.setRegister16(RegisterId16.PC, 0b0101010101010101)

    expect(registers[RegisterId16.PC]).toBe(0b0101010101010101)
  })

  it("Should set SP correctly", () => {
    registerUtils.setRegister16(RegisterId16.SP, 0b1010101010101010)

    expect(registers[RegisterId16.SP]).toBe(0b1010101010101010)
  })
});