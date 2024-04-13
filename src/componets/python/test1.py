
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]
    
    
    left_half = merge_sort(left_half)
    right_half = merge_sort(right_half)
    
    
    return merge(left_half, right_half)

def merge(left, right):
    merged = []
    left_index = 0
    right_index = 0
    
    
    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            merged.append(left[left_index])
            left_index += 1
        else:
            merged.append(right[right_index])
            right_index += 1
    
   
    merged.extend(left[left_index:])
    merged.extend(right[right_index:])
    
    return merged
def quickSort(list1):
    if len(list1) <= 1:
        return list1
    else:
        pivot = list1[0]
        left = [i for i in list1[1:] if i <= pivot]
        right = [i for i in list1[1:] if i > pivot]
        return quickSort(left) + [pivot] + quickSort(right)

if __name__ == "__main__":
    arr = "thisstringisnotsorted"
    strarr = [ i for i in arr]
    print(strarr)
    sorted_arr = merge_sort(strarr)
    quickSortarr = quickSort(strarr)
    print("Original array:", arr)
    print(quickSortarr)
    print("Sorted array:", "".join(sorted_arr))