const prewrittenCode = `
# Credit Card Validator Program
card_number = input("Enter a card number ")
card_number = card_number.replace(" ","")
card_number = card_number.replace("-","")
card_number = card_number[::-1]

sum_of_odd_nums = 0
sum_of_even_nums = 0
total = 0

for i in card_number[::2]:
    sum_of_odd_nums += int(i)

for i in card_number[1::2]:
    x = int(i) * 2
    if x >= 10:
        sum_of_even_nums += (1 + (int(x) % 10))
    else:
        sum_of_even_nums += int(x)

total = sum_of_even_nums + sum_of_odd_nums

if total % 10 == 0:
    print("Valid")
else:
    print("Invalid")

`;

document.getElementById('codeInput').value = prewrittenCode.trim();