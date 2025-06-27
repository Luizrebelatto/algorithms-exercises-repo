(defn reverseList [coll]
  (let [size (count coll)
        indices (range (dec size) -1 -1)]
    (zipmap indices coll)))

(reverseList [1 2 3 4 5])