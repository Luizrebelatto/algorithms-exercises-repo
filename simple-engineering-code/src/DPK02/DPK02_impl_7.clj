(defn reverseList [nums]
  (let [len (count nums)]
    (map #(nth nums (- len 1 %)) (range len))))

(reverseList [1 2 3 4 5])