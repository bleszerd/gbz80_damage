export function printBytes(value: number, bytes?: number) {
	console.log('0b' + value.toString(2).padStart(bytes ?? 8, '0'));
}