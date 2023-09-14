func containsDuplicate(nums []int) bool {
    frequency := make(map[int]int)

    for _, num := range nums {
        if frequency[num] > 0 {
            return true
        }
        frequency[num]++
    }

    return false
}
