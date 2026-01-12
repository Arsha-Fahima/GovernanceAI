import re

def char_value(c):
    if c.isdigit():
        return int(c)
    return ord(c) - 55  # A=10 ... Z=35

def compute_gst_checksum(gstin14):
    factor = [1, 2] * 7
    total = 0

    for i, char in enumerate(gstin14):
        product = char_value(char) * factor[i]

        # GST rule: reduce if >= 36
        if product >= 36:
            product = (product // 36) + (product % 36)

        total += product

    checksum_value = (36 - (total % 36)) % 36

    if checksum_value < 10:
        return str(checksum_value)
    return chr(checksum_value + 55)

def is_valid_gstin(gstin: str) -> bool:
    gstin = gstin.upper().strip()

    if len(gstin) != 15:
        return False
    
    pattern = r"^\d{2}[A-Z]{5}\d{4}[A-Z][1-9A-Z]Z[0-9A-Z]$"
    if not re.match(pattern,gstin):
        return False
    
    state_code = int(gstin[:2])
    if state_code < 1 or state_code > 37:
        return False
    

    expected_checksum = compute_gst_checksum(gstin[:14])
    if gstin[14] != expected_checksum:
        return False

    return True

#validation part
# while True:
#     gstin_input = input("Enter a GSTIN num : ")
#     if is_valid_gstin(gstin_input): 
#         print(f"GSTIN {gstin_input.upper()} is valid ") 
#         break 
#     else: 
#         print(" Invalid GSTIN. Please enter a valid GSTIN.")