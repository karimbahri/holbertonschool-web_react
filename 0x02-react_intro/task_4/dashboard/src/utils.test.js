import { getFullYear } from "../../../task_3/dashboard/src/utils";
import { getFooterCopy } from "../../../task_2/dashboard/src/utils";
import { getLatestNotification } from "../../../task_3/dashboard/src/utils";

test('test the function getFullYear', () => {
    expect(getFullYear()).toBe(2021);
})

test('test the function getFooterCopy with true argument', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
})

test('test the function getFooterCopy with false argument', () => {
    expect(getFooterCopy(true)).toBe('Holberton School main dashboard');
})

test('test the function getLatestNotification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
})