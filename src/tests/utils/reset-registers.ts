import { RegisterId8, registers } from "../../cpu/cpu";
import { INITIAL_REGISTER_VALUE } from "../../cpu/data/constants";

export function resetRegisters() {
	Object.keys(registers).forEach((registerId) => {
		registers[registerId as RegisterId8] = INITIAL_REGISTER_VALUE;
	})
}