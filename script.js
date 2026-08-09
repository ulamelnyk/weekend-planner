const moodButtons = document.querySelectorAll(".mood-btn");

const budgetSelect = document.getElementById("budget");

const generateBtn = document.getElementById("generate-btn");

const resultCard = document.querySelector(".result-card");

const destination = document.getElementById("destination");
const activity = document.getElementById("activity");
const reward = document.getElementById("reward");
const risk = document.getElementById("risk");
const budgetResult = document.getElementById("budget-result");

let selectedMood = "";

moodButtons.forEach(button => {
    button.addEventListener("click", () => {

        moodButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedMood = button.dataset.mood;
    });
});

const plans = [
    {
        destination: "Local Park",
        activity: "Ride a Bike",
        reward: "+15 Energy",
        risk: "Sore Legs Tomorrow",
        mood: "active",
        budget: "low"
    },

    {
        destination: "Nature Trail",
        activity: "Go Hiking",
        reward: "+20 Fresh Air",
        risk: "Mud on Your Shoes",
        mood: "active",
        budget: "low"
    },

    {
        destination: "Community Pool",
        activity: "Go Swimming",
        reward: "+15 Energy",
        risk: "Wet Hair All Day",
        mood: "active",
        budget: "medium"
    },

    {
        destination: "Coffee Shop",
        activity: "Read a Book",
        reward: "+10 Relaxation",
        risk: "Spend Too Much on Coffee",
        mood: "lazy",
        budget: "medium"
    },

    {
        destination: "Home",
        activity: "Watch Your Favorite Movie",
        reward: "+15 Comfort",
        risk: "Finish the Entire Snack Supply",
        mood: "lazy",
        budget: "low"
    },

    {
        destination: "Public Library",
        activity: "Explore New Books",
        reward: "+10 Knowledge",
        risk: "Leave With Five Books",
        mood: "lazy",
        budget: "low"
    },

    {
        destination: "Museum",
        activity: "Explore New Exhibits",
        reward: "+20 Knowledge",
        risk: "Lose Track of Time",
        mood: "adventurous",
        budget: "high"
    },

    {
        destination: "Nearby Town",
        activity: "Explore a New Area",
        reward: "+25 Memories",
        risk: "Get Slightly Lost",
        mood: "adventurous",
        budget: "medium"
    },

    {
        destination: "Beach",
        activity: "Watch the Sunset",
        reward: "+20 Happiness",
        risk: "Stay Longer Than Planned",
        mood: "adventurous",
        budget: "low"
    },

    {
        destination: "Amusement Park",
        activity: "Try Every Ride",
        reward: "+30 Excitement",
        risk: "Scream Too Much",
        mood: "adventurous",
        budget: "high"
    },

    {
        destination: "Downtown",
        activity: "Explore Local Shops",
        reward: "+15 Discoveries",
        risk: "Buy Something Unplanned",
        mood: "adventurous",
        budget: "medium"
    },

    {
        destination: "Botanical Garden",
        activity: "Take a Nature Walk",
        reward: "+20 Peace",
        risk: "Spend Hours Taking Photos",
        mood: "lazy",
        budget: "medium"
    },

    {
        destination: "Zoo",
        activity: "See Exotic Animals",
        reward: "+25 Happiness",
        risk: "Want Every Animal as a Pet",
        mood: "adventurous",
        budget: "high"
    },

    {
        destination: "Ice Cream Shop",
        activity: "Try New Flavors",
        reward: "+10 Sweetness",
        risk: "Can't Choose Just One",
        mood: "lazy",
        budget: "low"
    },

    {
        destination: "City Stadium",
        activity: "Play Soccer",
        reward: "+20 Fitness",
        risk: "Unexpected Muscle Pain",
        mood: "active",
        budget: "low"
    },

    {
        destination: "Rock Climbing Gym",
        activity: "Learn Climbing",
        reward: "+30 Confidence",
        risk: "Tired Arms Tomorrow",
        mood: "active",
        budget: "high"
    },

    {
        destination: "Farmers Market",
        activity: "Browse Fresh Produce",
        reward: "+15 Healthy Choices",
        risk: "Spend More Than Planned",
        mood: "lazy",
        budget: "medium"
    },

    {
        destination: "Lake",
        activity: "Rent a Kayak",
        reward: "+25 Adventure",
        risk: "Get Splashed",
        mood: "active",
        budget: "medium"
    },

    {
        destination: "Mini Golf Course",
        activity: "Play Mini Golf",
        reward: "+20 Fun",
        risk: "Become Too Competitive",
        mood: "adventurous",
        budget: "medium"
    },

    {
        destination: "Aquarium",
        activity: "Watch Marine Life",
        reward: "+20 Wonder",
        risk: "Spend Too Long at One Tank",
        mood: "lazy",
        budget: "high"
    },

    {
        destination: "Fitness Center",
        activity: "Try a New Workout Class",
        reward: "+25 Strength",
        risk: "Sore Muscles Tomorrow",
        mood: "active",
        budget: "medium"
    },

    {
        destination: "Outdoor Concert",
        activity: "Listen to Live Music",
        reward: "+25 Memories",
        risk: "Know Every Song for a Week",
        mood: "adventurous",
        budget: "high"
    },

    {
        destination: "Bakery",
        activity: "Try a New Pastry",
        reward: "+10 Happiness",
        risk: "Buy a Whole Box",
        mood: "lazy",
        budget: "low"
    },

    {
        destination: "Skating Rink",
        activity: "Go Ice Skating",
        reward: "+25 Excitement",
        risk: "A Few Funny Falls",
        mood: "active",
        budget: "medium"
    },

    {
        destination: "Escape Room",
        activity: "Solve Puzzles",
        reward: "+30 Achievement",
        risk: "Argue About Clues",
        mood: "adventurous",
        budget: "high"
    }
];

document.getElementById("try-again-btn")
    .addEventListener("click", () => {
        generateBtn.click();
    });

generateBtn.addEventListener("click", () => {

    if (!selectedMood) {
        alert("Please select a mood.");
        return;
    }

    const selectedBudget = budgetSelect.value;

    const matchingPlans = plans.filter(plan =>
        plan.mood === selectedMood &&
        plan.budget === selectedBudget
    );

    if (matchingPlans.length === 0) {
        alert("No plans found.");
        return;
    }

    const randomPlan =
        matchingPlans[Math.floor(Math.random() * matchingPlans.length)];

    destination.textContent = randomPlan.destination;
    activity.textContent = randomPlan.activity;
    reward.textContent = randomPlan.reward;
    risk.textContent = randomPlan.risk;

    if (randomPlan.budget === "low") {
        budgetResult.textContent = "$";
    }

    if (randomPlan.budget === "medium") {
        budgetResult.textContent = "$$";
    }

    if (randomPlan.budget === "high") {
        budgetResult.textContent = "$$$";
    }

    resultCard.style.display = "block";
});
