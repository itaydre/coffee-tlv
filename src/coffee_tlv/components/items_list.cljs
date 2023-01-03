(ns coffee-tlv.components.items-list
  (:require
    [coffee-tlv.data :refer [coffee-shops]]
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(defn badge []
  [:div.badge-open "Open"])




(defn circle [items]
  [:div.level-list
   (doall (for [item items] 
            [:div.circle-normal{:style {:background-color
                                        (map :level (vals coffee-shops) "green")}} item]))])


(defn fancy-level-list []
  [:div.fancy-level-list
   [:p "Fancy list:"]
   [circle (range 1 11)]])

(defn item-card []

  [:div.items-card-list
   (for [item (vals coffee-shops)]
     [:div.item-card
      [:div.item-header
       [:div.icon-title
        [:div.icon-img
         [:img.item-icon {:src (:img item)}]]
        [:div.title-desc
         [:p.item-title (:title item)] 
         [:p.item-desc (:description item)]
         [:p.item-location (:location item)]
         [:p (:level item)]]]
       [:div.badge-ig
        [:a {:href "https://www.w3schools.com"} "IG"]
        [badge]]]
      [fancy-level-list]
      ])])
       
       
       

(defn items-list []
  [:div.items-list "Welcome to CoffeeTLV"
   [item-card]])
   
