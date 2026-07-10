// // C:\Marktale-projectes\My-Chef-Mom\src\components\data\mealPlans.ts
// import { Leaf, Drumstick } from "lucide-react";

// export const MEAL_PLANS = {
//   veg: {
//     brand: "The Chef Mom",
//     tagline: "Mom's Delhi flavours in Dubai",
//     color: "from-green-400 to-green-600",
//     shadow: "shadow-green-200",
//     badgeBg: "bg-green-500",
//     icon: Leaf,
//     oneMeal: [
//       {
//         name: "Half Meal",
//         weekly: 119,
//         monthly: 449,
//         features: ["1 Dal / Curry", "1 Dry Sabzi", "3 Roti or Rice", "Salad"],
//       },
//       {
//         name: "Full Meal",
//         weekly: 135,
//         monthly: 549,
//         features: [
//           "1 Dal / Curry",
//           "1 Dry Sabzi",
//           "4 Roti & Rice",
//           "Salad & Dessert",
//         ],
//       },
//     ],
//     twoMeals: [
//       {
//         name: "Basic Plan",
//         price: 769,
//         features: [
//           "2 Meals / Day",
//           "Standard Menu",
//           "Roti, Rice, Dal, Sabzi, Salad",
//           "Less Oil",
//         ],
//       },
//       {
//         name: "Standard Plan",
//         price: 849,
//         badge: "Most Preferred ⭐",
//         features: [
//           "2 Meals / Day",
//           "Premium Menu",
//           "Includes Sweets",
//           "Flexible Delivery",
//         ],
//       },
//       {
//         name: "Premium Plan",
//         price: 1049,
//         features: [
//           "2 Meals / Day",
//           "Deluxe Menu",
//           "Special Weekend Dishes",
//           "Customizable portions",
//         ],
//       },
//     ],
//   },
//   nonveg: {
//     brand: "CurryCraft",
//     tagline: "Authentic Non-Veg Delicacies",
//     color: "from-rose-500 to-rose-700",
//     shadow: "shadow-rose-200",
//     badgeBg: "bg-rose-500",
//     icon: Drumstick,
//     oneMeal: [
//       {
//         name: "Half Meal",
//         weekly: 157,
//         monthly: 625,
//         features: [
//           "1 Chicken/Mutton Curry",
//           "1 Dry Sabzi",
//           "3 Roti or Rice",
//           "Salad",
//         ],
//       },
//       {
//         name: "Full Meal",
//         weekly: 169,
//         monthly: 689,
//         features: [
//           "1 Chicken/Mutton Curry",
//           "1 Dry Sabzi",
//           "4 Roti & Rice",
//           "Salad & Dessert",
//         ],
//       },
//     ],
//     twoMeals: [
//       {
//         name: "Basic Plan",
//         price: 949,
//         features: [
//           "2 Meals / Day",
//           "Standard Non-Veg Menu",
//           "Chicken 3x a week",
//           "Less Oil",
//         ],
//       },
//       {
//         name: "Standard Plan",
//         price: 1049,
//         badge: "Most Preferred ⭐",
//         features: [
//           "2 Meals / Day",
//           "Premium Non-Veg Menu",
//           "Chicken/Mutton",
//           "Includes Sweets",
//         ],
//       },
//       {
//         name: "Premium Plan",
//         price: 1249,
//         features: [
//           "2 Meals / Day",
//           "Deluxe Non-Veg Menu",
//           "Special Weekend Dishes",
//           "Customizable portions",
//         ],
//       },
//     ],
//   },
// };

import { Leaf, Drumstick } from "lucide-react";

export const MEAL_PLANS = {
  veg: {
    brand: "The Chef Mom",
    tagline: "Mom's Delhi flavours in Dubai",
    color: "from-green-400 to-green-600",
    shadow: "shadow-green-200",
    badgeBg: "bg-green-500",
    icon: Leaf,
    oneMeal: [
      {
        name: "Half Meal",
        weekly: 125,
        monthly: 469,
        features: ["1 Dal / Curry", "1 Dry Sabzi", "3 Roti or Rice", "Salad"],
      },
      {
        name: "Full Meal",
        weekly: 145,
        monthly: 569,
        features: [
          "1 Dal / Curry",
          "1 Dry Sabzi",
          "4 Roti & Rice",
          "Salad & Dessert",
        ],
      },
    ],
    twoMeals: [
      {
        name: "Basic Plan",
        price: 769,
        features: [
          "2 Meals / Day",
          "Standard Menu",
          "Roti, Rice, Dal, Sabzi, Salad",
          "Less Oil",
        ],
      },
      {
        name: "Standard Plan",
        price: 849,
        badge: "Most Preferred ⭐",
        features: [
          "2 Meals / Day",
          "Premium Menu",
          "Includes Sweets",
          "Flexible Delivery",
        ],
      },
      {
        name: "Premium Plan",
        price: 1049,
        features: [
          "2 Meals / Day",
          "Deluxe Menu",
          "Special Weekend Dishes",
          "Customizable portions",
        ],
      },
    ],
  },
  nonveg: {
    brand: "CurryCraft",
    tagline: "Authentic Non-Veg Delicacies",
    color: "from-rose-500 to-rose-700",
    shadow: "shadow-rose-200",
    badgeBg: "bg-rose-500",
    icon: Drumstick,
    oneMeal: [
      {
        name: "Half Meal",
        weekly: 165,
        monthly: 629,
        features: [
          "1 Chicken/Mutton Curry",
          "1 Dry Sabzi",
          "3 Roti or Rice",
          "Salad",
        ],
      },
      {
        name: "Full Meal",
        weekly: 185,
        monthly: 699,
        features: [
          "1 Chicken/Mutton Curry",
          "1 Dry Sabzi",
          "4 Roti & Rice",
          "Salad & Dessert",
        ],
      },
    ],
    twoMeals: [
      {
        name: "Basic Plan",
        price: 949,
        features: [
          "2 Meals / Day",
          "Standard Non-Veg Menu",
          "Chicken 3x a week",
          "Less Oil",
        ],
      },
      {
        name: "Standard Plan",
        price: 1049,
        badge: "Most Preferred ⭐",
        features: [
          "2 Meals / Day",
          "Premium Non-Veg Menu",
          "Chicken/Mutton",
          "Includes Sweets",
        ],
      },
      {
        name: "Premium Plan",
        price: 1249,
        features: [
          "2 Meals / Day",
          "Deluxe Non-Veg Menu",
          "Special Weekend Dishes",
          "Customizable portions",
        ],
      },
    ],
  },
};
