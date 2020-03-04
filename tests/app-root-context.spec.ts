import { AppRootContext } from '../src/app-root-context';

describe('AppRootContext', () => {

	let context: AppRootContext;

	beforeEach(() => {
		context = new AppRootContext();
	});

	it('created', () => {
		expect(context).toBeTruthy();
	});

	it('getItem undefined', () => {
		expect(context.getItem('a')).toBeUndefined();
	});

	it('getItem setItem', () => {
		context.setItem('a', { a: 'a' });
		expect(context.getItem('a')).toEqual({ a: 'a' });
	});

	it('setItem removeItem getItem', () => {
		context.setItem('a', { a: 'a' });
		expect(context.getItem('a')).toEqual({ a: 'a' });
		context.removeItem('a');
		expect(context.getItem('a')).toBeUndefined();
	});

	it('setItem clear', () => {
		context.setItem('a', { a: 'a' });
		expect(context.getItem('a')).toEqual({ a: 'a' });
		context.clear();
		expect(context['storage']).toEqual({});
	});
});
