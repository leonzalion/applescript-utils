export type { ElementPathPart } from './types/element.js';
export { toggleCheckbox } from './utils/checkbox.js';
export {
	clickElement,
	createBaseElementReference,
	createElementReferences,
	getElements,
	waitForElementExists,
	waitForElementHidden,
	waitForElementMatch,
} from './utils/element.js';
export {
	BaseElementReference,
	ElementReference,
} from './utils/element-reference.js';
export { inputKeystrokes } from './utils/keystroke.js';
export { runAppleScript } from './utils/run.js';
export {
	allowSystemSoftware,
	giveAppPermissionAccess,
	openSystemPreferencesPane,
	reopenSystemPreferences,
} from './utils/system-preferences.js';
export { getTableRows, selectTableRow } from './utils/table.js';
export { setTextFieldValue } from './utils/text-field.js';
export { waitForWindow } from './utils/window.js';
