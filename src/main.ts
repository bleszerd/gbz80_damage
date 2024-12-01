import { RegisterId8, registers } from "./cpu/cpu"
import { printBytes } from "./debug/print-bytes"

function main() {
    registers[RegisterId8.A] = 0b0110
    registers[RegisterId8.F] = 0b0110

    printBytes(registers[RegisterId8.A])
    printBytes(registers[RegisterId8.F])
}

main()