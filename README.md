# 🛡️ CyberShield: Incident Response Simulator

## Pseudocode

### Start

- Create three difficulty levels:
  - Easy
  - Medium
  - Hard

- Create **20 cybersecurity incidents** for each difficulty level.

- Each incident contains:
  - Incident description
  - Four answer choices
  - Correct answer

### Create Variables

- Score
- Current Incident
- Selected Difficulty
- Timer
- Incident Number

### Start Screen

- Display the Start Screen.
- Display the three difficulty levels:
  - Easy
  - Medium
  - Hard
- Wait for the player to select a difficulty.

### When a Difficulty is Selected

- Save the selected difficulty.
- Load the 20 incidents for the selected difficulty.
- Shuffle the incidents into a random order.
- Set the score to **0**.
- Set the incident number to **1**.
- Display the first incident.

---

## Game Loop

### For Each Incident

Display:

- Incident description
- Four answer choices
- Current score
- **Security Incident X of 20**

### Set Timer

- Easy → 20 seconds
- Medium → 15 seconds
- Hard → 10 seconds

Start the timer.

Wait for the player to select an answer.

### If the Player Answers Before Time Runs Out

Stop the timer.

#### If the answer is correct:

- Increase the score by **1**.
- Display:

```
✅ Incident Resolved
```

- Play the correct-answer sound.

#### Otherwise:

- Display:

```
🚨 Security Breach
```

- Play the incorrect-answer sound.

### If the Timer Reaches Zero

Display:

```
⏰ Time's Up! Threat Escalated
```

- Play the incorrect-answer sound.

### Continue

- Disable the answer choices.
- Display the **Next Incident** button.

When the player clicks **Next Incident**:

- Increase the incident number by **1**.

If there are incidents remaining:

- Reset the timer.
- Display the next incident.

Otherwise:

- End the game.

---

# End Game

Stop the timer.

Display the player's final score out of **20**.

### Win Condition

If the player scores **14 or more**:

```
🏆 Mission Successful!
Company Secured
```

### Lose Condition

Otherwise:

```
💀 Mission Failed!
Company Compromised
```

Display the **Restart** button.

When the player clicks **Restart**:

- Reset the score.
- Reset the incident number.
- Reset the timer.
- Return to the difficulty selection screen.

## End
