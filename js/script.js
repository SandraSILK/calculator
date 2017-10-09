var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '/', '*', ',', '=', '(', ')', 'C'];
var empty = '';

for (i = 0; i < nums.length; i++) {
    var valueArray = i;

    if (nums[i] == 'C') {
        empty += '<div class="number" onclick="check(' + valueArray + ')" value="' + valueArray + '" style="width:80px">' + nums[i] + '</div>';
    } else {
        empty += '<div class="number" onclick="check(' + valueArray + ')" value="' + valueArray + '">' + nums[i] + '</div>';
    }
    if ((i + 1) % 4 == 0) {
        empty += '<div style="clear:both"></div>'
    }
};

document.getElementById('buttons').innerHTML = empty;
var text = document.getElementById('text');

function check(valueArray) {
    for (i = 0; i < nums.length; i++) {
        if (i == valueArray) {
            if (nums[i] == '=') {
                text.value = eval(text.value);
                console.log(text.value)
            } else {
                text.value += nums[i];

                if (nums[i] == 'C') {
                    text.value = '';
                }
            }

        }
    };
}
