/* Check for enter on keydown */

document
	.getElementById('keydown-is-enter')
	.addEventListener('keydown', keydown_is_enter);

function keydown_is_enter(key_event) {
	key_event.preventDefault();
	if (Belt.isEnter(key_event)) {
		document
			.getElementById('keydown-is-enter-output')
			.innerText = 'Yes';
	} else {
		document
			.getElementById('keydown-is-enter-output')
			.innerText = 'No';
	}
}



/* Check if a keydown is any specified key */

document
	.getElementById('keydown-is-hash')
	.addEventListener('keydown', keydown_is_hash);

function keydown_is_hash(key_event) {
	key_event.preventDefault();
	if (Belt.keyCodeLookup(key_event) === '#') {
		document
			.getElementById('keydown-is-hash-output')
			.innerText = 'Yes.';
	} else {
		document
			.getElementById('keydown-is-hash-output')
			.innerText = 'No.';
	}
}

document
	.getElementById('key-code-lookup')
	.addEventListener('keydown', key_code_lookup);

function key_code_lookup(key_event) {
	key_event.preventDefault();
	document
		.getElementById('key-code-lookup-output')
		.innerText = Belt.keyCodeLookup(key_event);
}



/* Decimal to Hex and Back */

document
	.getElementById('decimal-to-hex-decimal')
	.addEventListener('input', decimal_to_hex);

function decimal_to_hex(key_event) {
	var decimal = parseInt(this.value);
	var hex = Belt.decimalToHex(decimal);
	if ( hex === 'NaN' ) { hex = ''; }
	document.getElementById('decimal-to-hex-hex').value = hex;
}

document
	.getElementById('decimal-to-hex-hex')
	.addEventListener('input', hex_to_decimal);

function hex_to_decimal(key_event) {
	var hex = this.value;
	var decimal = Belt.hexToDecimal(hex);
	if ( isNaN(decimal) ) { decimal = ''; }
	document.getElementById('decimal-to-hex-decimal').value = decimal;
}



/* Check if a variable is an integer */

document
	.getElementById('a-is-integer')
	.addEventListener('click', a_is_integer);

function a_is_integer(click_event) {
	if (Belt.strictInteger('a') !== undefined) {
		document.getElementById('a-is-integer-output').innerText = 'Yes';
	} else {
		document.getElementById('a-is-integer-output').innerText = 'No';
	}
}

document
	.getElementById('4-is-integer')
	.addEventListener('click', four_is_integer);

function four_is_integer(click_event) {
	if (Belt.strictInteger(4) !== undefined) {
		document.getElementById('4-is-integer-output').innerText = 'Yes';
	} else {
		document.getElementById('4-is-integer-output').innerText = 'No';
	}
}

document
	.getElementById('4-point-5-is-integer')
	.addEventListener('click', four_point_five_is_integer);

function four_point_five_is_integer(click_event) {
	if (Belt.strictInteger(4.5) !== undefined) {
		document.getElementById('4-point-5-is-integer-output').innerText = 'Yes';
	} else {
		document.getElementById('4-point-5-is-integer-output').innerText = 'No';
	}
}



/* Check if two objects are the same */

document
	.getElementById('object-equal-1')
	.addEventListener('click', object_equal_1);

function object_equal_1(click_event) {
	var object1 = { string: "a", integerArray: [1, 2], nested: { a: "a" } };
	var object2 = { string: "a", integerArray: [1, 2], nested: { a: "a" } };
	if ( Belt.objectEqual(object1, object2) ) {
		document.getElementById('object-equal-1-output').innerText = 'Yes';
	} else {
		document.getElementById('object-equal-1-output').innerText = 'No';
	}
}

document
	.getElementById('object-equal-2')
	.addEventListener('click', object_equal_2);

function object_equal_2(click_event) {
	var object1 = { string: "a", integerArray: [2, 2], nested: { a: "a" } };
	var object2 = { string: "a", integerArray: [2, 3], nested: { a: "a" } };
	if ( Belt.objectEqual(object1, object2) ) {
		document.getElementById('object-equal-2-output').innerText = 'Yes';
	} else {
		document.getElementById('object-equal-2-output').innerText = 'No';
	}
}



/* Format Human Readable Dollars */

document
	.getElementById('format-human-readable-dollars')
	.addEventListener('input', format_human_readable_dollars);

function format_human_readable_dollars(input_event) {
	var human_readable_dollars;
	var input = Belt.strictFloat(this.value);
	if (!input) {
		human_readable_dollars = 'Please provide a decimal number.';
	} else {
		human_readable_dollars = Belt.formatHumanReadableDollars(input);
	}
	document
		.getElementById('format-human-readable-dollars-output')
		.innerText = human_readable_dollars;
}



/* Parse Get Parameters */

document
	.getElementById('parse-get-parameters')
	.addEventListener('input', parse_get_parameters);

function parse_get_parameters(input_event) {
	document
		.getElementById('parse-get-parameters-output')
		.innerText = JSON.stringify(Belt.parseGetParameters(this.value));
}



/* Check if two objects are the same */

document
	.getElementById('parse-get-parameters-from-url')
	.addEventListener('click', parse_get_parameters_from_url);

function parse_get_parameters_from_url(click_event) {
	var parameters = Belt.parseGetParametersFromURL();
	document
		.getElementById('parse-get-parameters-from-url-output')
		.innerText = JSON.stringify(parameters);
}

if ( ! Belt.objectEqual(Belt.parseGetParametersFromURL().length, {})) {
	document.getElementById('parse-get-parameters-from-url').focus();
}



/* Parse JSON */

document
	.getElementById('parse-json')
	.addEventListener('input', parse_json);

function parse_json(input_event) {
	var output = JSON.stringify(Belt.parseJSON(this.value));
	if (this.value === '') { output = ''; }
	if (output === undefined) { output = 'Invalid JSON'; }
	document
		.getElementById('parse-json-output')
		.innerText = output;
}
