import { validateEvent, validateEmail } from './utils/validator.mjs';
import { formatDate } from './utils/helpers.mjs';
console.log('🎯 MODERN ES MODULES\n');
const event = {
 title: 'Conference',
 date: '2024-03-15',
 capacity: 100
};
const result = validateEvent(event);
console.log('Valid?', result.isValid);
