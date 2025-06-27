(defn reverseList [nums]
  (reduce-kv (fn [acc k v] (conj acc v)) [] (vec (reverse nums))))

(reverseList [1 2 3 4 5])