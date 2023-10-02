import localStorage from "../src";
import { beforeEach, describe, expect, it } from '@jest/globals';

describe('StreamDemux', () => {
	beforeEach(async () => {
		localStorage.clear();
	});

	it('should not return prototypical things', () => {
		expect(localStorage.getItem('key')).toBe(null);
	});

	it('should not make assuptions about key positioning', () => {
		localStorage.setItem('a', '1');
		expect(localStorage.key(0)).toBe('a');	
	});

	it('should report the correct length', () => {
		localStorage.setItem('a', '1');
		localStorage.setItem('b', '2');
		expect(localStorage.getItem('a')).toBe('1');
		expect(localStorage.getItem('b')).toBe('2');
		expect(localStorage.length).toBe(2);
	});

	it('should return the correct values for undefined items.', () => {
		expect(localStorage['c']).toBe(undefined);
		expect(localStorage.getItem('c')).toBe(null);
	});

	it('should return "undefined" for values that are set to undefined.', () => {
		localStorage.setItem('a', '1');
		localStorage.setItem('b', '2');
		localStorage.setItem('c', undefined as any);
		expect(localStorage.getItem('c')).toBe("undefined");
		expect(localStorage.length).toBe(3);
	});

	it('should report the correct value and length when items are removed.', () => {
		localStorage.setItem('a', '1');
		localStorage.setItem('b', '2');
		localStorage.setItem('c', undefined as any);
		localStorage.removeItem('c');
		expect(localStorage.getItem('c')).toBe(null);
		expect(localStorage.length).toBe(2);
	});

	it('should report the correct value and length when items are removed.', () => {
		localStorage.setItem('a', '1');
		localStorage.setItem('b', '2');
		localStorage.clear();
		expect(localStorage.getItem('a')).toBe(null);
		expect(localStorage.getItem('b')).toBe(null);
		expect(localStorage.length).toBe(0);
	});

	it('should handle setting prototype field names properly', () => {
		expect(localStorage.getItem('length')).toBe(null);
		localStorage.setItem('length', '12')
		expect(localStorage.length).toBe(1);
		expect(localStorage.getItem('length')).toBe('12');
		localStorage.removeItem('length');
		expect(localStorage.getItem('length')).toBe(null);
	});
});